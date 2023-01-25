import { User } from "firebase/auth";
import { addDoc, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";
import { z } from "zod";
import { useUserRef } from "./dbrefs";

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

    district: z.string().refine(
      (data) => {
        if (data !== undefined) {
          return !isNaN(parseInt(data));
        } else {
          return false;
        }
      },
      { message: "Please enter valid district number" }
    ),

    roles: z.array(z.any()).optional(),
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
  const { baseRef } = useUserRef();

  return useFirestoreCollectionData(baseRef, {
    suspense: true,
  });
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

  const mutate = async (user: BaseUser) => {
    const q = query(baseRef, where("email", "==", user.email));
    const existingUser = await getDocs(q);

    if (existingUser.docs.length === 0) {
      const createdUser = await addDoc(ref, {
        ...user,
        id: "auto",
        createdAt: new Date(),
        emailVerified: false,
        profileStatus: "NEW-USER",
      });
      await updateDoc(getRefById(createdUser.id), {
        id: createdUser.id,
      });
    } else {
      throw new Error("Email already assigned with other user");
    }
  };

  return { mutate };
};
