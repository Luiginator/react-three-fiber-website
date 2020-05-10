import React from "react";
import NextDocument, { NextScript, Html, Main, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";

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
    const title = "React-three-fiber | A React renderer for Three.js";
    const description =
      "react-three-fiber is a React reconciler for Threejs on the web and react-native.";
    const keywords =
      "ThreeJS, React, react-three-fiber, reconciler, react-native";
    const url = "https://www.react-three-fiber.com";
    const image = "/react-three-fiber.jpg";

    return (
      <Html lang="en">
        <Head>
          <title>{title}</title>
          <meta name="og:type" content="website" />
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="og:url" content={url} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:domain" content="react-three-fiber" />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:creator" content="@0xca0a" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
