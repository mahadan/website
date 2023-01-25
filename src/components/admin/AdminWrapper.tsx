import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { useSigninCheck } from "reactfire";

const AdminWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { status, data: signInCheckResult } = useSigninCheck({
    suspense: true,
  });
  const router = useRouter();

  if (
    status === "success" &&
    signInCheckResult.signedIn === true &&
    signInCheckResult.user.email === "rotaractindia.dev@gmail.com"
  ) {
    return <>{children}</>;
  } else {
    router.push("/");
    return null;
  }
};

export default AdminWrapper;
