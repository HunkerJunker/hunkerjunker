import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0, 05rem;
  border: solid 0.05rem white;
  padding: 2rem;
  box-sizing: border-box;
  width: 80%;
`;
export const ObsTitleContainer = styled.div`
  display: flex;
  justify-contennt: center;
  position: absolute;
  bottom: 0;
  right: -1rem;
  background-color: ${(props) => props.theme.colors.menuPrimary};
  transform: rotate(-5deg);
  margin: 0;
  padding: 0.3rem;
`;
export const ObsTitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
  font-family: var(--font-anton);
`;
