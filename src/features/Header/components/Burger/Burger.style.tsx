import styled, { keyframes, css } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(50deg);
  }
`;
const spinAnimation2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-50deg);
    margin-top: -1.2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: 2.5rem;
  height: 5rem;
  padding-right: 1rem;
  cursor: pointer;
`;
export const BaseBar = styled.div<{ $spin: boolean }>`
  width: 100%;
  height: 0.2rem;
  border-radius: 0rem;
`;
export const Bar1 = styled(BaseBar)`
  background-color: ${({ theme }) => theme.colors.brass};
  ${({ $spin }) =>
    $spin &&
    css`
      animation: ${css`
        ${spinAnimation} 0.2s forwards
      `};
    `};
`;
export const Bar2 = styled(BaseBar)`
  background-color: ${({ $spin }) =>
    $spin
      ? css`
    transparent
    `
      : css`
          ${({ theme }) => theme.colors.brass};
        `};
  ${({ $spin }) =>
    $spin &&
    css`
      animation: ${css`
        ${spinAnimation} 0.2s forwards
      `};
    `};
`;
export const Bar3 = styled(BaseBar)`
  background-color: ${({ theme }) => theme.colors.brass};
  ${({ $spin }) =>
    $spin &&
    css`
      animation: ${css`
        ${spinAnimation2} 0.2s forwards
      `};
    `};
`;
