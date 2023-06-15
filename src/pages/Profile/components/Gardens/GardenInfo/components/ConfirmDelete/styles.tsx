import styled from "styled-components";

export const AlertBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const AlertContent = styled.div`
  background-color: #d9d9d9;
  max-width: 400px;
  margin: 20% auto;
  padding: 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
