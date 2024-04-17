// Import the Required Modules
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: [true, "Please provide a username"],
		unique: true,
		trim: true,	
	},
	email: {
		type: String,
		required: [true, "Please provide a email"],
		unique: true,
		trim: true,
	},
	phoneNumber: {
		type: String,
		required: [true, "Please provide a phone number"],
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
	image: {
		type: String,
		trim: true,
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	forgotPasswordToken: String,
	forgotPasswordTokenExpiry: Date,
	verifyEmailToken: String,
	verifyEmailTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

// Export the Model
export default User;