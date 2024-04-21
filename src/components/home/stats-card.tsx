// Import the Required Modules
import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";

// Interface of StatsCard props
interface StatsCardProps {
	icon: any,
	count: string,
	title: string
}

// Function of StatsCard Component
export const StatsCard = ({ icon, count, title }: StatsCardProps) => {
	return (
		<Card 
			color="transparent"
			shadow={false}
			className="items-center" 
			placeholder={undefined} 
			onPointerEnterCapture={undefined} 
			onPointerLeaveCapture={undefined}		
		>
			<Image
				width={30}
				height={30}
				src={icon}
				alt="icon"
			/>

			<Typography
				variant="h1"
				color="blue-gray"
				className="mb-2 mt-4 text-5xl" 
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}			
			>
				{ count }
			</Typography>

			<Typography 
				variant="h6"
				className="mb-2 font-normal text-blue-gray-500" 
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}			
			>
        		{title}
      		</Typography>
		</Card>
	);
}

// Export the StatsCard Component
export default StatsCard;