import { getPortfolioData } from "@/app/lib/actions";
import PortfolioHero from "@/app/ui/portfolio/portfolio-hero";
import Testimonials from "@/app/ui/portfolio/testimonials";
import Test from "@/app/ui/portfolio/test";

export default async function Portfolio() {
  const portfolioData = await getPortfolioData();
  const { introduction, tech, projects, endorsements, socials } = portfolioData;
  console.log(portfolioData, "Portfolio Data");

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
      <Testimonials endorsements={endorsements}></Testimonials>
      <Test></Test>
    </>
  );
}
