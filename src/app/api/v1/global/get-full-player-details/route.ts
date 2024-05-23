// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to Database
connectDB();

// Get Full Player Details API 
export const POST = async (request: NextRequest) => {
	try {
		// fatch playerName from request body
		const body = await request.json();
		const { playername } = body;

		// check playerName is present or not
		if (!playername) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: `PlayerName ${playername} is not found!`,
			});
		}

		// find player details by playerName
		const playerDetails = await Player.findOne({ playerName: playername });

		if (!playerDetails) {
			return NextResponse.json({
				status: 401,
				success: false,
				message: `Could not find player with name: ${playername}`,
			});
		}

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Player Details Retrieved Successfully!",
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