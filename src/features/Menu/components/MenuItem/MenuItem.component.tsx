import React, { FC } from "react";
import {
  Container,
  ObsTitle,
  ObsTitleContainer,
  Title,
} from "./MenuItem.style";
import { PrimaryText } from "@/ui";

interface Props {
  title: string;
  text: string;
  obsTitle?: string;
}

export const MenuItem: FC<Props> = ({ title, text, obsTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PrimaryText text={text} />
      {obsTitle && (
        <ObsTitleContainer>
          <ObsTitle>{obsTitle}</ObsTitle>
        </ObsTitleContainer>
      )}
    </Container>
  );
};
