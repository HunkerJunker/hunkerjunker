"use client";
import { Footer } from "@/components";
import { HeaderView } from "@/features";
import { Menu } from "@/features/Header/components";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <HeaderView />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
