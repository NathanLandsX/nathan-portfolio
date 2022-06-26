import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <body className="container max-w-[1080px] mx-auto p-4 bg-[#0C0F1E] text-[#F3F0E1]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
