import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import EndorsementForm from "@/app/ui/endorsements/endorsement-form";
import { getEndorsements } from "@/app/lib/actions";

type Endorsement = {
  id: number;
  name?: string | undefined;
  comments?: string | undefined;
};

export default async function Endorsements() {
  const endorsements = await getEndorsements();

  if (endorsements.length < 3) {
    const fill = 3 - endorsements.length;
    for (let i = 0; i < fill; i++) {
      endorsements.push([
        { id: undefined, initialName: "", initialComments: "" },
      ]);
    }
  }
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
      <div className="flex w-full flex-col items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center px-2">
          {endorsements &&
            endorsements
              .reverse()
              .map((endorsement: Endorsement, index) => (
                <EndorsementForm
                  key={endorsement.id}
                  id={endorsement.id}
                  initialName={endorsement.name}
                  initialComments={endorsement.comments}
                ></EndorsementForm>
              ))}
        </div>
      </div>
    </main>
  );
}
