import React, { FC } from "react";
import { Container, Title } from "./PrimaryTitle.style";

interface Props {
  title: string;
}
export const PrimaryTitle: FC<Props> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
