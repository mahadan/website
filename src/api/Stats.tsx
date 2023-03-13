import { updateDoc } from "firebase/firestore";
import { useFirestoreDocData } from "reactfire";
import { z } from "zod";
import { useStatsRef } from "./dbrefs";

export const StatsSchema = z
  .object({
    camps: z
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
      .transform((d) => Number(d)),
    units: z
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
      .transform((d) => Number(d)),
    districts: z
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
      .transform((d) => Number(d)),
  })
  .strict();

export type Stats = z.infer<typeof StatsSchema>;
export type StatsWithId = Stats & { id: string };

export const useGetStats = () => {
  const { ref, baseRef } = useStatsRef();

  const { data } = useFirestoreDocData(baseRef, {
    suspense: true,
    idField: "id",
  });

  return data as StatsWithId;
};

export const useUpdateStats = () => {
  const { ref, baseRef } = useStatsRef();

  const mutate = async (payload: Stats) => {
    await updateDoc(ref, payload);
  };
  return { mutate };
};
