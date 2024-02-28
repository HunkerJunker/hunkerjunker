import { MainLayout } from "@/layout";

export const metadata = {
  title: "About Hunker Junker - Discover Our Story and Mission",
  description:
    "Learn more about Hunker Junker and our mission to provide a vibrant dining experience in Söderhamn, Hälsingland. Explore our story, our commitment to delicious street food, live music, and creating a welcoming atmosphere.",
  openGraph: {
    title: "About Hunker Junker - Discover Our Story and Mission",
    description:
      "Learn more about Hunker Junker and our mission to provide a vibrant dining experience in Söderhamn, Hälsingland. Explore our story, our commitment to delicious street food, live music, and creating a welcoming atmosphere.",
    url: "https://hunkerjunker.se/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
