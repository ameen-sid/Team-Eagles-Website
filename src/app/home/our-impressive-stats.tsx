"use client";

// Import the Required Modules
import React from "react";
import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/home/stats-card";

// Import the Required Icons
import kill from "../../public/image/icons/kills.png";
import chickens from "../../public/image/icons/chickens.png";
import players from "../../public/image/icons/players.png";
import support from "../../public/image/icons/support.png";

const STATS = [
	{
		icon: kill,
		count: "10,200+",
		title: "Kills",
	},
	{
		icon: chickens,
		count: "50+",
		title: "Chickens",
	},
	{
		icon: players,
		count: "10+",
		title: "Players",
	},
	{
		icon: support,
		count: "24/7",
		title: "Support",
	},
];

export const OurImpressiveStats = () => {
	return (
		<section className="px-8 pt-60 mt-52">
			<div className="container mx-auto text-center lg:text-left">

				<div className="grid place-items-center text-center">
					<Typography 
						variant="h2"
						color="blue-gray"
						className="mb-2 text-4xl" 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}					
					>
						Explore Our Impressive Stats
					</Typography>

					<Typography
						variant="lead"
						className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12" 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}          			
					>
            			We take pride in our commitment to excellence and our dedication to your success.
          			</Typography>
				</div>

				<div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
        			{ STATS.map((props, key) => (
            			<StatsCard key={key} {...props} />
          			))}
        		</div>

			</div>
		</section>
	);
}

export default OurImpressiveStats;