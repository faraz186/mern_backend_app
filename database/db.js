import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  try {
    const MONGODB_URI = process.env.MONGO_DB_URI;

    await mongoose
      .connect(MONGODB_URI)
      .then((res) => {
        console.log("mongodb connected");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
