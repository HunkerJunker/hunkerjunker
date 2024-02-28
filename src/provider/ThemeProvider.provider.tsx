"use client";
import { theme } from "@/styles";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

export const Theme: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
