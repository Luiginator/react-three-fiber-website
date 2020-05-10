import React from 'react';
import NextDocument, { NextScript, Html, Main, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

//@ts-ignore
export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            //@ts-ignore
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
