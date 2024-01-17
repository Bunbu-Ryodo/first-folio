"use client";

import { sourceSerif } from "@/app/ui/fonts";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";
import { StringValidation } from "zod";
import SocialsForm from "../socials/socials-form";

type Socials = {
  contact_email: string;
  x: string;
  instagram: string;
  facebook: string;
  linked_in: string;
  website: string;
};

export default function PortfolioHero({
  name,
  job_title,
  bio,
  socials,
  cv,
}: {
  name: string;
  job_title: string;
  bio: string;
  socials: Socials;
  cv: string;
}) {
  console.log(cv);
  return (
    <div className="px-16 py-16 border-b-[1px] border-portfolioBlack">
      <h1 className={`${sourceSerif.className} text-portfolioDisplay`}>
        {name}
      </h1>
      <h1 className={`text-portfolioDisplay`}>{job_title}</h1>
      <h1 className="text-copy">{bio}</h1>
      <div className="flex flex-row w-full justify-between">
        <div className="socials-container flex flex-row">
          <a href={socials.x} className="pr-2 py-2">
            <FaXTwitter className="h-iconHeight w-iconWidth" />
          </a>
          <a href={socials.instagram} className="px-2 py-2">
            <FaInstagram className="h-iconHeight w-iconWidth" />
          </a>
          <a href={socials.facebook} className="px-2 py-2">
            <FaFacebook className="h-iconHeight w-iconWidth" />
          </a>
          <a href={socials.linked_in} className="px-2 py-2">
            <FaLinkedin className="h-iconHeight w-iconWidth" />
          </a>
          <a href={socials.website} className="px-2 py-2">
            <TbWorldWww className="h-iconHeight w-iconWidth " />
          </a>
        </div>
        <div className="flex flex-row items-center">
          <LuDownload />
          <span className="pl-2 underline">Download my CV</span>
        </div>
      </div>
    </div>
  );
}
