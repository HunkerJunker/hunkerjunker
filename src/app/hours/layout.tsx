import { MainLayout } from "@/layout";

export const metadata = {
  title: "Hunker Junker - Open Hours and Operating Schedule",
  description:
    "Explore the open hours and operating schedule of Hunker Junker in Söderhamn, Hälsingland. Discover when you can visit us to enjoy delicious street food, live music, and a vibrant dining experience.",
  openGraph: {
    title: "Hunker Junker - Open Hours and Operating Schedule",
    description:
      "Explore the open hours and operating schedule of Hunker Junker in Söderhamn, Hälsingland. Discover when you can visit us to enjoy delicious street food, live music, and a vibrant dining experience.",
    url: "https://hunkerjunker.se/hours",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
