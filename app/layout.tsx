import type { Metadata } from 'next'
import { jetbrains } from '@/app/ui/fonts';
import './globals.css'
import Navbar from '@/app/ui/navbar';

export const metadata: Metadata = {
  title: 'First Folio: Portfolio Builder',
  description: 'Build a job winning portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${jetbrains.className}`}>
        <main className="flex-col container mx-auto">
        <Navbar></Navbar>
          {children}
        </main>
        </body>
    </html>
  )
}