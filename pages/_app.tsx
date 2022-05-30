import 'styles/global.css';
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { NextIntlProvider } from 'next-intl';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { seoConfig } from '@/lib/config';

import { Analytics } from '@/components/Analytics';

function App({ Component, pageProps }: AppProps) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    debug: false
  });
  return (
    <>
      <NextIntlProvider
        messages={pageProps.messages}
        formats={{
          dateTime: {
            short: {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }
          }
        }}
      >
        {' '}
        <ThemeProvider attribute="class">
          <Analytics />
          <DefaultSeo {...seoConfig} />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextIntlProvider>
    </>
  );
}

export default App;
