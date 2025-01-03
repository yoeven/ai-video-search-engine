import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import RootProvider from "src/providers/RootProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | AI Video Search Engine"
        title="Home"
        description={"Search videos with a question and get related answers from the video and chat with any video"}
      />
      <RootProvider {...pageProps}>
        <Component {...pageProps} />
      </RootProvider>
    </>
  );
};

export default App;
