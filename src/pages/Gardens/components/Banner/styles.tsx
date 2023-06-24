import styled from 'styled-components';

import bannerGardenUrl from '@/assets/garden3.jpg';

export const Banner = styled.div`
  background-image: url(${bannerGardenUrl});
  background-size: cover;
  background-position: 100% 36%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #fcf9f9;
  text-shadow: 1px 1px 2px black;

  @media only screen and (max-width: 600px) {
    height: 50px;

    h1 {
      font-size: 1em;
    }
  }
`;
