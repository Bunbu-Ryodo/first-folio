"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

export default function Logout() {
  return (
    <div
      onClick={() => {
        signOut();
      }}
      className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointe flex justify-center items-center rounded cursor-pointe w-1/2"
    >
      <MdLogout className="h-icon w-icon text-indianRed" />
    </div>
  );
}
