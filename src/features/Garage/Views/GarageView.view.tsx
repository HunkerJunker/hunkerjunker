"use client";
import React, { FC } from "react";
import { Container } from "./GarageView.style";
import {
  BackgroundgImageSection,
  DisplayInfoWithTitle,
  Hero,
} from "@/components";
import { PrimaryText, PrimaryTitle } from "@/ui";
import { ImageScrollView } from "@/features";

export const GarageView: FC = () => {
  return (
    <Container data-testid='garage-view'>
      <Hero />
      <BackgroundgImageSection parralax={true} image_path='/images/view.png'>
        <DisplayInfoWithTitle
          title='Där vi alla möts'
          text='Välkommen till vår livliga restaurang, där atmosfären är lika inbjudande som maten är läcker. Kliv in i en fristad där vänner samlas, läckra dofter fyller luften och varje tugga berättar en historia om kulinariskt hantverk. Vår etablering är mer än bara en plats att äta på; det är en samlingspunkt där människor möts för att dela skratt, njuta av läckra måltider och uppskatta glädjen av gott sällskap. Fördjupa dig i de lugnande melodierna från noggrant utvald musik, som skapar en bakgrund för samtal och relationer. Lämna dina bekymmer vid dörren när du kopplar av och njuter av en upplevelse som överträffar det vanliga och förvandlar varje måltid till en minnesvärd tillställning.'
        />
      </BackgroundgImageSection>
      <ImageScrollView />
    </Container>
  );
};
