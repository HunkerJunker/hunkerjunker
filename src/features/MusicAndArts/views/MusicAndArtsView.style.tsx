import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-bottom: 10rem;
  gap: 2rem;
`;

export const ExtraInfoText = styled.p`
  color: ${(props) => props.theme.colors.menuPrimary};
  font-family: var(--font-barlow);
  font-size: calc(2rem + 0.5vw);
  margin: 0;
  margin-bottom: 1rem;
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
