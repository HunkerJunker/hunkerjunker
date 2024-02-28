import React, { FC } from "react";
import { Container } from "./AboutView.style";
import { SecondaryHeader } from "@/components";
import { AboutTextContainer } from "../components/AboutTextContainer";

export const AboutView: FC = () => {
  return (
    <Container>
      <SecondaryHeader title='OM OSS' />
      <AboutTextContainer />
    </Container>
  );
};
