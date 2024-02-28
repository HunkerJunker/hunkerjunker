import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-bottom: 10rem;
`;
