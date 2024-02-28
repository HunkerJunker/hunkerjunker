"use client";
import { ContextProvider, VenueContextProvider } from "@/context";
import { GlobalStyle, theme } from "@/styles";
import { PropsWithChildren } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";

export function ProviderWrapper({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      <ParallaxProvider scrollAxis='vertical'>
        <ThemeProvider theme={theme}>
          <VenueContextProvider>
            <ContextProvider>{children}</ContextProvider>
          </VenueContextProvider>
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}
