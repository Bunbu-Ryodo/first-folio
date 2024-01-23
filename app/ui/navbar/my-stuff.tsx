"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function StuffLink() {
  return (
    <Link href="/mystuff" className="w-1/2">
      <div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">
        <FaHome className="h-icon w-icon text-indianRed" />
      </div>
    </Link>
  );
}
