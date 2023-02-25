import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "styles/theme";
import createEmotionCache from "styles/createEmotionCache";
import BaseLayout from "components/BaseLayout";
import { FirebaseAppProvider } from "reactfire";
import WrapAdminLayout from "components/admin/WrapAdminLayout";

const firebaseConfig = {
  apiKey: "AIzaSyDsZweylBecf9vCemNvbMG0pJoewhSnASY",
  authDomain: "mahadan-cdecc.firebaseapp.com",
  projectId: "mahadan-cdecc",
  storageBucket: "mahadan-cdecc.appspot.com",
  messagingSenderId: "450907249607",
  appId: "1:450907249607:web:d609f201eff1c4cf4497e2",
  measurementId: "G-6156NDGHT5",
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Mahadan 8.0 - International Blood Donation Event</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
          <BaseLayout>
            <WrapAdminLayout>
              <Component {...pageProps} />
            </WrapAdminLayout>
          </BaseLayout>
        </FirebaseAppProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
