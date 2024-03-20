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
    icon: "/svg/main_logo_round_transparent.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
          }}
        />

        <meta
          name='google-site-verification'
          content='xgScFpYQyuSOa-xpWX3cE_VE8j4aUW1nLX0ewVo16hw'
        />
      </head>
      <StyledComponentsRegistry>
        <body className={` ${anton.variable} ${barlow.variable}`}>
          <ProviderWrapper>{children}</ProviderWrapper>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
