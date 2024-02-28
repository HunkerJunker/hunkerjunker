import styled, { keyframes } from "styled-components";
import { mediaWidth } from "@/styles";
import Image from "next/image";

export const Container = styled.section<{ $url: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-image: url("${(props) => props.$url}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 90%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;
export const BaseArrow = styled(Image)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 6rem;
`;

export const Next = styled.p`
  font-family: var(--font-anton);
  color: ${(props) => props.theme.colors.brass};
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3.5rem;
  cursor: pointer;
  text-decoration: underline solid white;
  @media (max-width: ${mediaWidth.medium}) {
    right: 1rem;
  }
`;
export const Prev = styled.p`
  font-family: var(--font-anton);
  color: ${(props) => props.theme.colors.brass};
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 3.5rem;
  cursor: pointer;
  text-decoration: underline solid white;
  @media (max-width: ${mediaWidth.medium}) {
    left: 1rem;
  }
`;

const slideIn = keyframes`
  0% {
    opacity:0;
  }
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;

export const Shutter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: black;
  animation: ${slideIn} 1s forwards;

  @media (max-width: ${mediaWidth.medium}) {
  }
`;
