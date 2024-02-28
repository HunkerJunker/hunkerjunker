import React, { FC } from "react";
import { PrimaryText } from "@/ui";
import { Container, Title } from "./BookVenueView.style";
import { MainSection, SecondaryHeader } from "@/components";

export const BookVenueView: FC = () => {
  return (
    <Container>
      <SecondaryHeader title='ABONNERA' />
      <MainSection>
        <Title>FÖR FÖRETAG ELLER PRIVAT FEST</Title>
        <PrimaryText
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum sed, nesciunt quibusdam assumenda dolore, voluptate vel harum officiis ea commodi amet, error eveniet labore debitis laudantium similique nostrum ipsa.
'
        />
        <Title>DET GÅR ATT ABONERA SOMMARTID OCH VARDAGAR </Title>
        <PrimaryText
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum sed, nesciunt quibusdam assumenda dolore, voluptate vel harum officiis ea commodi amet, error eveniet labore debitis laudantium similique nostrum ipsa.
'
        />
        <Title>VI HJÄLPER MED LIVE MUSIK</Title>
        <PrimaryText
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum sed, nesciunt quibusdam assumenda dolore, voluptate vel harum officiis ea commodi amet, error eveniet labore debitis laudantium similique nostrum ipsa.
'
        />
        <Title>KONTAKT</Title>
        <PrimaryText text='MAIL: TEST@SNABELA.COM' />
      </MainSection>
    </Container>
  );
};
