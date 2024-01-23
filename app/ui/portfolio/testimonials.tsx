"use client";
import { useState, useEffect } from "react";
import { robotoMono, sourceSerif } from "@/app/ui/fonts";

type Endorsement = {
  id: number;
  name?: string;
  comments?: string;
  candidateId?: string;
};

export default function Testimonials({
  endorsements,
}: {
  endorsements: Endorsement[];
}) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition =
      window.scrollY || document.documentElement.scrollTop;
    if (currentPosition) {
      setScrollPosition(currentPosition);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getFadeClass = (index: number) => {
    const positionThresholds = [500, 250, 0];

    const testimonialsSection = document?.getElementById("testimonials");
    const threshold = positionThresholds[index];

    if (testimonialsSection) {
      if (testimonialsSection.getBoundingClientRect().top <= threshold) {
        return "animate-fade-in-slowest";
      }
    }
    return "";
  };
  return (
    <div id="testimonials" className="h-portfolioSection">
      <div className="sticky top-0">
        <div className="flex flex-col w-full px-8 py-8">
          <div className="flex flex-row justify-center items-center">
            <h1
              className={`opacity-0 text-display mb-title ${getFadeClass(0)}`}
            >
              Testimonials
            </h1>
          </div>
          <div className="flex flex-col w-full items-center justify-center mb-title">
            <span
              className={`opacity-0 ${robotoMono.className} ${getFadeClass(
                0
              )} text-[16px] md:text-[24px]`}
            >
              {endorsements[0].comments ? `"${endorsements[0].comments}"` : ""}
            </span>
            <span
              className={`opacity-0 ${
                robotoMono.className
              } text-[16px] md:text-[24px] italic ${getFadeClass(0)}`}
            >
              {endorsements[0].name ? `${endorsements[0].name}` : ""}
            </span>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center px-8 md:py-8">
              <span
                className={`opacity-0 ${
                  robotoMono.className
                } text-[16px] md:text-[24px] ${getFadeClass(1)}`}
              >
                {endorsements[1].comments
                  ? `"${endorsements[1].comments}"`
                  : ""}
              </span>
              <span
                className={`opacity-0 ${
                  robotoMono.className
                } text-[16px] md:text-[24px] italic ${getFadeClass(1)}`}
              >
                {endorsements[1].name ? `${endorsements[1].name}` : ""}
              </span>
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center p-8">
              <span
                className={`opacity-0 ${
                  robotoMono.className
                } text-[16px] md:text-[24px] ${getFadeClass(2)}`}
              >
                {endorsements[2].comments
                  ? `"${endorsements[2].comments}"`
                  : ""}
              </span>
              <span
                className={`opacity-0 ${
                  robotoMono.className
                } text-[16px] md:text-[24px] italic ${getFadeClass(2)}`}
              >
                {endorsements[2].name ? `${endorsements[2].name}` : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
