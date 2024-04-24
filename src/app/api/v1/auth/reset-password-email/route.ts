// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";

// Connect to Database
connectDB();

// Reset Password Email API
export const POST = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { email } = body;

		// validation of fetched data
		if(!email) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Please fill the email field"
			});
		}

		// check user is exist or not
		const user = await User.findOne({ email });

		if(!user) {
			return NextResponse.json({
				status: 404,
				success: false,
				mesagge: "User does not registered, please sign up first!",
			});
		}

		// send email
		sendEmail({ email, emailType:"RESET", userId:user._id });

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Email sent successfully, please check your email!",
		});

	} catch (error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}