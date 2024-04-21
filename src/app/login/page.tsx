"use client";

// Import the Required Modules
import React, { useState } from "react";
import {
	Card,
	Input,
	Button,
	Typography
} from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
	const router = useRouter();

	const [user, setUser] = useState({
		userName: "", password: ""
	});

	const onLogin = async () => {
		try {
			const response = await axios.post("/api/v1/auth/login", user);
			console.log("Login Status: ", response.data);
			toast.success("Login Successful");

			router.push("/dashboard");
		} catch (error:any) {
			console.log("Login Failed");
			toast.error(error.response.data.message);
		}
	}

	return (
		<Card 
			color="transparent" 
			shadow={false}
			placeholder={undefined} 
			onPointerEnterCapture={undefined} 
			onPointerLeaveCapture={undefined}
			className="flex items-center justify-center mt-16 mr-2 ml-2 border-2 p-12"
		>
			<Typography 
				variant="h4" 
				color="blue-gray"
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
			>
        		Login
      		</Typography>

			<Typography 
				color="gray" 
				className="mt-1 font-normal"
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}
			>
        		Nice to meet you! Enter your details to login.
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
						type="text"
						id="userName"
						value={user.userName}
						onChange={(e) => setUser({...user, userName: e.target.value})}
						placeholder="name@mail.com"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
						id="password"
						value={user.password}
						onChange={(e) => setUser({...user, password: e.target.value})}
						placeholder="********"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}} 
						onPointerEnterCapture={undefined} 
						onPointerLeaveCapture={undefined} 
						crossOrigin={undefined}
					/>
				</div>

				<Typography
					variant="small"
					color="gray"
					className="flex items-center justify-end font-normal" 
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
					<a
						href="#"
						className="font-medium transition-colors hover:text-gray-900"
					>	
						&nbsp;Forgot Password?
					</a>
				</Typography>

				<Button 
					onClick={onLogin}
					className="mt-6" 
					fullWidth 
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
          			Login
        		</Button>

				<Typography 
					color="gray" 
					className="mt-4 text-center font-normal" 
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}
				>
          			Already have an account?{" "}
          			<a href="http://localhost:3000/signup" className="font-medium text-gray-900">
            			Sign Up
          			</a>
        		</Typography>
			</form>
		</Card>
	);
}

export default Login;