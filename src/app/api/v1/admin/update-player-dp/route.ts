// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";
import { cloudinaryConnect } from "@/config/cloudinary";
import { uploadImageToCloudinary } from "@/utils/imageUploader";

// Connect to Database
connectDB();

// Disable Next.js body parser to use formidable
// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

// Update Player Display Picture API
export const POST = async (request: NextRequest) => {
	try {
		// fetch data from form data
		const formData = await request.formData();
		const displayPicture = formData.get("displayPicture") as unknown as File;
		const playerId = formData.get("playerId");

		// connect to the cloudinary
		cloudinaryConnect();

		// upload image to cloudinary
		const image = await uploadImageToCloudinary({
			file: displayPicture,
			folder: process.env.FOLDER_NAME!,
			height: 1000,
			quality: 75
		});

		// update player profile image URL
		const updatedProfile = await Player.findOneAndUpdate(
			{ playerId: playerId },
			{ image: image.secure_url },
			{ new: true }
		);

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: 'Image Updated successfully',
			data: updatedProfile,
		});

	} catch(error:any) {
		return NextResponse.json({ 
			status: 500,
			success: false,
			message: error.message
		});
	}
}