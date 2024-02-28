import { theme } from "@/styles";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
`;

export const SpinnerContainer = styled.div`
  background-color: transparent;
  position: absolute;
  animation: ${spinAnimation} 1s linear infinite; /* Apply the animation */
  top: 30%;
  left: 45%;
  transform: translate(-50%, -50%);
`;
