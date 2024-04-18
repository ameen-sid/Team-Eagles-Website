"use client";

// Import the Required Modules
import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

const Hero = () => {
	return (
		<div className="!flex h-[55vh] w-full items-center justify-between px-10">
			<Image
				width={1200}
				height={1200}
				src="/image/three.jpeg"
				alt="bg-img"
				className="absolute inset-0 ml-auto w-[900px] h-[820px] rounded-bl-[100px] object-cover object-top"
			/>

			<div className="container mx-auto mt-28">
				<div className="grid grid-cols-12 text-center lg:text-left mt-16">
					<Card 
						className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7" 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
						<Typography
							variant="h1"
							color="blue-gray"
							className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl" 
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}						
						>
							Unleash the Potential of the Battleground with Our Elite PUBG Squad
						</Typography>

						<Typography
							variant="lead"
							className="mb-10 mt-6 !text-gray-900" 
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}						
						>
							Are you prepared to dive into the exhilarating realm of PUBG esports? Search no more! We are your reliable ally for honing your skills in PUBG competitive gaming
						</Typography>

						<div className="mb-8 flex justify-center gap-4 lg:justify-start">
							<Button 
								color="gray" 
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								view all players
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Hero;