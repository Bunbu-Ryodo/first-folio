import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import Link from "next/link";
import { getUserId } from "@/app/lib/actions";

export default async function HowToUse() {
  const userId = await getUserId();
  return (
    <main className="flex h-full flex-col justify-center items-center container font-light">
      <BreadCrumbs
        links={[
          "mystuff",
          "introduce",
          "tech",
          "projects",
          "endorsements",
          "socials",
          "cv",
        ]}
        current="how-to-use"
      ></BreadCrumbs>
      <NextButton newTab={true} link={`${userId}/portfolio`}></NextButton>
      <div className="flex flex-col w-full md:w-1/3 h-full items-center justify-center px-2">
        <span className="opacity-0 animate-fade-in text-monokaiYellow text-displayMobile md:text-header font-light">
          How To Use
        </span>
        <div className=" px-2 py-2">
          <p className="opacity-0 animate-fade-in-slowest text-center text-[18px] text-monokaiPurple">
            The next page will open in a new tabtake you to your portfolio! Copy
            & Paste the URL into your CV/LinkedIn/social media, or anywhere else
            you&apos;d like to use it. Purchase your own domain and point it at
            this URL if you like. Good luck
          </p>
        </div>

        <Link className="w-full" href={`/${userId}/portfolio`} target="_blank">
          <button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] mt-buttons disabled:bg-slate-500 w-full">
            Go()
          </button>
        </Link>
      </div>
    </main>
  );
}
