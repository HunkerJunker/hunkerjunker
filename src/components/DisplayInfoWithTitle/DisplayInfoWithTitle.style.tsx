import { mediaWidth } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  @media (max-width: ${mediaWidth.medium}) {
    width: 90%;
  }
`;
export const Text = styled.p`
  font-size: calc(1rem + 0.2vw);
`;

export const EndText = styled.p`
  font-size: calc(1rem + 0.2vw);
  color: ${(props) => props.theme.colors.brass};
`;
