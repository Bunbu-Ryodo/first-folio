import Link from 'next/link';

export default function BreadCrumbs({links, current}: {links: string[], current: string}){
    return(
        <div className="w-full flex ml-breadcrumbs mt-breadcrumbs">
            {links.map((link, index) => (
                <>
                <Link className="text-monokaiBlue text-breadCrumb" href={`/${link}`} key={"Link" + `${index}`}>
                    <span className="underline">{`${link}.tsx`}</span><span className="no-underline px-2">&gt;</span>
                </Link>
                </>
            ))}
            <span className="text-breadCrumb text-monokaiYellow">{current}</span>
        </div>
    )
}