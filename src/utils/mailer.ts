// Import the Required Modules
import User from "@/models/userModel";
import nodemailer from "nodemailer";
import { generateToken } from "./generateVerificationToken";

// function to send email
export const sendEmail = async ({ email, emailType, userId }:any) => {
	try {
		// generating token with unique userId
		const token = await generateToken(userId);

		// creating transporter
		const transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: 2525,
			auth: {
			  user: process.env.MAIL_USER,	// 🔥❌
			  pass: process.env.MAIL_PASS,	// 🔥❌
			}
		});

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
				to: process.env.DEFAULT_MAIL,
				subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
				html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${token}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"} or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/verifyemail?token=${token}</p>`,
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
				subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
				html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${token}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"} or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/verifyemail?token=${token}</p>`,
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