import React, { FC } from "react";
import { Container } from "./MusicAndArtsView.style";
import { MainSection, SecondaryHeader } from "@/components";
import { PrimaryText, PrimaryTitle } from "@/ui";

export const MusicAndArtsView: FC = () => {
  return (
    <Container>
      <SecondaryHeader title='MUSIK OCH KONST' />
      <MainSection>
        <PrimaryTitle title='MUSIK' />
        <PrimaryText text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet exercitationem harum fuga fugit quisquam molestiae, illum cupiditate inventore repudiandae voluptate quos quam, maxime, ratione dolorem temporibus blanditiis itaque debitis.' />
      </MainSection>
      <MainSection>
        <PrimaryTitle title='KONST' />
        <PrimaryText text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium amet exercitationem harum fuga fugit quisquam molestiae, illum cupiditate inventore repudiandae voluptate quos quam, maxime, ratione dolorem temporibus blanditiis itaque debitis.' />
      </MainSection>
    </Container>
  );
};
