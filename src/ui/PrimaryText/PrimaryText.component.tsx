import React, { FC } from "react";
import { Container, Text } from "./PrimaryText.style";

interface Props {
  text: string;
}

export const PrimaryText: FC<Props> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
