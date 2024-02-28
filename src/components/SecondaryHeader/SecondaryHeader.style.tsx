import styled from "styled-components";

export const Container = styled.header`
  postition: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  overflow: hidden;
  width: 100%;
  gap: 2rem;
  height: 7rem;
  background-color: ${(props) => props.theme.colors.menuPrimary};
`;

export const Title = styled.h4`
  font-family: var(--font-anton);
  color: ${(props) => props.theme.colors.primary};
  font-size: calc(1.8rem + 1.5vw);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
