import { mediaWidth } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  border: solid 0.05rem black;
  padding: 4rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem black;
  @media (max-width: ${mediaWidth.medium}) {
    width: 90%;
    box-sizing: border-box;
    padding: 2rem;
  }
`;
export const Text = styled.p`
  font-size: calc(1rem + 0.2vw);
  text-align: center;
`;

export const EndText = styled.p`
  font-size: calc(1rem + 0.2vw);
  color: ${(props) => props.theme.colors.brass};
`;
