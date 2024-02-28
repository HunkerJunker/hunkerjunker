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
        <PrimaryText text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, quasi quos alias aut laboriosam minus nesciunt minima dolorum unde beatae adipisci dolores nostrum praesentium enim dolore ut. Vel, suscipit a.' />
      </TextContainer>
      <TextContainer>
        <SecondaryTitle>HUR?</SecondaryTitle>
        <PrimaryText text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, quasi quos alias aut laboriosam minus nesciunt minima dolorum unde beatae adipisci dolores nostrum praesentium enim dolore ut. Vel, suscipit a.' />
      </TextContainer>
      <TextContainer>
        <SecondaryTitle>PEROSNALEN OCH GÄSTERNA?</SecondaryTitle>
        <PrimaryText text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, quasi quos alias aut laboriosam minus nesciunt minima dolorum unde beatae adipisci dolores nostrum praesentium enim dolore ut. Vel, suscipit a.' />
      </TextContainer>
    </Container>
  );
};
