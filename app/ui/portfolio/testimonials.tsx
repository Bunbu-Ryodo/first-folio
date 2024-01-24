"use client";

import { sourceSerif } from "@/app/ui/fonts";

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
    <div id="testimonials" className="bg-portfolioSeashell p-8 h-auto">
      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-between h-full">
        <div className="flex flex-col w-full lg:w-1/4 justify-center items-center bg-portfolioDesert text-portfolioWenge p-8 my-8 rounded min-h-[352px] shadow-xl">
          <span className="text-[18px]">{endorsements[0].comments}</span>
          <span className="text-black italic">{endorsements[0].name}</span>
        </div>
        <div className="flex flex-col w-full lg:w-1/4 justify-center items-center bg-portfolioDesert text-portfolioWenge p-8 my-8 rounded min-h-[352px] shadow-xl">
          <span className="text-[18px]">{endorsements[1].comments}</span>
          <span className="text-black italic">{endorsements[1].name}</span>
        </div>
        <div className="flex flex-col w-full lg:w-1/4 justify-center items-center bg-portfolioDesert text-portfolioWenge p-8 my-8 min-h-[352px] rounded shadow-xl">
          <span className="text-[18px]">{endorsements[2].comments}</span>
          <span className="text-black italic">{endorsements[2].name}</span>
        </div>
      </div>
    </div>
  );
}
