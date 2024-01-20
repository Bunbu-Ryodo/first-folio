import { getPortfolioData } from "@/app/lib/actions";
import PortfolioHero from "@/app/ui/portfolio/portfolio-hero";
import Testimonials from "@/app/ui/portfolio/testimonials";
import Tech from "@/app/ui/portfolio/tech";
import Projects from "@/app/ui/portfolio/projects";

export default async function Portfolio() {
  const portfolioData = await getPortfolioData();
  const { introduction, tech, projects, endorsements, socials } = portfolioData;

  return (
    <>
      <PortfolioHero
        name={introduction.name}
        job_title={introduction.job_title}
        bio={introduction.bio}
        socials={socials}
      ></PortfolioHero>
      <Testimonials endorsements={endorsements}></Testimonials>
      <Tech tech={tech}></Tech>
      <Projects projects={projects}></Projects>
    </>
  );
}
