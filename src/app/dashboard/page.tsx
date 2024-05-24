'use client';

// Import the Required Modules
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@material-tailwind/react';
import axios from 'axios';

// Function of Dashboard Page
const Dashboard = () => {
	const router = useRouter();

	const logout = async () => {
		try {
			const response = await axios.post("/api/v1/auth/logout");
			// console.log("Logout: ", response.data);

			router.push("/login");
		} catch (error:any) {
			console.log("Error while logouting: ", error.message);
		}
	}
  return (
	<div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
    	<h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        	Coming Soon
    	</h1>

    	<p className="text-white text-center text-lg mb-8">
	        We are working hard to bring you something amazing. Stay tuned!
    	</p>

		
		<Button 
			variant="outlined"
			className='text-white border-white'
			placeholder={undefined} 
			onPointerEnterCapture={undefined} 
			onPointerLeaveCapture={undefined}			
			onClick={logout}
		>
			Logout
		</Button>
	</div>
  )
}

// Export the Dashboard Page
export default Dashboard;