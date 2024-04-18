"use client";

// Import the Required Modules
import { Typography } from "@material-tailwind/react";
import PlayerCard from "@/components/player-card";

const PLAYERS = [
	{
		img: "/image/blogs/blog4.svg",
		tag: "IGL • 10KD • 200+ Kills",
		title: "Eagles Joker",
		label: "View More",
		desc: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
	},
	{
		img: "/image/blogs/blog3.svg",
		tag: "Assaulter • 8KD • 150+ Kills",
		title: "Ameen Sid",
		label: "View More",
		desc: "Our Responsive Design course teaches you the art of creating websites that seamlessly adapt to different devices and screen sizes.",
	},
	{
		img: "/image/blogs/blog2.svg",
		tag: "Assaulter • 8KD • 590+ Kills",
		title: "Eagles Faizan",
		label: "View More",
		desc: "Take your frontend development to the next level with our React Development course. Learn how to build interactive, dynamic web applications.",
	},
	{
		img: "/image/blogs/blog5.svg",
		tag: "Beginner • 35 Classes • 400 Students",
		title: "Frontend Essentials Course",
		label: "View More",
		desc: "For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.",
	},
	{
		img: "/image/blogs/blog6.svg",
		tag: "Medium • 10 Classes • 150 Students",
		title: "Streamline Your CSS Workflow",
		label: "View More",
		desc: "Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.",
	},
	{
		img: "/image/blogs/blog-1.svg",
		tag: "Medium • 33 Classes • 690 Students",
		title: "Master Backend Development",
		label: "View More",
		desc: "Dream of becoming a backend developer? Our intensive one-month Node.js course is your fast track to achieving that goal.",
	},
];

export const ExplorePlayers = () => {
	return (
		<section className="px-8 mt-40">
			<div className="container mx-auto mb-24 text-center">
				<Typography 
					variant="h2" 
					color="blue-gray"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
          			Our Team
        		</Typography>
			</div>

			<div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        		{ PLAYERS.map((props, idx) => (
          			<PlayerCard key={idx} {...props} />
        		))}
      		</div>
		</section>
	);
}

export default ExplorePlayers;