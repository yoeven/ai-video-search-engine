import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import RootProvider from "src/providers/RootProvider";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      {/* <DefaultSeo
        titleTemplate="JigsawStack | %s"
        title="Dashboard"
        description={
          "JigsawStack provides all the APIs you need in one place, with high reliability and simple pricing. It's built from the ground up to be blazing fast and DX friendly."
        }
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://jigsawstack.com",
          site_name: "JigsawStack",
          images: [
            {
              url: "https://dash.jigsawstack.com/banner.png",
              alt: "JigsawStack",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/logo_small.png",
          },
        ]}
        additionalMetaTags={[
          {
            name: "twitter:image",
            content: "https://dash.jigsawstack.com/banner.png",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:title",
            content: "JigsawStack",
          },
          {
            name: "twitter:description",
            content:
              "JigsawStack provides all the APIs you need in one place, with high reliability and simple pricing. It's built from the ground up to be blazing fast and DX friendly.",
          },
        ]}
      /> */}
      <RootProvider {...pageProps}>
        <Component {...pageProps} />
      </RootProvider>
    </>
  );
};

export default App;
