"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row w-full justify-between border-b-[1px] border-portfolioBlack items-center bg-portfolioWhite text-portfolioBlack h-[54px] px-16">
      <Link href="/portfolio">
        <span className="hover:text-portfolioGrey active:text-portfolioBlackActive">
          Home
        </span>
      </Link>
      <div className="nav-container">
        <Link className="px-2" href="#">
          <span className="hover:text-portfolioGrey active:text-portfolioBlackActive">
            About
          </span>
        </Link>
        <Link className=" px-2" href="#">
          <span className="hover:text-portfolioGrey active:text-portfolioBlackActive">
            Work
          </span>
        </Link>
        <Link
          className="hover:text-portfolioBlackHover active:text-portfolioBlackActive px-2"
          href="#"
        >
          <span className="hover:text-portfolioGrey active:text-portfolioBlackActive">
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
}
