import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import Link from "next/link";

export default function HowToUse() {
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
      <NextButton link="#"></NextButton>
      <div className="flex flex-col w-full md:w-1/3 h-full items-center justify-center px-2">
        <span className="opacity-0 animate-fade-in text-monokaiYellow text-displayMobile md:text-header font-light">
          How To Use
        </span>
        <div className="border-[1px] border-monokaiBlue px-2 py-2 rounded">
          <p className="opacity-0 animate-fade-in-slowest text-center text-howToUse text-monokaiPurple">
            The next page will take you to your portfolio! Copy & Paste the URL
            into your CV/LinkedIn/social media, or anywhere else you&apos;d like
            to use it. Purchase your own domain and point it at this URL if you
            like. Good luck
          </p>
        </div>

        <Link className="w-full" href="/usersettings">
          <button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] mt-buttons disabled:bg-slate-500 w-full">
            Go()
          </button>
        </Link>
      </div>
    </main>
  );
}
