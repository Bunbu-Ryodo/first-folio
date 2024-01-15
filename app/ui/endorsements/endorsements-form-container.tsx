import EndorsementForm from "@/app/ui/endorsements/endorsement-form";

export default function EndorsementsFormContainer() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center px-2">
        <EndorsementForm initialName="" initialComments=""></EndorsementForm>
        <EndorsementForm initialName="" initialComments=""></EndorsementForm>
        <EndorsementForm initialName="" initialComments=""></EndorsementForm>
      </div>
    </div>
  );
}
