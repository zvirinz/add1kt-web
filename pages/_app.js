import { DefaultSeo } from 'next-seo';
import { NextIntlProvider } from 'next-intl';
import { usePanelbear } from '@panelbear/panelbear-nextjs';

import '@/styles/index.css';

import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    debug: false
  });
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
