import React, { FC, ReactNode } from "react";
import { Container } from "./MenuSection.style";
import { SecondaryHeader } from "@/components";

export const MenuSection: FC<{
  children: ReactNode;
  headerText: string;
  multipleTitles?: boolean;
}> = ({ headerText, children, multipleTitles = false }) => {
  return (
    <Container>
      <SecondaryHeader multipleTitles={multipleTitles} title={headerText} />
      {children}
    </Container>
  );
};
