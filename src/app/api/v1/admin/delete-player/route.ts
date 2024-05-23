// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to Database
connectDB();

// Delete Player API
export const DELETE = async (request: NextRequest) => {
	try {
		// fetch playerName from request body
		const body = await request.json();
		const { playerName } = body;

		// validation on fetched data
		if(!playerName) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "PlayerName not found!",
			});
		}

		// check user is exist or not
		const playerDetails = await Player.findOne({ playerName });

		if (!playerDetails) {
			return NextResponse.json({
				status: 404,
				success: false,
				message: "Player not found!",
			});
		}

		// delete player
		await Player.findOneAndDelete({ playerName: playerName });

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Player Deleted Successfully",
		});
		
	} catch(error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}