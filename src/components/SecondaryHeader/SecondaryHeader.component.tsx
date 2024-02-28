"use client";
import React, { FC } from "react";
import { useScreenSize } from "@/hooks";
import { Container, Title } from "./SecondaryHeader.style";

export const SecondaryHeader: FC<{
  title: string;
  multipleTitles?: boolean;
}> = ({ title, multipleTitles = false }) => {
  const screenWidth = useScreenSize();
  const fillArray = screenWidth.width > 768 && multipleTitles ? 3 : 1;
  const arrayOfText = new Array(fillArray).fill(title);
  return (
    <Container>
      {arrayOfText?.map((text, i) => {
        return <Title key={i}>{title}</Title>;
      })}
    </Container>
  );
};
