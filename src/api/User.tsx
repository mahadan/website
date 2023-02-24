import { User } from "firebase/auth";
import { addDoc, deleteDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, uploadBytes } from "firebase/storage";

import { doc } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";
import { z } from "zod";
import { useUserRef } from "./dbrefs";
import { ref } from "firebase/storage";
import { useStorage } from "reactfire";

export const useStorageAPI = () => {
  const storage = useStorage();

  const createStorageRef = (_ref: string) => ref(storage, _ref);

  return { createStorageRef, storage };
};
export function validateUrl(value: string) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

export const BaseUserSchema = z
  .object({
    createdAt: z.date(),
    fullName: z.string().min(4),
    email: z.string().email(),
    emailVerified: z.boolean(),
    profileStatus: z.enum(["NEW-USER", "ACTIVE-USER", "INACTIVE-USER", "TERMINATED"]),
    photoUrl: z
      .any()
      .refine((data) => data !== undefined, "Required")
      .optional(),

    mobile: z.string().min(10).max(10).optional(),
    alternateMobile: z.string().min(10).max(10).optional(),

    professional: z
      .object({
        companyName: z.string().min(1),
        qualification: z.string().min(1),
        address: z.string().min(1),
        website: z.optional(z.string().min(1)),
      })
      .optional(),

    mailingAddress: z.string().min(1).optional(),

    rotaract: z.object({
      clubName: z.string().min(1),
      clubId: z.string().min(1).optional(),
    }),

    rotary: z
      .object({
        clubName: z.string().min(1),
        clubId: z.string().min(1),
      })
      .optional(),

    district: z
      .string()
      .refine(
        (data) => {
          if (data !== undefined) {
            return !isNaN(parseInt(data));
          } else {
            return false;
          }
        },
        { message: "Please enter valid district number" }
      )
      .transform((d) => Number(d)),

    role: z.string().min(4).optional(),
    rolePriority: z
      .string()
      .refine(
        (data) => {
          if (data !== undefined) {
            return !isNaN(parseInt(data));
          } else {
            return false;
          }
        },
        { message: "Please enter valid number" }
      )
      .transform((d) => Number(d))
      .optional(),
  })
  .partial();

export type BaseUser = z.infer<typeof BaseUserSchema>;
export type BaseUserWithID = BaseUser & { id: string };

export const useDeleteUser = () => {
  const { baseRef, ref, getRefById } = useUserRef();

  const mutate = async (id: string) => {
    const q = query(ref, where("id", "==", id));
    const existingUser = await getDocs(q);

    if (existingUser.docs.length !== 0) {
      deleteDoc(doc(baseRef, id));
    }
  };

  return { mutate };
};

export const useGetUserByEmail = (email: string) => {
  const { ref, baseRef, getRefById } = useUserRef();
  const q = query(baseRef, where("email", "==", email));
  return useFirestoreCollectionData(q, {
    idField: "id",
    suspense: true,
  });
};

export const useGetAllUsers = () => {
  const { baseRef, getRefById } = useUserRef();
  const q = query(baseRef, orderBy("rolePriority", "asc"));

  const t = useFirestoreCollectionData(q, {
    suspense: true,
  });

  // (t.data as BaseUserWithID[]).map((i) => {
  //   const ref = getRefById(i.id);
  //   updateDoc(ref, {
  //     district: Number(i.district),
  //     rolePriority: Number(i.rolePriority),
  //   });
  // });

  return t;
};

export const useCreateUserAtFirstLogin = () => {
  const { ref, getRefById } = useUserRef();

  const mutate = async (user: User) => {
    const q = query(ref, where("email", "==", user.email));
    const existingUser = await getDocs(q);

    if (existingUser.docs.length === 0) {
      await setDoc(getRefById(user.uid), {
        id: user.uid,
        createdAt: new Date(),
        email: user.email || "",
        emailVerified: user.emailVerified,
        photoUrl: user.photoURL,
        fullName: user.displayName || user.email || "NOT SET",
        profileStatus: "NEW-USER",
      });
    } else {
      const exisUserID = existingUser.docs[0].id;
      const exisUser = existingUser.docs[0].data();
      if (exisUserID !== user.uid) {
        await setDoc(getRefById(user.uid), { ...exisUser, id: user.uid });
        await deleteDoc(getRefById(exisUserID));
      }
    }
  };

  return { mutate };
};

export const useCreateManualUser = () => {
  const { ref, baseRef, getRefById } = useUserRef();
  const { createStorageRef, storage } = useStorageAPI();

  const mutate = async (user: BaseUser) => {
    const q = query(baseRef, where("email", "==", user.email));
    const existingUser = await getDocs(q);
    let newPhotoUrl = "";
    const { photoUrl } = user;

    if (existingUser.docs.length === 0) {
      const createdUser = await addDoc(ref, {
        ...user,
        id: "auto",
        createdAt: new Date(),
        emailVerified: false,
        profileStatus: "NEW-USER",
        photoUrl: "",
      });

      if (photoUrl) {
        console.log(photoUrl);
        const storageRef = createStorageRef(`profile-photo/${createdUser.id}`);

        const { ref } = await uploadBytes(storageRef, photoUrl.blob, {
          contentType: "image/png",
        });
        newPhotoUrl = await getDownloadURL(ref);

        await updateDoc(getRefById(createdUser.id), {
          id: createdUser.id,
          photoUrl: newPhotoUrl,
        });
      } else {
        await updateDoc(getRefById(createdUser.id), {
          id: createdUser.id,
        });
      }
    } else {
      throw new Error("Email already assigned with other user");
    }
  };

  return { mutate };
};
