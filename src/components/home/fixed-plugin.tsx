"use client";

// Import the Required Modules
import Image from "next/image";
import { Button } from "@material-tailwind/react";

// Function of Fixed Plugin Component
export const FixedPlugin = () => {
	return (
		<a href="https://www.material-tailwind.com" target="_blank">
			<Button
				color="white"
				size="sm"
				className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50" 
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}      		
			>
				<Image
          			width={128}
          			height={128}
          			className="w-5 h-5"
          			alt="Material Tailwind"
          			src="https://www.material-tailwind.com/favicon.png"
        		/>{" "}
        	Made With Material Tailwind
      		</Button>
    	</a>
	);
}

// Export the Fixed Plugin Component
export default FixedPlugin;