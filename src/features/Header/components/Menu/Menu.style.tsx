import styled from "styled-components";
import { mediaWidth, theme } from "@/styles";
import Link from "next/link";
export const Container = styled.div`
  position: realative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 20rem;
  height: 100vh;
  border-left: solid 0.05rem ${({ theme }) => theme.colors.brass};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-left: 1rem;
  box-sizing: border-box;
  z-index: 5;
  @media (max-width: ${mediaWidth.medium}) {
    width: 100%;
  }
`;
export const BurgerWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0;
`;
export const Li = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: flex-start;
`;

export const StyledLink = styled(Link)`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: var(--font-anton);
  text-decoration: underline white;
  &:hover {
    color: ${(props) => props.theme.colors.brass};
  }
`;
