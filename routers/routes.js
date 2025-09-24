import express from "express";
import { signupController } from "../controller/signupController.js";
import { loginController } from "../controller/loginController.js";
import { getAllUsersController } from "../controller/getAllUsersController.js";
import { tokenVerify } from "../middleware/tokenVerify.js";
import { verify_otp_Controller } from "../controller/verifyotpController.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/allusers", tokenVerify, getAllUsersController);
router.post("/verify-otp", verify_otp_Controller);

export default router;
