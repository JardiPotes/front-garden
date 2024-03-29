import styled from 'styled-components';

const Colors = {
  bg: '#D9D9D9',
  line: '#86E7B8',
  inputArea: '#FCF9F9',
  textInput: '#777',
  cross: '#000000',
} as const;

export const BackgroundOverlay = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  border-radius: 50px;
  background-color: ${Colors.bg};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  max-width: 80px;

  & > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  font-size: 1.8em;
  text-align: center;
  font-weight: bold;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2em;
  padding-top: 1.5em;
  padding-bottom: 1em;
`;

export const HeaderUnderLine = styled.div`
  width: 35em;
  height: 0.5em;
  margin: 1px;
  background-color: ${Colors.line};
  border-radius: 50px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Cross = styled.button`
  background-color: ${Colors.bg};
  border: 5px transparent solid;
  border-radius: 50px;
  & > img {
    max-width: 30%;
    max-height: 30%;
    object-fit: contain;
  }
`;

export const ModalBodyWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2px;
  align-items: center;
  overflow: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export const ModalBodyInputBody = styled.input`
  text-align: center;
  color: ${Colors.textInput};
  margin-top: 1em;
  margin-bottom: 0.5em;
  width: 35em;
  height: 5em;
  background-color: ${Colors.inputArea};
  border-radius: 50em;
  align-items: center;
  border: none;

  &:focus {
    border-color: ${Colors.line};
    box-shadow: 0 0 15px 0 ${Colors.line};
    outline: 0;
  }

  @media (max-width: 480px) {
    width: 20em;
    height: 4em;
  }
`;

export const ModalBodyTextAreaBody = styled.textarea`
  text-align: center;
  color: ${Colors.textInput};
  margin-top: 1em;
  width: 35em;
  height: 5.5em;
  background-color: ${Colors.inputArea};
  border-radius: 50px;
  align-items: center;
  border: none;
  overflow: scroll;
  padding: 5px 10px;

  &:focus {
    border-color: ${Colors.line};
    box-shadow: 0 0 15px 0 ${Colors.line};
    outline: 0;
  }

  @media (max-width: 480px) {
    width: 20em;
  }
`;

export const UploadImage = styled.button`
  height: 10em;
  width: 10em;
  border-radius: 50%;

  & > img {
    max-width: 30%;
    max-height: 30%;
    object-fit: contain;
  }
`;

export const radioInput = styled.input`
  text-align: center;
  color: 'black';
`;

export const inputLabel = styled.label`
  font-size: 1em;
  text-align: left;
  color: 'black';
`;

export const labelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const radioWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 2em;
  align-items: center;
  flex-wrap: wrap;
`;

export const radioInputWrapper = styled.div`
  margin-left: 1em;
`;

export const Tip = styled.div`
  font-size: 0.8em;
  text-align: left;
  width: 100%;
`;
