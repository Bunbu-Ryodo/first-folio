import { getPortfolioData } from "@/app/lib/actions";
import PortfolioHero from "@/app/ui/portfolio/portfolio-hero";

export default async function Portfolio() {
  const portfolioData = await getPortfolioData();
  const { introduction, tech, projects, endorsements, socials, cv } =
    portfolioData;
  console.log(portfolioData);
  return (
    <>
      <PortfolioHero
        name={introduction.name}
        job_title={introduction.job_title}
        bio={introduction.bio}
        socials={socials}
        cv={cv}
      ></PortfolioHero>
    </>
  );
}
