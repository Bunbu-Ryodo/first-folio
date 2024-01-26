"use client";

import { roboto, playfairDisplay, sourceSerif } from "@/app/ui/fonts";

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
  return (
    <div id="testimonials" className="bg-portfolioNeutral p-8">
      <div className="flex justify-center w-full">
        <div className="w-full md:w-1/3 flex flex-col items-center">
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
      <div className="flex flex-col w-full justify-between p-2 lg:flex-row lg:flex-wrap">
        {endorsements &&
          endorsements
            .reverse()
            .map((endorsement: Endorsement, index: number) => (
              <div
                key={`endorsement-${index}`}
                className="flex flex-col flex-1 w-full lg:w-1/3 m-2 bg-portfolioAccent1 p-8 drop-shadow-xl rounded-lg flex-wrap"
              >
                <p
                  className={`${sourceSerif.className} text-[20px] mb-2 w-full`}
                  style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
                >
                  {endorsement.comments}
                </p>
                <a className="text-black italic">{endorsement.name}</a>
              </div>
            ))}
      </div>
    </div>
  );
}
