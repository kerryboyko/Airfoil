export const Ring = () => (
  <div>
    <h1>Ring</h1>
    <h3>A utility to create outline rings with box shadows.</h3>
    <h2>Usage</h2>
    <h4>Styled Components &amp; Emotion/CSS</h4>
    <p>
      Import the JS function 'ring' from 'airfoil/ring'. It takes the following
      object as a parameter:{" "}
    </p>
    <code>
      {`{
      inset?: number | string; 
      color?: string;
      size?: number | string;
    }`}
    </code>
    <p>
      If any or all of these are undefined, they will be filled with the default
      values:{" "}
    </p>
    <code>
      {`{
        inset: "0",
        color: "rgba(59, 130, 246, 0.5)",
        size: "3px",
      }`}
    </code>
  </div>
);

export default Ring;
