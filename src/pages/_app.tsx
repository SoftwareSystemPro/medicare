import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from 'react';

const graphAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

const client = new ApolloClient({
  uri: graphAPI,
  cache: new InMemoryCache(),
});


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
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
    </NextIntlClientProvider>
    </>

  )
}

export default MyApp



