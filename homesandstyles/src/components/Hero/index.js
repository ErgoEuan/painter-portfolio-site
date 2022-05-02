/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const heroStyle = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 400px;
  width: 100%;
  background-image: url("hero-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .contact {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 8px;
    right: 5px;
    width: 150px;
    img {
      width: 26px;
      height: 26px;
    }
    div {
      display: flex;
      flex-direction: column;

      p{
        margin: 0 0 0 5px;
        color: #242732;
      }
      .small {
        font-size: 12px;
        line-height: 1;
      }
      .bold {
        font-size: 14px;
        line-height: 1;
        font-weight: 700;
      }

    }
  }

  .text {
    margin: 60px 20px 0px;
    max-width: 200px;
  }
  h1 {
    font-size: 3em;
    font-weight: 600;
    line-height: 1;
    color: #242732;
    margin: 5px;
  }
  h2 {
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1;
    color: #242732;
    padding-top: 3px;
    margin: 5px;
  }
`;

const Hero = () => {
  return (
    <main css={heroStyle}>
      <div className="contact">
        <img
          src="phone.svg"
          alt="contact us"
        />
        <div>
          <p className="small">Call us</p>
          <p className="bold">+44 7908 345161</p>
        </div>
      </div>
      <div className="text">
        <h1>Home Styles</h1>
        <h2>Quality home solutions</h2>
      </div>
      
    </main>
  );
};

export default Hero;