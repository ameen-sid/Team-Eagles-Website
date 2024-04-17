// Import the Required Modules
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
	playerName: {
		type: String,
		required: [true, "Please provide a playerName"],
		trim: true,
		unique: true,
	},
	playerId: {
		type: String,
		required: [true, "Please provide a playerId"],
		trim: true,
		unique: true,
	},
	role: {
		type: String,
		required: true,
		enum: ["IGL", "Assaulter", "Supporter"],
	},
	matchPlayed: {
		type: Number,
		required: [true, "Please provide a matchPlayed"],
	},
	assists: {
		type: Number,
		required: [true, "Please provide a assists"],
	},
	damage: {
		type: Number,
		required: [true, "Please provide a damage"],
	},
	frags: {
		type: Number,
		required: [true, "Please provide a frags"],
	},
	chickens: {
		type: Number,
		required: [true, "Please provide a chickens"],
	},
	realName: {
		type: String,
		required: [true, "Please provide a realName"],
		trim: true,
	},
	age: {
		type: Number,
		required: [true, "Please provide a age"],
	},
	email: {
		type: String,
		required: [true, "Please provide a email"],
		trim: true,
		unique: true,
	},
	image: {
		type: String,
	},
	instagramLink: {
		type: String,
		trim: true,
		unique: true,
	},
	facebookLink: {
		type: String,
		trim: true,
		unique: true,
	},
	xLink: {
		type: String,
		trim: true,
		unique: true,
	},
});

const Player = mongoose.models.players || mongoose.model("players", playerSchema);

// Export the Model
export default Player;