import { getPortfolioData } from "@/app/lib/actions";
import PortfolioHero from "@/app/ui/portfolio/portfolio-hero";

export default async function Portfolio() {
  const portfolioData = await getPortfolioData();
  const { introduction, tech, projects, endorsements, socials } = portfolioData;

  // const blob = new Blob([cv.data], { type: "application/pdf" });
  // const file = new File([cv.data], "cv.pdf", { type: "application/pdf" });

  return (
    <>
      <PortfolioHero
        name={introduction.name}
        job_title={introduction.job_title}
        bio={introduction.bio}
        socials={socials}
      ></PortfolioHero>
    </>
  );
}
