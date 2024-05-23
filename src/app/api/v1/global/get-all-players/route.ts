// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to Database
connectDB();

// Get All Players API
export const POST = async (request: NextRequest) => {
	try {
		// fetch all players from database
		const allPlayers = await Player.find({});

		// check players exists or not
		if (!allPlayers) {
			return NextResponse.json({
				status: 404,
				success: false,
				message: "Players not found!",
			});
		}

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "All Players Fetched Successfully",
			data: allPlayers,
		});
			
	} catch(error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}