"use client";

import React, { useState } from "react";
import { roboto, playfairDisplay, sourceSerif } from "@/app/ui/fonts";
import Image from "next/image";

type Endorsement = {
  id: number;
  name?: string;
  comments?: string;
  commenterLink?: string;
  commenterPhotoUrl?: string;
  candidateId?: string;
};

export default function Testimonials({
  endorsements,
}: {
  endorsements: Endorsement[];
}) {
  const [isVisible, setVisible] = React.useState(false);
  const headerRef = React.useRef<HTMLParagraphElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const domNode = headerRef.current;
    if (domNode) {
      observer.observe(domNode);
    }

    return () => {
      if (domNode) {
        observer.unobserve(domNode);
      }
    };
  }, []);

  function sortEndorsements(a: Endorsement, b: Endorsement) {
    return a.id - b.id;
  }

  endorsements.sort(sortEndorsements);

  return (
    <div id="testimonials" className="bg-portfolioNeutral p-8">
      <div className="flex justify-center w-full">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="text-portfolioPrimary flex items-center justify-center bg-portfolioSecondary h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2 drop-shadow-xl">
            Testimonials
          </div>
          <p
            ref={headerRef}
            className={`${
              isVisible ? "slide-in" : "animate-fade-out"
            } font-bold text-displayMobile md:text-display text-center drop-shadow-md`}
          >
            Kind words
          </p>
          <p className="text-center drop-shadow-md text-[20px]">
            The customer is king 👑
          </p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col w-full justify-between p-2 md:flex-row md:flex-wrap">
          {endorsements &&
            endorsements
              .reverse()
              .map((endorsement: Endorsement, index: number) => (
                <li
                  key={`endorsement-${index}`}
                  className="flex flex-1 flex-col w-full md:w-1/3 m-2 bg-portfolioAccent1 p-8 drop-shadow-xl rounded-lg"
                >
                  <div
                    className={` text-[16px] mb-2 md:max-h-[95%] w-full md:overflow-hidden md:text-overflow-ellipsis`}
                    style={{
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {endorsement.comments}
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={
                        endorsement.commenterLink?.startsWith("https://")
                          ? endorsement.commenterLink
                          : `https://${endorsement.commenterLink}`
                      }
                      className={`text-black italic ${
                        endorsement.commenterLink
                          ? "underline text-blue-500"
                          : ""
                      }`}
                    >
                      {endorsement.name}
                    </a>
                    {endorsement.commenterPhotoUrl && (
                      <Image
                        src={endorsement.commenterPhotoUrl}
                        alt="screenshot"
                        className="m-2 rounded-full drop-shadow-lg border-4 border-portfolioAccent1"
                        height={128}
                        width={128}
                        objectFit="cover"
                        style={{ maxWidth: "44px", maxHeight: "44px" }}
                      ></Image>
                    )}
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}
