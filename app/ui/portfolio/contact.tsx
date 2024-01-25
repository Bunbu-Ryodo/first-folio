"use client";

import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaCopyright } from "react-icons/fa";

type Socials = {
  contact_email?: string;
  x?: string;
  instagram?: string;
  facebook?: string;
  linked_in?: string;
  github?: string;
  website?: string;
};
export default function Contact({
  socials,
  name,
}: {
  socials: Socials;
  name: string;
}) {
  let xUrl, instagramUrl, facebookUrl, linkedInUrl, gitHubUrl, websiteUrl;

  const { x, instagram, facebook, linked_in, github, website } = socials;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  if (x) {
    if (
      x.startsWith("https://x.com/") ||
      x.startsWith("https://twitter.com/")
    ) {
      xUrl = x;
    } else if (x.startsWith("x.com/") || x.startsWith("twitter.com/")) {
      xUrl = `https://${x}`;
    } else {
      xUrl = `https://x.com/${x}`;
    }
  }

  if (instagram) {
    if (instagram.startsWith("https://instagram.com/")) {
      instagramUrl = instagram;
    } else if (instagram.startsWith("instagram.com/")) {
      instagramUrl = `https://${instagram}`;
    } else {
      instagramUrl = `https://instagram.com/${instagram}`;
    }
  }

  if (facebook) {
    if (facebook.startsWith("https://facebook.com/")) {
      facebookUrl = facebook;
    } else if (facebook.startsWith("facebook.com/")) {
      facebookUrl = `https://${facebook}`;
    } else {
      facebookUrl = `https://facebook.com/${facebook}`;
    }
  }

  if (linked_in) {
    if (linked_in.startsWith("https://linkedin.com/in/")) {
      linkedInUrl = linked_in;
    } else if (linked_in.startsWith("linkedin.com/in/")) {
      linkedInUrl = `https://${linked_in}`;
    } else {
      linkedInUrl = `https://linkedin.com/in/${linked_in}`;
    }
  }

  if (github) {
    if (github.startsWith("https://github.com/")) {
      gitHubUrl = socials.github;
    } else if (github.startsWith("github.com/")) {
      gitHubUrl = `https://${github}`;
    } else {
      gitHubUrl = `https://github.com/${github}`;
    }
  }

  if (website) {
    if (website.startsWith("https://") || website.startsWith("https://")) {
      websiteUrl = website;
    } else {
      websiteUrl = `https://${website}`;
    }
  }

  return (
    <div
      id="contact"
      className="flex flex-col w-full p-8 bg-portfolioSecondary text-portfolioPrimary items-center justify-between text-2xl"
    >
      <span>Get in touch</span>
      <div className="flex items-center">
        <MdOutlineMail />
        <a
          href={`mailto:${socials.contact_email}.com`}
          className="underline mx-2 cursor-pointer "
        >
          {socials.contact_email}
        </a>
      </div>
      <div className="socials-container flex flex-row mt-10">
        <a href={xUrl} className="pr-2 py-2" target="_blank">
          <FaXTwitter className="h-icon w-icon text-portfolioPrimary hover:text-portfolioGrey" />
        </a>
        <a href={instagramUrl} className="px-2 py-2" target="_blank">
          <FaInstagram className="h-icon w-icon text-portfolioPrimary hover:text-portfolioGrey" />
        </a>
        <a href={facebookUrl} className="px-2 py-2" target="_blank">
          <FaFacebook className="h-icon w-icon text-portfolioPrimary hover:text-portfolioGrey" />
        </a>
        <a href={linkedInUrl} className="px-2 py-2" target="_blank">
          <FaLinkedin className="h-icon w-icon text-portfolioPrimary hover:text-portfolioGrey" />
        </a>
        <a href={gitHubUrl} className="px-2 py-2" target="_blank">
          <FaGithub className="h-icon w-icon text-portfolioPrimary hover:text-portfolioGrey" />
        </a>
        <a href={websiteUrl} className="px-2 py-2" target="_blank">
          <TbWorldWww className="h-icon w-icon text-portfolioPrimary hover:text-portfolioGrey" />
        </a>
      </div>
      <div className="flex items-center text-[16px]">
        <FaCopyright />
        <span className="mx-2">{name}</span>
        <span>{currentYear}</span>
      </div>
    </div>
  );
}
