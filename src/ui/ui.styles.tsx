import Link from "next/link";
import styled from "styled-components";

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
