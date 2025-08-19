"use client";

// Import the Required Modules
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography
} from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";
import { NavBar } from "@/components";

// Function of Signup Page
const Signup = () => {
	const router = useRouter();

	const [user, setUser] = useState({
		userName: "", 
		email: "", 
		phoneNumber: "", 
		password: "",
		confirmPassword: ""
	});

	const onSignup = async () => {
		try {
			const response = await axios.post("/api/v1/auth/signup", user);
			// console.log("Signup Status: ", response.data);
			toast.success("Signup Successfully");

			setUser({
				userName: "", 
				email: "", 
				phoneNumber: "", 
				password: "",
				confirmPassword: ""
			});

			router.push("/login");
		} catch(error: any) {
			
			console.log("Signup Failed");
			toast.error(error.message);
		}
	}

	return (
		<>
			<NavBar/>
			<Card 
				color="transparent" 
				shadow={false}
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
				className="flex items-center justify-center mr-2 ml-2 border-2 p-4"
			>
				<Typography 
					variant="h4" 
					color="blue-gray"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
					Sign Up
				</Typography>

				<Typography 
					color="gray" 
					className="mt-1 font-normal"
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
					Nice to meet you! Enter your details to register.
				</Typography>
				
				<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
					<div className="mb-1 flex flex-col gap-6">
						<Typography 
							variant="h6" 
							color="blue-gray" 
							className="-mb-3"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Your User Name
						</Typography>
						<Input
							size="lg"
							placeholder="userName"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							type="text"
							id="userName"
							value={user.userName}
							onChange={(e) => setUser({...user, userName: e.target.value})}
							labelProps={{
								className: "before:content-none after:content-none",
							}} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined} 
							crossOrigin={undefined}
						/>

						<Typography 
							variant="h6" 
							color="blue-gray" 
							className="-mb-3"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Email
						</Typography>
						<Input
							size="lg"
							placeholder="name@mail.com"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							type="text"
							id="email"
							value={user.email}
							onChange={(e) => setUser({...user, email: e.target.value})}
							labelProps={{
								className: "before:content-none after:content-none",
							}}
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined} 
							crossOrigin={undefined}
						/>

						<Typography 
							variant="h6" 
							color="blue-gray" 
							className="-mb-3"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Phone Number
						</Typography>
						<Input
							size="lg"
							placeholder="phone number"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							type="number"
							id="phoneNumber"
							value={user.phoneNumber}
							onChange={(e) => setUser({...user, phoneNumber: e.target.value})}
							labelProps={{
								className: "before:content-none after:content-none",
							}} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined} 
							crossOrigin={undefined}
						/>

						<Typography 
							variant="h6" 
							color="blue-gray" 
							className="-mb-3"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Password
						</Typography>
						<Input
							type="password"
							size="lg"
							placeholder="********"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							id="password"
							value={user.password}
							onChange={(e) => setUser({...user, password: e.target.value})}
							labelProps={{
								className: "before:content-none after:content-none",
							}} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined} 
							crossOrigin={undefined}
						/>

						<Typography 
							variant="h6" 
							color="blue-gray" 
							className="-mb-3"
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Confirm Password
						</Typography>
						<Input
							type="password"
							size="lg"
							placeholder="********"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							id="confirmPassword"
							value={user.confirmPassword}
							onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
							labelProps={{
								className: "before:content-none after:content-none",
							}} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined} 
							crossOrigin={undefined}
						/>
					</div>

					<Checkbox
						label={
							<Typography
								variant="small"
								color="gray"
								className="flex items-center font-normal" 
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								I agree the
								<a
									href="#"
									className="font-medium transition-colors hover:text-gray-900"
								>
									&nbsp;Terms and Conditions
								</a>
							</Typography>
						}
						containerProps={{ className: "-ml-2.5" }} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined} 
						crossOrigin={undefined}        		
					/>

					<Button 
						onClick={onSignup}
						className="mt-6" 
						fullWidth 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
						Sign Up
					</Button>

					<Typography 
						color="gray" 
						className="mt-4 text-center font-normal" 
						placeholder={undefined} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined}
					>
						Already have an account?{" "}
						<Link href="/login" className="font-medium text-gray-900">
							Login
						</Link>
					</Typography>
				</form>
			</Card>
		</>
	);
}

// Export the Signup Page
export default Signup;