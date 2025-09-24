import express from "express";
import login from "../controllers/auth/login.js";
import signup from "../controllers/auth/signup.js";
import logout from "../controllers/auth/logout.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signup);
authRoutes.post("/logout", logout);

export default authRoutes;
