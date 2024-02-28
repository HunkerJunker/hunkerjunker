import { MainLayout } from "@/layout";

export const metadata = {
  title: "Book a Venue at Hunker Junker - Host Your Company or Private Event",
  description:
    "Discover how to book a venue at Hunker Junker for your company or private event. Explore our versatile spaces, delicious street food options, live music, and create memorable experiences in Söderhamn, Hälsingland.",
  openGraph: {
    title: "Book a Venue at Hunker Junker - Host Your Company or Private Event",
    description:
      "Discover how to book a venue at Hunker Junker for your company or private event. Explore our versatile spaces, delicious street food options, live music, and create memorable experiences in Söderhamn, Hälsingland.",
    url: "https://hunkerjunker.se/book-venue",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
