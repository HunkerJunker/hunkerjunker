import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-bottom: 10rem;
`;

export const Text = styled.p`
  color: white;
  font-family: var(--font-barlow);
  font-size: calc(1.5rem + 0.5vw);
  margin: 0;
`;
export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-family: var(--font-barlow);
  font-size: calc(1.5rem + 0.5vw);
`;
export const A = styled.a`
  color: white;
  text-decoration: none;
  font-family: var(--font-barlow);
  font-size: calc(1.5rem + 0.5vw);
  word-wrap: break-word;
`;
