import { ReactElement } from "react";
import Head from "next/head";

import Footer from "./Footer";
import TopBar from "./TopBar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <TopBar />
      <Head>
        <title>Auto test app</title>
        <meta name="description" content="Auto test app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
