// Import the Required Modules
import nodemailer from "nodemailer";
import User from "@/models/userModel";
import { generateToken } from "./tokenGenerator";

// interface of sendEmail Props
interface sendEmailProps {
	email: string;
	emailType: string;
	userId: any;
}

// Function to Send Email
export const sendEmail = async ({ email, emailType, userId }: sendEmailProps) => {
	try {
		// generating token with unique userId
		const token = await generateToken(userId);

		// creating transporter
		const transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			auth: {
			  user: process.env.MAIL_USER,	// 🔥❌
			  pass: process.env.MAIL_PASS,	// 🔥❌
			}
		});

		// create mail options
		let mailOptions = {};

		// checking emailType
		if( emailType === "VERIFY" ) {
			const updatedUser = await User.findByIdAndUpdate(userId, {
				$set: {
					verifyEmailToken: token,
					verifyEmailTokenExpiry: Date.now() + 7200000, // 2 Hours
				}
			});

			// create mail options
			mailOptions = {
				from: process.env.DEFAULT_MAIL,
				to: process.env.GRAND_ADMIN_MAIL,
				subject: "Verify Your Email",
				html: `<p>Click <a href="${process.env.DOMAIN}/verify-email?token=${token}">here</a> to "Verify your email" or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/verify-email?token=${token}</p>`,
			};
		} else if( emailType === "RESET" ) {
			const updatedUser = await User.findByIdAndUpdate(userId, {
				$set: {
					forgotPasswordToken: token,
					forgotPasswordTokenExpiry: Date.now() + 3600000, // 1 Hour
				}
			});

			// create mail options
			mailOptions = {
				from: process.env.DEFAULT_MAIL,
				to: email,
				subject: "Reset Your Password",
				html: `<p>Click <a href="${process.env.DOMAIN}/reset-password?token=${token}">here</a> to "Reset your password" or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/reset-password?token=${token}</p>`,
			};
		}

		// send mail
		const mailResponse = await transporter.sendMail(mailOptions);

		// return a response
		return mailResponse;

	} catch (error:any) {
		throw new Error(error.message);
	}
}