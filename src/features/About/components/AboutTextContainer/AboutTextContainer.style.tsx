import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 80%;
`;
export const TextContainer = styled.section`
  border: solid 0.05rem ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: teal;
  padding: 2rem;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: calc(1.5rem + 2vw);
`;
export const SecondaryTitle = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: calc(1rem + 2vw);
  margin: 0;
`;
