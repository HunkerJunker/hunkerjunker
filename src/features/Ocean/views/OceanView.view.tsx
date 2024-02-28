import React, { FC } from "react";
import { Container } from "./OceanView.style";
import { BackgroundgImageSection, Hero } from "@/components";
import { PrimaryText, PrimaryTitle } from "@/ui";
import { ImageScrollView } from "@/features";

export const OceanView: FC = () => {
  return (
    <Container data-testid='ocean-view'>
      <Hero />
      <BackgroundgImageSection parralax={true} image_path='/images/view.png'>
        <PrimaryTitle title='Were we all meet' />
        <PrimaryText text='Welcome to our vibrant restaurant, where the atmosphere is as inviting as the cuisine is delectable. Step into a haven where friends gather, savory aromas fill the air, and every bite tells a story of culinary craftsmanship. Our establishment is more than just a place to dine; its a community hub where people come together to share laughter, indulge in delicious meals, and savor the joy of good company. Immerse yourself in the soothing melodies of carefully selected music, creating a backdrop for conversations and connections. Leave your worries at the door as you unwind, relishing an experience that transcends the ordinary and transforms every meal into a memorable occasion.' />
      </BackgroundgImageSection>
      <ImageScrollView />
    </Container>
  );
};
