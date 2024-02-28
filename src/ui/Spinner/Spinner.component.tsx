import React from "react";
import { Container, SpinnerContainer } from "./Spinner.style";
import { MainLogo } from "@/components";
import { PrimaryTitle } from "..";

export const Spinner = () => {
  return (
    <Container data-testid='spinner_container'>
      <SpinnerContainer>
        <MainLogo />
      </SpinnerContainer>
    </Container>
  );
};
