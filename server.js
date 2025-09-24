//importing dependencies
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

//importing functions
import connectToDB from "./data/db.js";
import authRoutes from "./routes/auth.routes.js";

//creating the app
const app = express();

const PORT = process.env.PORT || 5000;

//using the dependencies
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://young-sam-furniture-workshop.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors()); // enable preflight for all routes

//using the functions
app.use("/api/v1/auth", authRoutes);

//listening to the app
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
