import { mediaWidth } from "@/styles";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding-bottom: 10rem;
`;

export const Button = styled.button`
  font-family: var(--font-anton);

  cursor: pointer;
  transform: rotate(0deg);
  font-size: calc(2rem + 1vw);

  padding: 0rem;
  margin: 0.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  border-radius: 0rem;
  border: solid 0.1rem black;
  opacity: 0.9;

  @media (max-width: ${mediaWidth.medium}) {
    font-size: calc(1.5rem + 0.8vw);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
