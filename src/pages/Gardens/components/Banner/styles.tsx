import styled from "styled-components";

export const Banner = styled.div`
  background-image: url("public/images/jardin3.jpg");
  background-size: cover;
  background-position: 100% 36%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;

  @media only screen and (max-width: 600px) {
    height: 50px;

    h1 {
      font-size: 1em;
    }
  }
`;
