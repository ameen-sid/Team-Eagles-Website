// Import the Required Modules
import { NavBar, Footer } from "@/components";
import Hero from "./hero";
import OurImpressiveStats from "./our-impressive-stats";
import ExplorePlayers from "./explore-players";
import Events from "./events";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <OurImpressiveStats />
      <ExplorePlayers />
      <Events />
      <Footer />
    </>
  );
}
