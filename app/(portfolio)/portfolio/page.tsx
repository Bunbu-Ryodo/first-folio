import { getPortfolioData } from "@/app/lib/actions";

export default async function Portfolio() {
  const portfolioData = await getPortfolioData();
  console.log(portfolioData);
  return <h1>Hello</h1>;
}
