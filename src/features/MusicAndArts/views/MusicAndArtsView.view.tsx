import React, { FC } from "react";
import { Container, StyledLink, Title } from "./MusicAndArtsView.style";
import { MainSection, SecondaryHeader } from "@/components";
import { PrimaryText } from "@/ui";

export const MusicAndArtsView: FC = () => {
  return (
    <Container>
      <SecondaryHeader title='MUSIK OCH KONST' />
      <MainSection>
        <Title>Musik</Title>
        <PrimaryText text='Vi försöker boka så många liveakter som möjligt, och om du är en musiker, var god kontakta oss. Tillsammans kan vi kanske skapa något fantastiskt. Vi välkomnar en mångfald av talanger och strävar efter att erbjuda en levande och spännande upplevelse för våra gäster.' />
        <StyledLink href={"/contact"}>Kontakt</StyledLink>
      </MainSection>
      <MainSection>
        <Title>Konst</Title>
        <PrimaryText text='Vi strävar alltid efter att visa upp konstverk från olika konstnärer i vår lokal. Om du är konstnär, varmt välkommen att kontakta oss för att diskutera möjligheten att ställa ut dina verk hos oss. Tillsammans kan vi skapa en inspirerande och konstnärlig miljö för våra besökare.' />
        <StyledLink href={"/contact"}>Kontakt</StyledLink>
      </MainSection>
    </Container>
  );
};
