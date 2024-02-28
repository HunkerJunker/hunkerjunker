import React, { FC } from "react";
import { Container, Text } from "./TextVertical.style";

export const TextVertical: FC<{ text: string }> = ({ text }) => {
  return (
    <Container>
      <Text>HUNKER</Text>
      <Text>{text}</Text>
    </Container>
  );
};
