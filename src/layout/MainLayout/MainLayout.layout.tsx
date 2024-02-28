"use client";
import { Footer } from "@/components";
import { VenueContext } from "@/context";
import { HeaderView } from "@/features";
import { Menu } from "@/features/Header/components";
import React, { FC, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const { isGarage } = useContext(VenueContext);
  return (
    <div>
      <HeaderView />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
