import chalk from "chalk"; 
import "dotenv/config";                      
import express from "express";
import cors from "cors";
import connectDb from "./database/db.js";
import userRoute from "./routers/routes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

// call router

app.use("/api", userRoute);

// call database function

app.post("/abc", () => {});

connectDb();

app.get("/", (req, res) => {
  res.json({
    message: "server start",
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    chalk.bgCyan.bold.italic(`server is running on http://localhost:${PORT}`)
  );
});
