// Import the Required Modules
import { NavBar, Footer } from "@/components";
import Hero from "./home/hero";
import OurImpressiveStats from "./home/our-impressive-stats";
import ExplorePlayers from "./home/explore-players";
// import Events from "./home/events";

// Function of Home Page
export default function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<OurImpressiveStats />
			<ExplorePlayers />
			{/* <Events /> */}
			<Footer />
		</>
	);
}
