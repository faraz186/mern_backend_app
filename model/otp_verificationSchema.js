import mongoose from "mongoose";

const otp_verification_schema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    otp_code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const otp_verification_model = mongoose.model(
  "otp-codes",
  otp_verification_schema
);

// data association
