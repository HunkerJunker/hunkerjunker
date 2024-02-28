import { MainLayout } from "@/layout";

export const metadata = {
  title: "Hunker Junker - Explore Our Delicious Food Menu",
  description:
    "Discover the delicious food menu of Hunker Junker in Söderhamn, Hälsingland. Explore our wide range of street food options, including mouth-watering dishes prepared with fresh ingredients and served in a vibrant atmosphere.",
  openGraph: {
    title: "Hunker Junker - Explore Our Delicious Food Menu",
    description:
      "Discover the delicious food menu of Hunker Junker in Söderhamn, Hälsingland. Explore our wide range of street food options, including mouth-watering dishes prepared with fresh ingredients and served in a vibrant atmosphere.",
    url: "https://hunkerjunker.se/menu",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
