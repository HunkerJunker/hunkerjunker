import { ProviderWrapper } from "@/provider";
import type { Metadata } from "next";
import { Anton, Barlow_Condensed } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Hunker Junker - Söderhamn's Culinary Haven and Music Venue",
  description:
    "Experience the vibrant fusion of food, love, and music at Hunker Junker. Located in Söderhamn, Hälsingland, our restaurant offers a delightful mix of street food delicacies, live music performances, and a lively summer dining experience.",
  icons: {
    icon: "/svg/main_logo_round_transparent.svg", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <body className={` ${anton.variable} ${barlow.variable}`}>
          <ProviderWrapper>{children}</ProviderWrapper>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
