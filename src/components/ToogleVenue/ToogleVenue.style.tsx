import styled from "styled-components";
import { mediaWidth } from "@/styles";

export const Container = styled.div<{ $direction: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};

  z-index: 2;
  margin-bottom: 1rem;
  @media (max-width: ${mediaWidth.medium}) {
    flex-direction: column;
  }
`;

export const Button = styled.button<{ $isGarage: boolean }>`
  font-family: var(--font-anton);
  box-shadow: ${(props) =>
    props.$isGarage ? "0.2rem 0.2rem 0.2rem black" : "0rem 0rem 0rem black"};
  cursor: pointer;
  transform: rotate(0deg);
  font-size: calc(2rem + 1vw);
  background-color: ${(props) =>
    props.$isGarage
      ? `${props.theme.colors.brass}`
      : `${props.theme.colors.secondary}`};
  color: ${(props) =>
    props.$isGarage
      ? `${props.theme.colors.secondary}`
      : `${props.theme.colors.brass}`};

  padding: 0rem;
  margin: 0.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  border-radius: 0rem;
  border: solid 0.1rem black;
  opacity: 0.9;
  &:hover {
    color: white;
  }
  @media (max-width: ${mediaWidth.medium}) {
    font-size: calc(1.5rem + 0.8vw);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
