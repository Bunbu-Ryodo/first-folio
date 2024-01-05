import Link from 'next/link';

export default function BreadCrumbs({links, current}: {links: string[], current: string}){
    return(
        <div className="w-full flex">
            {links.map((link, index) => (
                <>
                <Link className="text-monokaiBlue text-breadCrumb" href={`/${link}`} key={index}>
                    <span className="underline" key={index}>{`${link}.tsx`}</span><span key={index} className="no-underline px-2">&gt;</span>
                </Link>
                </>
            ))}
            <span className="text-breadCrumb text-monokaiYellow">{current}</span>
        </div>
    )
}