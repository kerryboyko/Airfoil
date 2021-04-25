import { css } from "@emotion/css";
import ring from "airfoil/src/emotion/ring";

const ringCSS = css`
  ${ring()}
`;

export const App = () => (
  <>
    <p className={ringCSS}>Hello Vite + Preact!</p>
    <p>
      <a
        class="link"
        href="https://preactjs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Preact
      </a>
    </p>
  </>
);

export default App;
