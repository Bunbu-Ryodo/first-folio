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
    <html lang="en">
      <body className={`${robotoMono.className} min-h-screen w-full`}>
        <main className="flex h-full flex-1 flex-col">
          <Header></Header>
          {children}
        </main>
      </body>
    </html>
  );
}
