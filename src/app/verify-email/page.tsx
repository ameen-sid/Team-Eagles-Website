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

// Function of VerifyEmail Page
const VerifyEmail = () => {
	const router = useRouter();

	const [code, setCode] = useState({
		passcode: "",
		token: ""
	});

	const handler = (e:any) => {
		setCode({
			...code,
			passcode: e.target.value
		});
	}

	useEffect(() => {
		const urlToken = window.location.search.split("=")[1];
		// const { query } = router;
    	// const urlToken = query.token;

		setCode({ ...code, token: urlToken });
	},[]);

	const verify = async () => {
		try {
			const response = await axios.post("/api/v1/auth/verify-email", code);
			// console.log("Verification Status: ", response.data);
			toast.success("Email Verified Successfully");

			setCode({ ...code, passcode: "" });

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
          				Verify Your Email
        			</Typography>
        			
					<Input 
						label="Enter Passcode" 
						id="passcode"
						type="text"
						value={code.passcode}
						onChange={handler}
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
						onClick={verify}
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

// Export the VerifyEmail Page
export default VerifyEmail;