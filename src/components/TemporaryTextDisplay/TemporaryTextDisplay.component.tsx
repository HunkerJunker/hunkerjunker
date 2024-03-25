import React, { FC } from "react";
import { Container, Text } from "./TemporaryTextDisplay.style";
type Props = {
  text: string;
};

export const TemporaryTextDisplay: FC<Props> = ({ text }) => {
  return (
    <Container>
      <Text>{text.toUpperCase()}</Text>
    </Container>
  );
};
