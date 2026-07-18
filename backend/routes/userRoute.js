import express from "express";
import { Register,Login,Logout } from "../controllers/userController.js"; // Adjust path to your controller

const router = express.Router();

// Define a POST route for registration
router.post("/register", Register);
router.post("/login",Login);
router.get("/logout", Logout);

export default router;