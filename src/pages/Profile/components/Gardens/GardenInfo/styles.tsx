import styled from "styled-components";

import { SpaceBetweenRow } from "../../../../../components/Wrappers/SpaceBetweenRow";

export const Title = styled.h1`
  font-size: large;
  margin: 0;
`;

export const Description = styled.p`
  font-size: large;
  margin: 1em;
  line-height: 1.5;
  text-align: justify;
  width: clamp(100px, 90%, 800px);
`;

export const Image = styled.img`
  max-width: min(1000px, 100vw);
`;

export const PaddedRow = styled(SpaceBetweenRow)`
  padding: 0.5em;
`;
