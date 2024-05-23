// Import the Required Modules
import { v2 as cloudinary } from 'cloudinary';

// Function to Connect to the Cloudinary
export const cloudinaryConnect = async () => {
	try {
		// check if CLOUD_NAME, API_KEY, API_SECRET exists in .env file, otherwise throw an error
		if ( !process.env.CLOUD_NAME || !process.env.API_KEY || !process.env.API_SECRET ) {
			throw new Error("Environment variables are not defined.");
		}

		//! ###		Configuring the Cloudinary to Upload Media 	   ###
		cloudinary.config({
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});

		console.log("Connected to Cloudinary Successfully");
		
	} catch(error:any) {
		console.error("Error in Connecting to Cloudinary: ", error.message);
	}
}