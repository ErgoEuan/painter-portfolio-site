/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const heroStyle = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 300px;
  width: 100%;
  background-image: url("hero-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hero = () => {
  return (
    <main css={heroStyle}>
      <h1>Home Styles</h1>
      <h2>Quality and perstigious home solutions</h2>
    </main>
  );
};

export default Hero;