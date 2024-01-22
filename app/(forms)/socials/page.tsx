import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import { getSocials } from "@/app/lib/actions";
import SocialsForm from "@/app/ui/socials/socials-form";

export default async function Socials() {
  const { contact_email, x, instagram, facebook, linked_in, github, website } =
    await getSocials();

  return (
    <main className="h-full flex-col justify-center items-center container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce", "tech", "projects", "endorsements"]}
        current="socials"
      ></BreadCrumbs>
      <NextButton link={"cv"}></NextButton>
      <div className="w-full h-full flex justify-center items-center">
        <SocialsForm
          initialEmail={contact_email}
          initialX={x}
          initialInstagram={instagram}
          initialFacebook={facebook}
          initialLinkedIn={linked_in}
          initialGithub={github}
          initialWebsite={website}
        ></SocialsForm>
      </div>
    </main>
  );
}
