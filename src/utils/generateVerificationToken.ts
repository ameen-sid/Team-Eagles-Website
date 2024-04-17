// Import the Required Modules
import jwt from "jsonwebtoken";

// Function to generate token with unique userId
export const generateToken = async (userId:any) => {
	try {
		// check if JWT_SECRET exists in .env file, otherwise throw an error
		if (!process.env.JWT_SECRET) {
			console.error("JWT_SECRET environment variable is not defined.");
			process.exit(1);
		}
		
		// return token
		return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
	} catch (error:any) {
		throw new Error(error.message);
	}
}