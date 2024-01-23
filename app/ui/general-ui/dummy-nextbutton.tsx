export default function DummyNextButton() {
  return (
    <div className="flex flex-row-reverse w-full opacity-0">
      <a href="#" className="w-1/3">
        <button className="bg-monokaiGreen text-button text-monokaiBlack rounded h-button hover:bg-buttonGreenHover active:bg-buttonGreenActive my-[24px] mr-[16px] w-full">
          Next()
        </button>
      </a>
    </div>
  );
}
