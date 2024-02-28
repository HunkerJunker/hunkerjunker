import { MainLayout } from "@/layout";

export const metadata = {
  title:
    "Contact Hunker Junker - Reach Out to Us for Inquiries and Reservations",
  description:
    "Have questions or want to make reservations? Contact Hunker Junker, your go-to destination for delicious street food, live music, and a vibrant dining experience in Söderhamn, Hälsingland.",
  openGraph: {
    title:
      "Contact Hunker Junker - Reach Out to Us for Inquiries and Reservations",
    description:
      "Have questions or want to make reservations? Contact Hunker Junker, your go-to destination for delicious street food, live music, and a vibrant dining experience in Söderhamn, Hälsingland.",
    url: "https://hunkerjunker.se/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
