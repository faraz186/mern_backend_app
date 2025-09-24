import { userModel } from "../model/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Required fields are missing",
        status: false,
      });
      return;
    }

    const getData = await userModel.findOne({ email });

    if (!getData) {
      res.json({
        message: "Invalid credentials",
      });
      return;
    }

    const comparePassword = await bcrypt.compare(password, getData.password);

    if (!comparePassword) {
      res.json({
        message: "Invalid credentials",
      });
      return;
    }

    var token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.json({
      message: "Login successfully..",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
