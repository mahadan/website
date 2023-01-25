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
  apiKey: "AIzaSyAzuPugGVccrmJ8NEmX9EABljVbodL2h-8",
  authDomain: "rotaract-india.firebaseapp.com",
  projectId: "rotaract-india",
  storageBucket: "rotaract-india.appspot.com",
  messagingSenderId: "731050450531",
  appId: "1:731050450531:web:3e57082ae1917d909aa256",
  measurementId: "G-09RHCR27T5",
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
