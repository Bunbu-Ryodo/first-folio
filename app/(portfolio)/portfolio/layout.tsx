import type { Metadata } from "next";
import { robotoMono } from "@/app/ui/fonts";
import "./portfolio.css";
import { getServerSession } from "next-auth";
import Header from "@/app/ui/portfolio/header";

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "Dev Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const activeSession = !!session;
  return (
    <html lang="en" className="w-full h-full">
      <body className={`${robotoMono.className} h-full w-full`}>
        <Header></Header>
        <main className="h-full container mx-auto">{children}</main>
      </body>
    </html>
  );
}
