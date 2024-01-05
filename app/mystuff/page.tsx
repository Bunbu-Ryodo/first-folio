import Link from 'next/link';

export default async function MyStuff(){
    return (
        <div className="flex flex-col h-full w-full justify-center items-center">
                <div className="flex flex-col md:w-1/3">
                <Link className="w-full" href="/introduce"><button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] mb-buttons disabled:bg-slate-500 w-full">
                BuildMyPortfolio()
                </button></Link>
                <Link className="w-full" href="/usersettings"><button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive mr-[16px] mt-buttons disabled:bg-slate-500 w-full">
                ChangeMySettings()
                </button></Link>
                </div>
        </div>
    )
}
    