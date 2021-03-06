import "@/styles/global.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { usePanelbear } from "@panelbear/panelbear-nextjs";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import { Analytics } from "@/components/Analytics";
import { SEO } from "@/utils/global.config";

function App({ Component, pageProps }: AppProps) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    debug: false,
  });
  return (
    <>
      <NextIntlProvider
        messages={pageProps.messages}
        formats={{
          dateTime: {
            Base: {
              day: "numeric",
              month: "short",
              year: "numeric",
            },
          },
        }}
      >
        <ThemeProvider attribute="class">
          <Analytics />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextIntlProvider>
    </>
  );
}

export default App;
