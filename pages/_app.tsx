import { createGlobalStyle } from "styled-components";
import "../global-styles.scss";

function App({ Component, pageProps }) {
  return (
    <div>
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
