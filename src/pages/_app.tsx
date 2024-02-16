import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
    <Head>
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <NextIntlClientProvider messages={pageProps.messages} locale={locale}>
  <Component {...pageProps} />
    </NextIntlClientProvider>
    </>

  )
}

export default MyApp



