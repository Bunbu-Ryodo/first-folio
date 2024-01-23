"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logout from "@/app/ui/navbar/logout";
import StuffLink from "@/app/ui/navbar/my-stuff";
import { MdLogin } from "react-icons/md";

export default function Navbar({ session }: { session: boolean }) {
  return (
    <div className="flex flex-row w-full justify-between items-center bg-gunMetal text-navbar font-light text-indianRed h-[54px] px-16">
      <Link href="/">First-Folio.io</Link>
      <div className="nav-container">
        {!!session ? (
          <div className="flex justify-between w-[80px]">
            <StuffLink></StuffLink>
            <Logout></Logout>
          </div>
        ) : (
          <div className="flex">
            <Link href="/login">
              <div className="hover:bg-gunMetalHover active:bg-gunMetalActive p-2 cursor-pointer">
                <MdLogin className="h-icon w-icon text-indianRed" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
