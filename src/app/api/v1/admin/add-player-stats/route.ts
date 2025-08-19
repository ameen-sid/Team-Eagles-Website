// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to Database
connectDB();

// Add Player Stats API
export const PUT = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { matches, assists, damage, frags, chickens, playerId } = body;

		// validation on fetched data
		if (!matches || !assists || !damage || !frags || !chickens || !playerId) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "All fields are required!",
			});
		}

		// check player is exist or not
		const existPlayer = await Player.findOne({ playerId });
		if (!existPlayer) {
			return NextResponse.json({
				status: 401,
				success: false,
				message: "Player is not registered!",
			});
		}

		// appending stats
		const newStats = {
			matches: existPlayer.matchPlayed + matches,
			assists: existPlayer.assists + assists,
			damage: existPlayer.damage + damage,
			frags: existPlayer.frags + frags,
			chickens: existPlayer.chickens + chickens,
		};

		// update the player's stats in database
		const updatedPlayer = await Player.findOneAndUpdate(
			{ playerId: playerId },
			{
				matchPlayed: newStats.matches,
				assists: newStats.assists,
				damage: newStats.damage,
				frags: newStats.frags,
				chickens: newStats.chickens,
			},
			{ new: true }
		);

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Added Stats Successfully",
			data: updatedPlayer,
		});
	} catch(error: any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}