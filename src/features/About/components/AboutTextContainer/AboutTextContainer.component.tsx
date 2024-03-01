import React, { FC } from "react";
import {
  Container,
  Title,
  TextContainer,
  SecondaryTitle,
} from "./AboutTextContainer.style";
import { PrimaryText } from "@/ui";

export const AboutTextContainer: FC = () => {
  return (
    <Container>
      <Title>EMILE&apos;S DRÖM</Title>
      <TextContainer>
        <SecondaryTitle>VARFÖR?</SecondaryTitle>
        <PrimaryText text='Emiles passion för mat föddes under hans resor runt om i världen. Inspirerad av sina upplevelser, beslutade han sig för att förverkliga sin dröm och skapa Hunker Junker - en plats där människor kan samlas och njuta av god mat i en atmosfär av gemenskap. För Emile handlar Hunker Junker inte bara om att servera mat; det handlar om att skapa en plats där människor kan dela glädjen av att vara tillsammans och skapa minnen. Idag är Hunker Junker en destination för människor som söker en unik och minnesvärd matupplevelse, och Emile är stolt över att ha förverkligat sin dröm.' />
      </TextContainer>
      <TextContainer>
        <SecondaryTitle>HUR?</SecondaryTitle>
        <PrimaryText text='Emile och hans vänner är inte bara passionerade matentusiaster, de är även skaparna bakom varje detalj på Hunker Junker. Från restaurangens design till menyutformningen har de byggt allt från grunden med sina egna händer och idéer. Deras engagemang och kreativitet genomsyrar varje hörn av restaurangen och skapar en unik atmosfär. Att vara sina egna skapare ger dem en djup känsla av stolthet och tillfredsställelse när de ser deras dröm förverkligas varje dag. För Emile och hans partner är Hunker Junker inte bara en restaurang, det är en manifestation av deras passion och arbete.' />
      </TextContainer>
      <TextContainer>
        <SecondaryTitle>PEROSNALEN OCH GÄSTERNA?</SecondaryTitle>
        <PrimaryText text='Vi är det vi är tack vare våra älskade gäster och personal. Deras närvaro och engagemang formar Hunker Junker till det vi älskar mest. En plats där vi alla kan mötas och umgås tillsamans.' />
      </TextContainer>
    </Container>
  );
};
