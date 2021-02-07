import React from 'react';
import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <body>
          <Head>
            <title>Head</title>
          </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
