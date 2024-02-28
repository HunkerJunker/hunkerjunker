import styled from "styled-components";
import Link from "next/link";
import { mediaWidth } from "@/styles";
import Image from "next/image";
export const LogoWrapper = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  flex-direction: row;
  transition: transform 1s ease;
  cursor: pointer;
  &:hover {
    transform: rotate(360deg);
    transform: translate(0.4);
  }
  @media (max-width: ${mediaWidth.medium}) {
    &:hover {
      transform: rotate(0deg);
    }
  }
`;
export const StyledLink = styled(Link)`
  color: none;
`;
export const StyledImage = styled(Image)`
  @media (max-width: ${mediaWidth.medium}) {
    width: 4rem;
    height: 4rem;
  }
  color: none;
`;
