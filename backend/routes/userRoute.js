import express from "express";
import { Register,Login } from "../controllers/userController.js"; // Adjust path to your controller

const router = express.Router();

// Define a POST route for registration
router.post("/register", Register);
router.post("/login",Login);

export default router;