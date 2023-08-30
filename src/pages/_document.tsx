import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/img/favicon.ico" />
        <title>A Next.js - Firebase Project</title>
        <meta
          name="description"
          content="A portfolio app by Prasanth M, Upwork freelancer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
