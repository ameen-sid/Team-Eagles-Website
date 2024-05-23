// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to Database
connectDB();

// Add Player API
export const POST = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { playerName, playerId, role, matchPlayed, assists, damage, frags, chickens, realName, age, email, instagramLink, facebookLink, youTubeLink } = body;

		// validation on fetched data
		if( !playerName || !playerId || !role || !matchPlayed || !assists || !damage || !frags || !chickens || !realName || !age || !email || !instagramLink || !facebookLink || !youTubeLink ) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Please fill all the fields",
			});
		}

		// check player already exist or not with playerName
		const existPlayer = await Player.findOne({ playerName });

		if (existPlayer) {
			return NextResponse.json({
				status: 409,
				success: false,
				message: "Player is Already Registered!",
			});
		}

		// create entry in database
		const player = await Player.create({
			playerName, 
			playerId, 
			role,
			matchPlayed, 
			assists, 
			damage, 
			frags,
			chickens, 
			realName, 
			age, 
			email,
			instagramLink, 
			facebookLink, 
			youTubeLink,
			image: `https://api.dicebear.com/7.x/initials/svg?seed=${playerName}`,
		});

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Player Registered Successfully",
			data: player,
		});

	} catch(error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}