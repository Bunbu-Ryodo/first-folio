export default function SkillTag({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center bg-portfolioBlack h-button rounded-full text-portfolioWhite min-w-[160px] w-fit mx-2 my-2">
      <span>{label}</span>
    </div>
  );
}
