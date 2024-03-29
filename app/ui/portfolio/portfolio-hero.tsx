"use client";

import React, { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { MdHttp } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

type Socials = {
  contact_email: string;
  x: string;
  instagram: string;
  facebook: string;
  linked_in: string;
  github: string;
  website: string;
};

export default function PortfolioHero({
  name,
  job_title,
  bio,
  socials,
  cvUrl,
}: {
  name: string;
  job_title: string;
  bio: string;
  socials: Socials;
  cvUrl: string;
}) {
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

  function getFadeClass() {
    if (scrollPosition > 900) {
      return "section-fade-out";
    } else {
      return "section-fade-in";
    }
  }
  let xUrl, instagramUrl, facebookUrl, linkedInUrl, gitHubUrl, websiteUrl;

  const { x, instagram, facebook, linked_in, github } = socials;

  if (
    socials.x.startsWith("https://x.com/") ||
    socials.x.startsWith("https://twitter.com/")
  ) {
    xUrl = socials.x;
  } else if (
    socials.x.startsWith("x.com/") ||
    socials.x.startsWith("twitter.com/")
  ) {
    xUrl = `https://${socials.x}`;
  } else {
    xUrl = `https://x.com/${socials.x}`;
  }

  if (socials.instagram.startsWith("https://instagram.com/")) {
    instagramUrl = socials.instagram;
  } else if (socials.instagram.startsWith("instagram.com/")) {
    instagramUrl = `https://${socials.instagram}`;
  } else {
    instagramUrl = `https://instagram.com/${socials.instagram}`;
  }

  if (socials.facebook.startsWith("https://facebook.com/")) {
    facebookUrl = socials.facebook;
  } else if (socials.facebook.startsWith("facebook.com/")) {
    facebookUrl = `https://${socials.facebook}`;
  } else {
    facebookUrl = `https://facebook.com/${socials.facebook}`;
  }

  if (socials.linked_in.startsWith("https://linkedin.com/in/")) {
    linkedInUrl = socials.linked_in;
  } else if (socials.linked_in.startsWith("linkedin.com/in/")) {
    linkedInUrl = `https://${socials.linked_in}`;
  } else {
    linkedInUrl = `https://linkedin.com/in/${socials.linked_in}`;
  }

  if (socials.github.startsWith("https://github.com/")) {
    gitHubUrl = socials.github;
  } else if (socials.github.startsWith("github.com/")) {
    gitHubUrl = `https://${socials.github}`;
  } else {
    gitHubUrl = `https://github.com/${socials.github}`;
  }

  if (
    socials.website.startsWith("https://") ||
    socials.website.startsWith("https://")
  ) {
    websiteUrl = socials.website;
  } else {
    websiteUrl = `https://${socials.website}`;
  }

  return (
    <div className="px-16 py-16 bg-portfolioPrimary h-portfolioSection relative z-[1]">
      <div className={`${getFadeClass()} sticky top-[225px]`}>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col w-full md:w-2/3">
            <h1 className={`font-bold text-display md:text-[72px]`}>{name}</h1>
            <h1 className="text-display md:text-portfolioDisplay">
              {job_title}
            </h1>
            <h1 className=" text-[18px] md:text-[24px] mb-[24px]">{bio}</h1>
            <div className="flex flex-row w-full justify-between">
              <div className="socials-container flex flex-row">
                <a href={xUrl} className="pr-2 py-2" target="_blank">
                  <FaXTwitter className="h-icon w-icon text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
                </a>
                <a href={instagramUrl} className="px-2 py-2" target="_blank">
                  <FaInstagram className="h-icon w-icon text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
                </a>
                <a href={facebookUrl} className="px-2 py-2" target="_blank">
                  <FaFacebook className="h-icon w-icon text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
                </a>
                <a href={linkedInUrl} className="px-2 py-2" target="_blank">
                  <FaLinkedin className="h-icon w-icon text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
                </a>
                <a href={gitHubUrl} className="px-2 py-2" target="_blank">
                  <FaGithub className="h-icon w-icon text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
                </a>
                <a href={websiteUrl} className="px-2 py-2" target="_blank">
                  <MdHttp className="h-icon w-icon text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive" />
                </a>
              </div>
              <div className="flex flex-row items-center cursor-pointer">
                <LuDownload className="h-icon w-icon text-portfolioSecondary" />
                <a
                  href={cvUrl}
                  className="px-2 underline text-portfolioSecondary hover:text-portfolioButtonHover active:text-portfolioButtonActive"
                  download
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
