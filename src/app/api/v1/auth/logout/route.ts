// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import { NextRequest, NextResponse } from "next/server";

// Connect to Database
connectDB();

// Logout API
export const POST = async (request: NextRequest) => {
	try {
		// create a response
		const response = NextResponse.json({
			status: 200,
			success: true,
			message: "Logout successfully",
		});

		// removing cookies in response
		response.cookies.set("token", "", { 
			httpOnly: true, 
			maxAge: 0, 
		});

		// return a response
		return response;

	} catch (error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}