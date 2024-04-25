// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

// Connect to Database
connectDB();

// Forgot Password API
export const POST = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { token, newPassword, confirmNewPassword } = body;

		// validate fetched data
		if(!newPassword || !confirmNewPassword) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Please fill all the fields",
			});
		}

		// check new password and confirm new password matched or not
		if(newPassword !== confirmNewPassword) {
			return NextResponse.json({
				status: 500,
				success: false,
				message: "New password and Confirm new password not matched.",
			});
		}

		// find user in database and check token expiry
		const user = await User.findOne({
			forgotPasswordToken: token,
			forgotPasswordTokenExpiry: { $gt: Date.now() }
		});

		// return a response, if user is not exist
		if(!user) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Invalid token",
			});
		}
		
		// hash the new password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(newPassword, salt);

		// save password
		user.password = hashedPassword;

		// save user
		await user.save();

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "Password Update Successfully",
		});

	} catch (error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			message: error.message,
		});
	}
}