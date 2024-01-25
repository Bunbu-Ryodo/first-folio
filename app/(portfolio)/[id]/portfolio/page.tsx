import { getPortfolioData } from "@/app/lib/actions";
import PortfolioHero from "@/app/ui/portfolio/portfolio-hero";
import Testimonials from "@/app/ui/portfolio/testimonials";
import Tech from "@/app/ui/portfolio/tech";
import Projects from "@/app/ui/portfolio/projects";
import Contact from "@/app/ui/portfolio/contact";
import Header from "@/app/ui/portfolio/header";

export default async function Portfolio() {
  const portfolioData = await getPortfolioData();
  const { introduction, tech, projects, endorsements, socials, cv } =
    portfolioData;

  const { cvUrl } = cv;

  return (
    <>
      <Header contact={socials.contact_email}></Header>
      <PortfolioHero
        name={introduction.name}
        job_title={introduction.job_title}
        bio={introduction.bio}
        socials={socials}
        cvUrl={cvUrl}
      ></PortfolioHero>
      <Testimonials endorsements={endorsements}></Testimonials>
      <Tech tech={tech}></Tech>
      <Projects projects={projects}></Projects>
      <Contact name={introduction.name} socials={socials}></Contact>
    </>
  );
}
