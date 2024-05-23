"use client";

// Import the Required Modules
import React, { useState } from "react";
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Button
} from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";

// Function of ResetPasswordEmail Page
const ResetPasswordEmail = () => {
	const [data, setData] = useState({
		email: ""
	});

	const sendEmail = async () => {
		try {
			const response = await axios.post("/api/v1/auth/reset-password-email", data);
			// console.log("SendEmail Status: ", response.data);
			toast.success("Email Send Successfully");

			setData({
				email: ""
			});
			
		} catch(error:any) {
			console.log("Failed to Send Email");
			toast.error(error.message);
		}
	}

	return (
		<section className="w-full h-[100vh] flex items-center justify-center">
			<Card 
				className="mt-6 w-96"
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
			>
      			<CardBody 
					className="flex flex-col gap-7"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
        			<Typography 
						variant="h5" 
						color="blue-gray" 
						className="text-center"
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
          				Forgot Password?
        			</Typography>

					<Typography
						variant="h6"
						className="font-normal text-center" 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}					
					>
						Do not worry! It happens. Please enter the address associated with your account.
					</Typography>
        			
					<Input 
						label="Enter Email Address" 
						id="passcode"
						type="email"
						value={data.email}
						onChange={(e) => setData({ email:e.target.value })}
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
						onClick={sendEmail}
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
						Send Mail
					</Button>
      			</CardFooter>
    		</Card>
		</section>	
	);
}

// Export the ResetPasswordEmail Page
export default ResetPasswordEmail;