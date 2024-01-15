import IntroduceYourself from "@/app/ui/introduce/introduce-form";
import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";
import NextButton from "@/app/ui/general-ui/next-button";
import { getIntroduction } from "@/app/lib/actions";

export default async function Introduce() {
  const { name, job_title, bio } = await getIntroduction();

  return (
    <main className="h-full container font-light">
      <BreadCrumbs links={["mystuff"]} current="introduce"></BreadCrumbs>
      <NextButton link={"tech"}></NextButton>
      <div className="w-full h-full flex justify-center items-center">
        <IntroduceYourself
          initialName={name}
          initialJobTitle={job_title}
          initialBio={bio}
        ></IntroduceYourself>
      </div>
    </main>
  );
}
