import React, { FC } from "react";
import { PrimaryText, StyledLink } from "@/ui";
import { Container, Title } from "./BookVenueView.style";
import { MainSection, SecondaryHeader } from "@/components";

export const BookVenueView: FC = () => {
  return (
    <Container>
      <SecondaryHeader title='ABONNERA' />
      <MainSection>
        <Title>FÖR FÖRETAG ELLER PRIVAT FEST</Title>
        <PrimaryText
          text='Boka vår lokal måndag till torsdag för privata eller företagsevent. Skapa minnesvärda stunder med kollegor eller nära och kära i en unik atmosfär. Vår flexibla plats är perfekt för att skapa en minnesvärd upplevelse oavsett tillfälle..
'
        />

        <Title>VI HJÄLPER MED LIVE MUSIK</Title>
        <PrimaryText
          text='Vi hjälper med bokning av livemusik för att skapa en oförglömlig afton
'
        />
        <StyledLink href={"/contact"}>Kontakt</StyledLink>
      </MainSection>
    </Container>
  );
};
