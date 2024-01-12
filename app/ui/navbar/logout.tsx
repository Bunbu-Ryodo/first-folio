"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div
      onClick={() => {
        signOut();
      }}
      className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer"
    >
      Logout
    </div>
  );
}
