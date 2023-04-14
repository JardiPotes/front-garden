import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.2em 0;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  })
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;

  @media (max-width: 480px) {
    margin-top: 0;
  }
`;
