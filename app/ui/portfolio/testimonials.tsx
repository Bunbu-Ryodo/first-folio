"use client";

import { roboto, playfairDisplay, sourceSerif } from "@/app/ui/fonts";

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
  return (
    <div id="testimonials" className="bg-portfolioNeutral p-8">
      <div className="flex justify-center w-full">
        <div className="w-1/3 flex flex-col items-center">
          <div className="text-portfolioPrimary flex items-center justify-center bg-portfolioSecondary h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2 drop-shadow-xl">
            Testimonials
          </div>
          <p className="font-bold text-displayMobile md:text-display text-center drop-shadow-md">
            Kind words
          </p>
          <p className="text-center drop-shadow-md text-[20px]">
            The customer is king
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-between h-full">
        <div className="flex flex-col w-full lg:w-1/4 justify-center items-center bg-portfolioPrimary text-portfolioSecondary p-8 my-8 rounded-lg min-h-[352px] shadow-xl">
          <span className={`${sourceSerif.className} text-[20px] mb-2`}>
            {endorsements[0].comments}
          </span>
          <span className="text-black italic">{endorsements[0].name}</span>
        </div>
        <div className="flex flex-col w-full lg:w-1/4 justify-center items-center bg-portfolioPrimary text-portfolioSecondary p-8 my-8 rounded-lg min-h-[352px] shadow-xl">
          <span className={`${sourceSerif.className} text-[20px] mb-2`}>
            {endorsements[1].comments}
          </span>
          <span className="text-black italic">{endorsements[1].name}</span>
        </div>
        <div className="flex flex-col w-full lg:w-1/4 justify-center items-center bg-portfolioPrimary text-portfolioSecondary p-8 my-8 min-h-[352px] rounded shadow-xl">
          <span className={`${sourceSerif.className} text-[20px] mb-2`}>
            {endorsements[2].comments}
          </span>
          <span className="text-black italic">{endorsements[2].name}</span>
        </div>
      </div>
    </div>
  );
}
