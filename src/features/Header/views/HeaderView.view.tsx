import React, { FC } from "react";
import { Container } from "./HeaderView.style";
import { Burger } from "../components";
import { MainLogo } from "@/components";

export const HeaderView: FC<{ centerLogo?: boolean }> = ({}) => {
  return (
    <Container>
      <MainLogo />
      <Burger />
    </Container>
  );
};
