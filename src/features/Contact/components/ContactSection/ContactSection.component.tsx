import React, { FC } from "react";
import { Container } from "./ContactSection.style";

export const ContactSection: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
