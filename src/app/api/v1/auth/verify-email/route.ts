// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to Database
connectDB();

// Verify Email API
export const POST = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { token, passcode } = body;

		// validate passcode
		if(!passcode) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Please provide passcode",
			});
		}

		// check passcode is correct or not
		if(passcode != process.env.VERIFICATION_PASSCODE) {
			return NextResponse.json({
				status: 401,
				success: false,
				message: "Passcode is invalid",
			});
		}

		// find user in database and check token expiry
		const user = await User.findOne({
			verifyEmailToken: token,
			verifyEmailTokenExpiry: { $gt: Date.now() }
		});

		// return a response, if user is not exist
		if(!user) {
			return NextResponse.json({
				status: 401,
				success: false,
				message: "Invalid token",
			});
		}

		// mark user as verified
		user.isVerified = true;

		// mark undefined token and expiry fields
		user.verifyEmailToken = undefined;
		user.verifyEmailTokenExpiry = undefined;

		// save the user
		await user.save();

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Email verified successfully",
		});
	} catch (error: any) {
		return NextResponse.json({
			status: 500,
			success: false,
			message: error.message,
		});
	}
}