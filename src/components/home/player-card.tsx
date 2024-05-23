// Import the Required Modules
import Link from "next/link";
import Image from "next/image";
import {
	Typography,
	Card,
	CardBody,
	CardHeader,
	Button
} from "@material-tailwind/react";

// Interface of PlayerCard props
interface PlayerCardProps {
	image: string;
	role: string;
	playerName: string;
	frags: string;
	chickens: string;
	kd: string;
	avgDamage: string;
}

// Function of PlayerCard Component
export const PlayerCard = ({ image, role, playerName, frags, chickens, kd, avgDamage }: PlayerCardProps) => {
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
					src={image}
					alt={playerName}
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
	            		{role}
          			</Typography>
				</div>

				<Link href={`player-profile/${playerName}`} className="text-blue-gray-900 transition-colors hover:text-gray-900">
					<Typography 
						variant="h5" 
						className="mb-2 normal-case"
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
            			{playerName}
          			</Typography>
				</Link>

				<div className="flex justify-between">
					<div>
						<Typography 
							className="font-normal !text-gray-500"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Frags: {frags}
						</Typography>

						<Typography 
							className="font-normal !text-gray-500"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Chickens: {chickens}
						</Typography>
					</div>

					<div>
						<Typography 
							className="font-normal !text-gray-500"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							KD Ratio: {kd}
						</Typography>

						<Typography 
							className="mb-6 font-normal !text-gray-500"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Avg. Damage: {avgDamage}
						</Typography>
					</div>
				</div>

				<Link href={`player-profile/${playerName}`}>
					<Button 
						variant="outlined" 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
						View More
					</Button>
				</Link>
			</CardBody>
		</Card>
	);
}

// Export the PlayerCard Component
export default PlayerCard;