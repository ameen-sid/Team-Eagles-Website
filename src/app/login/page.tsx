"use client";

// Import the Required Modules
import React from "react";
import {
	Card,
	Input,
	Checkbox,
	Button,
	Typography
} from "@material-tailwind/react";

const Login = () => {
	return (
		<Card 
			color="transparent" 
			shadow={false}
			placeholder={undefined} 
			onPointerEnterCapture={undefined} 
			onPointerLeaveCapture={undefined}
			className="flex items-center justify-center m-24 border-2 p-12"
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