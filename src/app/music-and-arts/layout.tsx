import { MainLayout } from "@/layout";

export const metadata = {
  title: "Contact Hunker Junker - Enjoy Live Music and Showcase Your Art",
  description:
    "Have questions or want to make reservations? Contact Hunker Junker, your go-to destination for delicious street food, live music, and a vibrant dining experience in Söderhamn, Hälsingland. Immerse yourself in our creative atmosphere and showcase your art while enjoying great music!",
  openGraph: {
    title: "Contact Hunker Junker - Enjoy Live Music and Showcase Your Art",
    description:
      "Have questions or want to make reservations? Contact Hunker Junker, your go-to destination for delicious street food, live music, and a vibrant dining experience in Söderhamn, Hälsingland. Immerse yourself in our creative atmosphere and showcase your art while enjoying great music!",
    url: "https://hunkerjunker.se/music-and-arts",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
