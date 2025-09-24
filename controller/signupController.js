import { userModel } from "../model/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { send_verification_email } from "../services/nodemailer_service.js";
import { otp_verification_model } from "../model/otp_verificationSchema.js";

export const signupController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({
        message: "Required Fields are missing!",
        status: false,
      });
    }

    const encryptPassword = await bcrypt.hash(password, 10);

    const userObj = {
      firstName,
      lastName,
      email,
      password: encryptPassword,
    };

    const saveData = await userModel.create(userObj);

    var token = jwt.sign({ firstName, email }, process.env.JWT_SECRET_KEY);

    var generate_code = Math.floor(100000 + Math.random() * 900000);

    await otp_verification_model.create({
      user_id: saveData._id,
      otp_code: generate_code,
    });

    await send_verification_email(email, generate_code, lastName);

    res.status(201).json({
      message: "Registered successfully! Check your Gmail to verify OTP.",
      saveData,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
