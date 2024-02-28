import React, { FC } from "react";
import { Container, Crumb } from "./BreadCrumbs.style";
import { PrimaryText } from "@/ui";

interface Props {
  index: number;
  length: number;
}
export const BreadCrumbs: FC<Props> = ({ index, length }) => {
  const arrayOfCrumbsLength = new Array(length).fill("empty");
  return (
    <Container>
      {arrayOfCrumbsLength?.map((_, i) => {
        const color = i === index ? "white" : "grey";
        return <Crumb $color={color} key={i} />;
      })}
    </Container>
  );
};
