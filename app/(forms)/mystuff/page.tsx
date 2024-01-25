import Link from "next/link";
import { getUserId, getPortfolioData } from "@/app/lib/actions";

export default async function MyStuff() {
  const userId = await getUserId();
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col md:w-1/3 min-w-[352px]">
        <Link className="w-full" href="/introduce">
          <button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] mb-buttons disabled:bg-slate-500 w-full">
            BuildMyPortfolio()
          </button>
        </Link>
        <Link className="w-full" href="/usersettings">
          <button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] mt-buttons disabled:bg-slate-500 w-full">
            ChangeMySettings()
          </button>
        </Link>
        <Link className="w-full" href={`/${userId}/portfolio`}>
          <button className="bg-monokaiOrange text-button text-monokaiBlack rounded h-button hover:bg-buttonOrangeHover active:bg-buttonOrangeActive mr-[16px] mt-[24px] disabled:bg-slate-500 w-full">
            VisitPortfolio()
          </button>
        </Link>
      </div>
    </div>
  );
}
