import type { Metadata } from "next";
import { publicSans } from "@/app/ui/fonts";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} min-h-screen w-full`}>
        <main className="flex h-full flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
