import { mediaWidth } from "@/styles";
import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: solid 0.05rem ${(props) => props.theme.colors.primary};
  flex-wrap: wrap;
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100vw;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.secondary};
  height: auto;
`;
export const InnerContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: ${mediaWidth.medium}) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.p``;
export const A = styled.a`
  color: white;
  cursor: pointer;
`;
export const Span = styled.span`
  color: yellow;
  cursor: pointer;
`;
export const BaseSection = styled.section`
  display: flex;
  height: 100%;
`;
export const Section = styled(BaseSection)``;
export const SectionCenterVertical = styled(BaseSection)`
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: ${mediaWidth.medium}) {
    align-items: center;
  }
`;
export const SectionCenterAll = styled(BaseSection)`
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const TextCopywrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
`;
export const TextCopywright = styled.p`
  font-size: 0.65rem;
  margin: 0;
  text-align: center;
  font-family: seriff;
`;
export const TextCopywrightA = styled.a`
  font-size: 0.65rem;
  margin: 0;
  text-align: center;
  font-family: seriff;
  text-decoration: none;
  color: white;
`;
