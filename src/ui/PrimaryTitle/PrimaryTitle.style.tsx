import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h2`
  font-family: var(--font-anton);
  color: ${(props) => props.theme.colors.brass};
  font-size: calc(1.5rem + 2.5vw);
  margin: 0;
`;
