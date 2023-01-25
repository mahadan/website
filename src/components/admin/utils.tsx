import { useRouter } from "next/router";

export const useIsAdminPath = () => {
  const router = useRouter();

  return router.pathname.startsWith("/admin");
};
