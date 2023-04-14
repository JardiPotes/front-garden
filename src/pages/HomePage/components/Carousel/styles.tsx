import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const ImageBox = styled.div`
  position: relative;
  background-color: #faf0e6;

  img {
    position: relative;
    max-height: 70vh;
    max-width: 100vw;
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }
`;

export const NavButton = styled.button<{ position: "left" | "right" }>`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 3px;
  border: none;
  background: rgba(255, 255, 255, 0.7);

  ${({ position }): false | FlattenSimpleInterpolation =>
    position === "left" &&
    css`
      left: 10px;
    `}

  ${({ position }): false | FlattenSimpleInterpolation =>
    position === "right" &&
    css`
      right: 10px;
    `}
`;
