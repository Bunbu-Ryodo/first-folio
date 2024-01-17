"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row w-full justify-between items-center bg-portfolioWhite text-portfolioBlack h-[54px] px-16">
      <Link href="/portfolio">Home</Link>
      <div className="nav-container">
        <Link
          className="hover:portfolioBlackHover active:portfolioBlackActive px-2"
          href="#"
        >
          About
        </Link>
        <Link
          className="hover:portfolioBlackHover active:portfolioBlackActive px-2"
          href="#"
        >
          Work
        </Link>
        <Link
          className="hover:portfolioBlackHover active:portfolioBlackActive px-2"
          href="#"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
