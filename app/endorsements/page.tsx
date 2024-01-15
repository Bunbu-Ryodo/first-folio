import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";

export default function Endorsements() {
  return (
    <main className="h-full container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce", "tech", "projects"]}
        current="endorsements"
      ></BreadCrumbs>
      <NextButton link="socials"></NextButton>
    </main>
  );
}
