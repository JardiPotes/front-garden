import styled from 'styled-components';

export const Bubble = styled.div<{$right: boolean}>`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  background: #fff;
  border-radius: 40px;
  min-width: 100px;
  padding: 24px;
  text-align: center;
  color: #000;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }

  ${(props): string =>
    props.$right
      ? ` 
  &:before {
    right: 50px;
    border-left: 12px solid transparent;
    border-right: 24px solid #fff;
  }`
      : `&:before {
    left: 50px;
    border-left: 24px solid #fff;
    border-right: 12px solid transparent;
  }`}

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-top: 12px solid #fff;
    border-bottom: 20px solid transparent;
    bottom: -24px;
  }
`;

export const Date = styled.div`
  text-align: end;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

export const Content = styled.div`
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
