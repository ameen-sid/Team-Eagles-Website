// Import the Required Modules
import {
	Typography,
	Card,
	CardBody,
	CardHeader,
	Button
} from "@material-tailwind/react";
import Image from "next/image";

interface PlayerCardProps {
	img: string;
	tag: string;
	title: string;
	desc: string;
	label: string;
}

export const PlayerCard = ({ img, tag, title, desc, label }: PlayerCardProps) => {
	return (
		<Card 
			className="border" 
			placeholder={undefined} 
			onPointerEnterCapture={undefined} 
			onPointerLeaveCapture={undefined}
		>
			<CardHeader 
				className="h-64"
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
			>
				<Image
					width={768}
					height={768}
					src={img}
					alt={title}
					className="h-full w-full object-cover scale-[1.1]"
				/>
			</CardHeader>

			<CardBody 
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
			>
				<div className="flex items-center gap-2">
					<Typography
						variant="small"
						color="blue"
						className="mb-2 font-normal text-gray-500" 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}          			
					>
	            		{tag}
          			</Typography>
				</div>

				<a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-900">
					<Typography 
						variant="h5" 
						className="mb-2 normal-case"
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
					variant="outlined" 
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
					{label}
				</Button>
			</CardBody>
		</Card>
	);
}

export default PlayerCard;