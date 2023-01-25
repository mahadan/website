import React, { PropsWithChildren, Suspense } from "react";
import { Box } from "@mui/material";
import { AuthProvider, useFirebaseApp, FirestoreProvider } from "reactfire";
import { getAuth } from "firebase/auth"; // Firebase v9+
import { getFirestore } from "firebase/firestore";
import AppHeader from "./ui/AppHeader";
import AppFooter from "./ui/AppFooter";

const StaticLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`
  const auth = getAuth(app);
  const firestoreInstance = getFirestore(app);
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            position: "relative",
          }}
          id="static-layout"
        >
          <AppHeader />
          <Suspense fallback={<div style={{ flexGrow: 1 }}>content loader</div>}>{children}</Suspense>
          <AppFooter />
        </Box>
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default StaticLayout;
