import { mediaWidth } from "@/styles";
import styled from "styled-components";

export const Container = styled.section<{ $url: string }>`
  width: 100%;
  height: 100vh;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 5rem;
  background-image: url("${(props) => props.$url}");
  background-size: cover;
  background-position: center;
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
      rgba(0, 0, 0, 1) 85%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  }
`;
export const ToogleVenueContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
export const Button = styled.button<{ $isGarage: boolean }>`
  border: solid 0.05rem black;
  font-family: var(--font-anton);
  box-shadow: ${(props) =>
    props.$isGarage ? "0.2rem 0.2rem 0.2rem black" : "0rem 0rem 0rem black"};
  cursor: pointer;
  transform: rotate(5deg);
  font-size: calc(2rem + 1vw);
  background-color: ${(props) =>
    props.$isGarage
      ? `${props.theme.colors.primary}`
      : `${props.theme.colors.secondary}`};
  color: ${(props) =>
    props.$isGarage
      ? `${props.theme.colors.secondary}`
      : `${props.theme.colors.primary}`};

  padding: 0rem;
  margin: 0.2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  border: solid 0.05rem black;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.secondary};
  }
  @media (max-width: ${mediaWidth.medium}) {
    font-size: calc(1.5rem + 0.8vw);
    margin: 0.5rem;
  }
`;
export const SecondaryTitle = styled.h2`
  font-family: var(--font-anton);
  font-size: calc(2rem + 1vw);
  color: white;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: ${mediaWidth.medium}) {
    font-size: calc(1.5rem + 0.8vw);
  }
`;
export const Text = styled.p`
  font-size: calc(1rem + 2vw);
  color: ;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
`;
