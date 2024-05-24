'use client';

// Import the Required Modules
import React from 'react';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

// Function of AllPlayers Page
const AllPlayers = () => {
  return (
	<div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
    	<h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        	Coming Soon
    	</h1>

    	<p className="text-white text-center text-lg mb-8">
	        We are working hard to bring you something amazing. Stay tuned!
    	</p>

		<Link href={"/"}>
			<Button 
				variant="outlined"
				className='text-white border-white'
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}			
			>
				Back to Home
			</Button>
		</Link>
	</div>
  )
}

// Export the AllPlayer Page
export default AllPlayers;