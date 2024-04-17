// Import the Required Modules
import { connectDB } from "@/database/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Connect to Database
connectDB();

// Login API
export const POST = async (request: NextRequest) => {
	try {
		// fetch data from request body
		const body = await request.json();
		const { userName, password } = body;

		// validation of fetched data
		if(!userName || !password) {
			return NextResponse.json({
				status: 400,
				success: false,
				message: "Please fill all the fields",
			});
		}

		// check user is already exist or not
		const user = await User.findOne({ userName });

		if(!user) {
			return NextResponse.json({
				status: 404,
				success: false,
				mesagge: "User does not registered, please sign up first!",
			});
		}

		// verify password
		const validPassword = await bcryptjs.compare(password, user.password);

		// if password is not valid
		if(!validPassword) {
			return NextResponse.json({
				status: 403,
				success: false,
				message: "Check your credentials",
			});
		}

		// creating payload
		const tokenData = {
			id: user._id,
		};

		// check if JWT_SECRET exists in .env file, otherwise throw an error
		if (!process.env.JWT_SECRET) {
			console.error("JWT_SECRET environment variable is not defined.");
			process.exit(1);
		}

		// generate token
		const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

		// creating a response 
		const response = NextResponse.json({
			status: 200,
			success: true,
			message: "Login successfully",
		});

		// adding cookie in response
		response.cookies.set("token", token, { httpOnly: true });

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