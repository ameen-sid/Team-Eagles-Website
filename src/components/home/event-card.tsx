// Import the Required Modules
import React from "react";
import Image from "next/image";
import {
	Typography,
	Card,
	CardBody,
	CardHeader,
	Button
} from "@material-tailwind/react";

// Interface of EventCard props
interface EventCardProps {
	img: string;
	title: string;
	desc: string;
	buttonLabel: string;
}

// Function of EventCard Component
export const EventCard = ({ img, title, desc, buttonLabel }: EventCardProps) => {
	return (
		<Card 
			color="transparent"
			shadow={false}
			placeholder={undefined} 
			onPointerEnterCapture={undefined} 
			onPointerLeaveCapture={undefined}		
		>
			<CardHeader
				floated={false}
				className="mx-0 mt-0 mb-6 h-48"
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}			
			>
				<Image
					width={768}
					height={768}
					src={img}
					alt={title}
					className="h-full w-full object-cover"
				/>
			</CardHeader>

			<CardBody 
				className="p-0"
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
			>
				<a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-800">
					<Typography 
						variant="h5" 
						className="mb-2"
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
            			{title}
          			</Typography>
				</a>

				<Typography 
					className="mb-6 font-normal !text-gray-500"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
          			{desc}
        		</Typography>

				<Button 
					color="gray" 
					size="sm"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
          			{buttonLabel}
        		</Button>
			</CardBody>
		</Card>
	);
}

// Export the EventCard Component
export default EventCard;