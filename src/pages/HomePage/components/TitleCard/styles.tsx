import styled from "styled-components";

const Colors = {
  TitleCard: "#86E7B8",
  textColor: "white"
} as const;

export const TitleCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.TitleCard};
  max-width: 40%;
  height: fit-content;
  justify-content: center;
  position: relative;
  border-radius: 40px;
`;

export const TitleCardText = styled.h1`
  font-size: 2.3em;
  text-align: center;
  align-items: center;
  margin: 1em;
  color: ${Colors.textColor};

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const ChickenIcon = styled.div`
  padding-bottom: 3em;
  padding-left: 3em;
  display: flex;
  justify-content: flex-start;

  & > img {
    max-width: 3em;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
export const FlowersIcon = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-top: 3em;
  padding-right: 3em;

  & > img {
    max-width: 2.8em;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    padding-top: 1em;
  }
`;
