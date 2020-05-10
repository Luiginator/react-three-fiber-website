import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import '../global-styles.scss';

function App({ Component, pageProps }) {
  const title = 'React-three-fiber | A React renderer for Three.js';
  const description =
    'react-three-fiber is a React reconciler for Threejs on the web and react-native.';
  const keywords =
    'ThreeJS, React, react-three-fiber, reconciler, react-native';
  const url = 'https://www.react-three-fiber.com';
  const image = '/react-three-fiber.png';

  return (
    <div>
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
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        font-family: "Josefin Sans", sans-serif;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
