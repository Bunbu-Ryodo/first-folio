"use client";

import Link from "next/link";

export default function StuffLink() {
  return (
    <Link href="/mystuff">
      <div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">
        My Stuff
      </div>
    </Link>
  );
}
