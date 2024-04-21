"use client";

// Import the Required Modules
import React from "react";
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Button
} from "@material-tailwind/react";

const verifyEmail = () => {
	return (
		<section className="w-full h-[100vh] flex items-center justify-center">
			<Card 
				className="mt-6 w-96"
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
			>
      			<CardBody 
					className="flex flex-col gap-8"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
        			<Typography 
						variant="h5" 
						color="blue-gray" 
						className="mb-2 text-center"
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
          				Verify Your Email
        			</Typography>
        			
					<Input 
						label="Enter Passcode" 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined} 
						crossOrigin={undefined}
					/>
      			</CardBody>
      			
				<CardFooter 
					className="pt-0 flex items-center justify-center"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
        			<Button 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
						Verify
					</Button>
      			</CardFooter>
    		</Card>
		</section>	
	);
}

export default verifyEmail;