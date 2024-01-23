import Link from "next/link";

export default function NextButton({
  link,
  newTab,
}: {
  link: string;
  newTab?: boolean;
}) {
  return (
    <div className="flex flex-row-reverse w-full">
      <Link href={`/${link}`} className="w-1/3" target={newTab ? "_blank" : ""}>
        <button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive my-[24px] mr-[16px] w-full">
          Next()
        </button>
      </Link>
    </div>
  );
}
