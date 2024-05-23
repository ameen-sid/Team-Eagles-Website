// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";

// Conncet to Database
connectDB();

// Update Player Profile API
export const PUT = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { playerName, role, playerId, age, email, instagramLink, facebookLink, youTubeLink } = body;

		// validation on fetched data
		if( !playerName || !role || !playerId || !age || !email || !instagramLink || !facebookLink || !youTubeLink ) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "All fields are required!"
			});
		}

		// find player's profile
		let playerDetails = await Player.findOne({ playerId });

		// update player's profile data
		playerDetails.playerName = playerName;
		playerDetails.role = role;
		playerDetails.age = age;
		playerDetails.email = email;
		playerDetails.instagramLink = instagramLink;
		playerDetails.facebookLink = facebookLink;
		playerDetails.youTubeLink = youTubeLink;

		// save the entry in database
		await playerDetails.save();

		// get updated player
		playerDetails = await Player.find({ playerId: playerId });

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Profile Updated Successfully",
			data: playerDetails,
		});

	} catch(error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}