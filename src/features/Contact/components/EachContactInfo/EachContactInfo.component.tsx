import React, { FC } from "react";
import {
  Container,
  Title,
  ObsTitle,
  ObsTitleContainer,
} from "./EachContactInfo.style";

interface Props {
  children: React.ReactNode;
  title: string;
  obsTitle?: string;
}

export const EachContactInfo: FC<Props> = ({ children, obsTitle, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
      {obsTitle && (
        <ObsTitleContainer>
          <ObsTitle>{obsTitle}</ObsTitle>
        </ObsTitleContainer>
      )}
    </Container>
  );
};
