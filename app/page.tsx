import Image from 'next/image';
import Link from 'next/link';
import portfolio_preview from '@/public/portfolio_preview.png';
import './animation.css';

export default function Home() {
  return (
    <main className="h-full flex items-center container font-light">
      <div className="flex flex-col text-display w-3/6 mr-[17px]">
        <p><span className="text-monokaiPink">Build </span><span className="text-monokaiBlue">a job</span></p>
        <p><span className="text-monokaiBlue">winning </span><span className="text-monokaiYellow">portfolio.</span></p>
        <div className="h-[72px] overflow-hidden">
          <ul className="list">
            <li className="text-monokaiGreen list-item">Show Off Your Skills.</li>
            <li className="text-monokaiGreen list-item">Network.</li>
            <li className="text-monokaiGreen list-item">Win Clients.</li>
            <li className="text-monokaiGreen list-item">Get Hired.</li>
          </ul>
        </div>
      <Link href="/login"><button className="bg-monokaiGreen text-input text-monokaiBlack rounded w-3/6 h-button">Start()</button></Link>
      </div>
      <div className="flex w-3/6 ml-[17px]">
        <Image
          src={portfolio_preview}
          alt={"Portfolio Preview"}
          width="800"
          height="600"
        ></Image>
      </div>
      
    </main>
  )
}
