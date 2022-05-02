/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ratingsStyle = css`
  background-color: #242732;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto 0;

  h2 {
    color: #ffffff;
    text-align: center;
    font-size: 2.2em;
    font-weight: 600;
    line-height: 1;
    margin: 0 0 3px;
  }
  p {
    color: #758099;
    text-align: center;
    font-weight: 500;
    margin: 0;
  }
  
  div {
    margin: auto 0;
    width: 30%;
  }
`;

const Ratings = () => {
  return (
    <section css={ratingsStyle}>
        <div>
            <h2>27</h2>
            <p>Years Experience</p>
        </div>
        <div>
            <h2>1400+</h2>
            <p>Projects Complete</p>
        </div>
    </section>
  );
};

export default Ratings;