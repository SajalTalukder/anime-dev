import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";
NProgress.configure({ showSpinner: false });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <title>Animex | Anime movie and series information</title>
        <meta
          name="description"
          content="Animex movie series website React and Next js"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
