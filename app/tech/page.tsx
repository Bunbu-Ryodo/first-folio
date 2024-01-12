import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import TechForm from "@/app/ui/tech/tech-form";
import { getTech } from "@/app/lib/actions";

export default async function Tech() {
  const { technologies, experience } = await getTech();

  return (
    <main className="h-full flex-col container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce"]}
        current={"tech"}
      ></BreadCrumbs>
      <NextButton link={"projects"}></NextButton>
      <TechForm
        initialTechnologies={technologies}
        initialExperience={experience}
      ></TechForm>
    </main>
  );
}
