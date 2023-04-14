import styled from "styled-components";

export const Input = styled.input`
  height: 50px;
  font-size: 1em;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 0px 25px;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
  text-overflow: ellipsis;

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;
