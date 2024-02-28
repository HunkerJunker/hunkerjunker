import React, { FC } from "react";
import {
  A,
  Container,
  SectionCenterVertical,
  SectionCenterAll,
  Title,
  InnerContainer,
  TextCopywright,
  Span,
  TextCopywrightA,
  TextCopywrightContainer,
} from "./Footer.style";
import { MainLogo, SocialMediaLinks } from "..";

export const Footer: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <SectionCenterVertical>
          <Title>HUNKER JUNKER</Title>
          <A href='/contact'>KONTAKT</A>
          <A href='/menu'>MENY</A>
          <A href='/hours'>ÖPPETTIDER</A>
        </SectionCenterVertical>
        <SectionCenterAll>
          <Title>FÖLJ OSS</Title>
          <SocialMediaLinks />
        </SectionCenterAll>
        <SectionCenterVertical>
          <MainLogo />
        </SectionCenterVertical>
      </InnerContainer>
      <TextCopywrightContainer>
        <TextCopywrightA href='https://nilsfalt.dev' target='_blank'>
          Website created by: <Span>Nilsfaelt.dev</Span> <br />
        </TextCopywrightA>
        <TextCopywright>
          <Span>Owner:</Span> Emile Bylund <br /> Peace <Span>And</Span> Love
        </TextCopywright>
      </TextCopywrightContainer>
    </Container>
  );
};
