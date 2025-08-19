// Import the Required Modules
import bcryptjs from "bcryptjs";

// Function to Send Email
export const hashPassword = async (password: any) => {
	try {
		const salt = await bcryptjs.genSalt(10);

		return await bcryptjs.hash(password, salt);
	} catch (error: any) {
		throw new Error(error.message);
	}
}