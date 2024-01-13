import Link from "next/link";
import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import CVForm from "@/app/ui/cv/cv-form";

export default async function CV() {
  return (
    <main className="h-full flex-col justify-center items-center container font-light">
      <BreadCrumbs
        links={["mystuff", "introduce", "tech", "projects", "socials"]}
        current="cv"
      ></BreadCrumbs>
      <NextButton link={"#"}></NextButton>
      <div className="w-full h-full flex justify-center items-center">
        <CVForm></CVForm>
      </div>
    </main>
  );
}
