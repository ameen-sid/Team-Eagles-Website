// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailSender";
import { hashPassword } from "@/utils/passwordHasher";

// Connect to Database
connectDB();

// Signup API
export const POST = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { userName, email, phoneNumber, password, confirmPassword } = body;

		// validation on fetched data
		if(!userName || !email || !phoneNumber || !password || !confirmPassword) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Please fill all the fields",
			});
		}

		// match password and confirm password
		if(password !== confirmPassword) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Password and Confirm Password does not match",
			});
		}

		// check if user already exists
		const user = await User.findOne({ email });

		if(user) {
			return NextResponse.json({
				status: 409,
				success: false,
				message: "User is already exists",
			});
		}

		// hash the password
		const hashedPassword = hashPassword(password);

		// create entry in database
		const newUser = new User({
			userName,
			email,
			phoneNumber,
			password: hashedPassword,
			image: `https://api.dicebear.com/7.x/initials/svg?seed=${userName}`
		});

		// save the user
		const savedUser = await newUser.save();
		// console.log(savedUser);
		
		// send verification email to user
		await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

		// return a response
		return NextResponse.json({
			status: 200,
			success: true,
			message: "User registered successfully",
			data: savedUser
		});
		
	} catch(error:any) {
		return NextResponse.json({
			status: 500,
			success: false,
			error: error.message,
		});
	}
}