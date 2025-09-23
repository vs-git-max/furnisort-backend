import express from "express";
import dotenv from "dotenv";
import connectToDB from "./data/db.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
