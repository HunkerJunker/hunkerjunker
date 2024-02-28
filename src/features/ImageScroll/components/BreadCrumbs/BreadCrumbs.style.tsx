import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  background-color: transparent;
`;

export const Crumb = styled.div<{ $color: string }>`
  height: 0.5rem;
  width: 0.5rem;
  background: ${(props) => props.$color};
  border-radius: 50%;
`;
