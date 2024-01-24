"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed w-full px-2 z-50">
      <div
        id="portfolioHeader"
        className="flex w-full justify-between items-center text-portfolioBlack h-[54px] px-16 bg-glass text-white rounded-full my-2"
      >
        <Link href="/portfolio">
          <span className="hover:text-portfolioGrey active:text-portfolioBlackActive">
            Home
          </span>
        </Link>
        <div className="nav-container">
          <Link className="px-2" href="#testimonials">
            <span className="hover:text-portfolioGrey active:text-portfolioBlackActive">
              About
            </span>
          </Link>
          <Link className=" px-2" href="#work">
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
    </div>
  );
}
