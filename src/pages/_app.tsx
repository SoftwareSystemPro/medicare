import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  return (
    <NextIntlClientProvider messages={pageProps.messages} locale={locale}>
  <Component {...pageProps} />
    </NextIntlClientProvider>
  )
}

export default MyApp



