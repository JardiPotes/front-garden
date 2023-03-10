import styled from "styled-components";

const Colors = {
  TitleCard: "#86E7B8",
  textColor: "white",
} as const;

export const TitleCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.TitleCard};
  height: 20em;
  max-width: 40%;
  justify-content: center;
  position: relative;
  margin: 3em;
  border-radius: 50px;
`;

export const TitleCardText = styled.h1`
  font-size: 2.3em;
  text-align: center;
  align-items: center;
  margin: 1em;
  color: ${Colors.textColor};
`;

export const ChickenIcon = styled.div`
  padding-bottom: 6.5em;
  padding-left: 3em;
  display: flex;
  justify-content: flex-start;

  & > img {
    max-width: 10%;
    max-height: 10%;
    object-fit: contain;
  }
`;
export const FlowersIcon = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-top: 7.5em;
  padding-right: 2em;

  & > img {
    max-width: 8%;
    max-height: 8%;
    object-fit: contain;
  }
`;
