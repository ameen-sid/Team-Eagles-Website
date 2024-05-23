"use client";

// Import the Required Modules
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

// Function of ResetPassword Page
const ResetPassword = () => {
	const router = useRouter();

	const [data, setData] = useState({
		newPassword: "",
		confirmNewPassword: "",
		token: ""
	});

	useEffect(() => {
		const urlToken = window.location.search.split("=")[1];
		setData({ ...data, token: urlToken });
	},[]);

	const setNewPassword = async () => {
		try {
			const response = await axios.post("/api/v1/auth/reset-password", data);
			// console.log("Verification Status: ", response.data);
			toast.success("Email Verified Successfully");

			setData({ 
				...data, 
				newPassword: "",
				confirmNewPassword: ""
			});

			router.push("/login");
			
		} catch(error:any) {
			console.log("Verification Failed");
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
          				Set New Password
        			</Typography>
        			
					<Input 
						label="Enter New Password" 
						id="newPassword"
						type="password"
						value={data.newPassword}
						onChange={(e) => setData({ ...data, newPassword:e.target.value })}
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined} 
						crossOrigin={undefined}
					/>

					<Input 
						label="Confirm New Password" 
						id="confirmNewPassword"
						type="password"
						value={data.confirmNewPassword}
						onChange={(e) => setData({ ...data, confirmNewPassword:e.target.value })}
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
						onClick={setNewPassword}
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
						Set New Password
					</Button>
      			</CardFooter>
    		</Card>
		</section>	
	);
}

// Export the ResetPassword Page
export default ResetPassword;