import { mediaWidth } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  gap: 2rem;
  z-index: 2;
`;
export const TextColor = styled.p`
  font-size: 1rem;
  margin: 0;
  font-size: 1.8rem;
  width: 0.05rem;
  overflow-wrap: break-word;
  color: ${(props) => props.theme.colors.primary};
`;
export const Text = styled.p`
  font-family: var(--font-anton);
  font-size: 1rem;
  margin: 0;
  font-size: 1.8rem;
  width: 0.05rem;
  overflow-wrap: break-word;
  color: white;

  @media (max-width: ${mediaWidth.medium}) {
    font-size: calc(1rem + 0.8vw);
    margin: 0.1rem;
  }
`;
