import Image from "next/image";
import Link from "next/link";
import portfolio_preview from "@/public/portfolio_preview.png";

export default function Home() {
  return (
    <main className="h-full flex items-center container font-light">
      <div className="flex flex-col justify-center lg:justify-start text-displayMobile w-full lg:text-display lg:w-3/6 lg:mr-[17px] p-2">
        <p className="mx-auto md:mx-0">
          <span className="text-monokaiPink">Build </span>
          <span className="text-monokaiBlue">a job</span>
        </p>
        <p className="mx-auto md:mx-0">
          <span className="text-monokaiBlue">winning </span>
          <span className="text-monokaiYellow">portfolio.</span>
        </p>
        <div className="hidden xl:block xl:h-[72px] xl:overflow-hidden">
          <ul className="list">
            <li className="text-monokaiGreen list-item">
              Show off your skills.
            </li>
            <li className="text-monokaiGreen list-item">Network.</li>
            <li className="text-monokaiGreen list-item">Win clients.</li>
            <li className="text-monokaiGreen list-item">Get hired.</li>
          </ul>
        </div>
        <Link href="/login" className="w-full flex">
          <button className="mx-auto md:mx-0 mt-4 bg-monokaiGreen text-input text-monokaiBlack rounded w-80 h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive">
            Start()
          </button>
        </Link>
      </div>
      <div className="hidden lg:flex w-3/6 ml-[17px]"></div>
    </main>
  );
}
