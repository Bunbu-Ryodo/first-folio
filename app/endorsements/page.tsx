import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import EndorsementsFormContainer from "@/app/ui/endorsements/endorsements-form-container";

export default function Endorsements() {
  return (
    <main className="h-full container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce", "tech", "projects"]}
        current="endorsements"
      ></BreadCrumbs>
      <NextButton link="socials"></NextButton>
      <div className="flex flex-col justify-center w-full text-monokaiYellow text-header font-medium text-center p-2 h-headerBanner mb-titleHeader">
        <span className="opacity-0 animate-fade-in-slower">
          Share Up to 3 Endorsements
        </span>
      </div>
      <EndorsementsFormContainer></EndorsementsFormContainer>
    </main>
  );
}
