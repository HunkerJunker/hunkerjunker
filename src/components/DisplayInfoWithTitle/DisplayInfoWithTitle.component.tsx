import React, { FC } from "react";
import { Container, EndText, Text } from "./DisplayInfoWithTitle.style";
import { PrimaryTitle } from "@/ui";

interface Props {
  title: string;
  text: string;
}
export const DisplayInfoWithTitle: FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <PrimaryTitle title={title} />
      <Text>{text}</Text>
      <EndText>/ Team Hunker Junker</EndText>
    </Container>
  );
};
