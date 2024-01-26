"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({ contact }: { contact: string }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition =
      window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getGlassBlur() {
    if (scrollPosition > 500) {
      return "glass-blur";
    }
    if (scrollPosition < 500) {
      return "melt-glass";
    }
  }

  return (
    <div className="fixed w-full px-2 z-40">
      <div
        className={`${getGlassBlur()} flex w-full justify-between items-center text-portfolioBlack h-[54px] px-16 text-portfolioNeutral rounded-full my-2`}
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
          <a
            href={`mailto:${contact}`}
            className="underline mx-2 cursor-pointer "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
