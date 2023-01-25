import { collection, doc, QueryDocumentSnapshot } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { BaseUserWithID } from "./User";

export function createConverter<T>() {
  return {
    toFirestore: (data: T) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  } as const;
}

export const useUserRef = () => {
  const firestore = useFirestore();

  const baseRef = collection(firestore, "users");

  const ref = collection(firestore, "users").withConverter(createConverter<BaseUserWithID>());

  const getRefById = (id: string) => doc(ref, id);

  return {
    ref,
    baseRef,
    getRefById,
  };
};
