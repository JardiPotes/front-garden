import styled from "styled-components";

const Colors = {
  TitleCard: "#86E7B8",
} as const;

export const TitleCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.TitleCard};
  height: 15em;
  max-width: 60%;
  justify-content: center;
  position: relative;
  margin: 3em;
  border-radius: 50px;
`;

export const TitleCardText = styled.h1`
  font-size: 1.8em;
  font-family: "Amiko";
  align-text: center;
  align-items: center;
  margin: 1em;
`;
export const ChickenIcon = styled.div`
  padding-bottom: 5em;
  padding-left: 3em;
  display: flex;
  justify-content: flex-start;

  & > img {
    max-width: 10%;
    max-heigth: 10%;
    object-fit: contain;
  }
`;
export const FlowersIcon = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-top: 5em;
  padding-right: 2em;

  & > img {
    max-width: 10%;
    max-heigth: 10%;
    object-fit: contain;
  }
`;
