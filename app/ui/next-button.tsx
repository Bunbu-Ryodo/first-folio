import Link from 'next/link'

export default function NextButton({link}: {link: string}){
    return(
        <div className="flex flex-row-reverse w-full">
            <Link href={`/${link}`} className="w-1/3">
                <button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive my-nextButton-y mr-nextButton w-full">
                Next()
                </button>
            </Link>
        </div>
    )
}