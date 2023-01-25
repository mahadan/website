import { Button } from "@mui/material";
import React, { Suspense } from "react";
import { useSigninCheck } from "reactfire";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCreateUserAtFirstLogin } from "api/User";
import dynamic from "next/dynamic";
const UserMenuWrapper = dynamic(import("./UserMenu"));

const useSignInWithGoogleAndCreateUser = () => {
  const { mutate } = useCreateUserAtFirstLogin();
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const login = async () => {
    const result = await signInWithPopup(auth, provider);

    await mutate(result.user);
  };
  return { login };
};

const LoginDisplay: React.FC = () => {
  const { login } = useSignInWithGoogleAndCreateUser();
  const { status, data: signInCheckResult } = useSigninCheck({
    suspense: true,
  });

  if (signInCheckResult.signedIn === true && signInCheckResult.user.email) {
    return (
      <Suspense fallback={<></>}>
        <UserMenuWrapper email={signInCheckResult.user.email} />
      </Suspense>
    );
  } else {
    return (
      <Button
        onClick={async () => {
          try {
            await login();
          } catch (err) {
            //@ts-expect-error
            console.error(err.message);
          }
        }}
      >
        LOGIN
      </Button>
    );
  }
};

export default LoginDisplay;
