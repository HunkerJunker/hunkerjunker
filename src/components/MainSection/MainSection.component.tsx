import React, { FC, ReactNode } from "react";
import { Container, ObsTitle, ObsTitleContainer } from "./MainSection.style";

export const MainSection: FC<{
  children: ReactNode;
  obsText?: string;
}> = ({ children, obsText }) => {
  return (
    <Container>
      {obsText && (
        <ObsTitleContainer>
          <ObsTitle>{obsText}</ObsTitle>
        </ObsTitleContainer>
      )}
      {children}
    </Container>
  );
};
