export default function NpmInstall({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex justify-start animate-pulse">
      <div className="flex w-full text-displayMobile md:text-header mb-title mt-2 px-2">
        <span className="text-monokaiGreen mr-[24px]">
          &gt; {`npm i ${label}`}
        </span>
        <div className="flex flex-col w-[36px] h-[36px] justify-end ">
          <div className="w-[36px] h-[5px] bg-monokaiGreen npm-install"></div>
        </div>
      </div>
    </div>
  );
}
