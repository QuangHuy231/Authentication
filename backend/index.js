import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server started on port ${port}`);
});
