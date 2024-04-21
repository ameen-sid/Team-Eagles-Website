// Import the Required Modules
import mongoose from "mongoose";

// Function to connect to the Database
export const connectDB = async () => {
	try {
		// check if MONGODB_URL exists in .env file, otherwise throw an error
		if (!process.env.MONGODB_URI) {
			console.error("MONGODB_URI environment variable is not defined.");
			process.exit(1);
		}

		// ###   Connecting to the Database   ###
		mongoose.connect(process.env.MONGODB_URI);

		// ###   MongoDB Connection Events   ###
		const connection = mongoose.connection;

		connection.on('connected', () => {
			console.log("Database Connected");
		});

		connection.on('error', (err) => {
			console.error("MongoDB connection error: " + err);
			process.exit(1);
		});

		// Close the MongoDB connection when Node.js process exits
		process.on('SIGINT', async () => {
			await mongoose.connection.close();
			console.log("MongoDB connection closed due to Node.js process termination");
			process.exit(0);
		});

	} catch (error:any) {
		console.error("Error connecting to database: ");
		console.error(error);
		process.exit(1);
	}
}