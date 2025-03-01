import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head>
        {/* <meta charSet="UTF-8" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta httpEquiv="Content-Type" content="text/html" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="apple-touch-icon"
          href="/images/logo.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/png"
        />
      </Head>
      <body className="theme-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
