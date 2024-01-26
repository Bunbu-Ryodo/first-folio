import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import EndorsementForm from "@/app/ui/endorsements/endorsement-form";
import RemoveEndorsement from "@/app/ui/endorsements/delete-endorsement";
import { getEndorsements } from "@/app/lib/actions";
import AddEndorsement from "@/app/ui/endorsements/add-new-endorsement";

type Endorsement = {
  id: number;
  name?: string | undefined;
  comments?: string | undefined;
  commenterLink?: string | undefined;
  commenterPhotoPathname?: string | undefined;
};

export default async function Endorsements() {
  const endorsements = await getEndorsements();

  function sortEndorsements(a: Endorsement, b: Endorsement) {
    return a.id - b.id;
  }

  endorsements.sort(sortEndorsements);

  return (
    <main className="h-full container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce", "tech", "projects"]}
        current="endorsements"
      ></BreadCrumbs>
      <NextButton link="socials"></NextButton>
      <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header text-center mb-title">
        <span className="opacity-0 animate-fade-in-slower">
          Share Endorsements
        </span>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center px-2">
          {endorsements &&
            endorsements.map((endorsement: Endorsement, index: number) => (
              <>
                <RemoveEndorsement
                  key={`Remove-${endorsement.id}`}
                  id={endorsement.id}
                ></RemoveEndorsement>
                <EndorsementForm
                  key={`${index}-${endorsement.id}-endorsement`}
                  index={index}
                  id={endorsement.id}
                  initialName={endorsement.name ? endorsement.name : ""}
                  initialComments={
                    endorsement.comments ? endorsement.comments : ""
                  }
                  initialCommenterPhotoPathname={
                    endorsement.commenterPhotoPathname
                      ? endorsement.commenterPhotoPathname
                      : ""
                  }
                  initialCommenterLink={
                    endorsement.commenterLink ? endorsement.commenterLink : ""
                  }
                ></EndorsementForm>
              </>
            ))}
          {(!endorsements || endorsements.length === 0) && (
            <EndorsementForm
              key={`new-endorsement`}
              index={1}
              id={undefined}
              initialName={""}
              initialComments={""}
              initialCommenterPhotoPathname={""}
              initialCommenterLink={""}
            ></EndorsementForm>
          )}
          <AddEndorsement></AddEndorsement>
        </div>
      </div>
    </main>
  );

  //Comment for push
}
