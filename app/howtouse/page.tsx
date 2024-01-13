import BreadCrumbs from "@/app/ui/general-ui/breadcrumbs";

export default function HowToUse() {
  return (
    <>
      <BreadCrumbs
        links={["mystuff", "introduce", "tech", "projects", "socials", "cv"]}
        current="how-to-use"
      ></BreadCrumbs>
      <h1>Hello</h1>
    </>
  );
}
