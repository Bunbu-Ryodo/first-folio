import type { Metadata } from "next";
import { jetbrains } from "@/app/ui/fonts";
import "./globals.css";
import "./animation.css";
import Navbar from "@/app/ui/navbar/navbar";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "First Folio: Portfolio Builder",
  description: "Build a job winning portfolio",
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
      <body className={`${jetbrains.className} h-full w-full`}>
        <Navbar session={activeSession}></Navbar>
        <main className="h-full container mx-auto">{children}</main>
      </body>
    </html>
  );
}
