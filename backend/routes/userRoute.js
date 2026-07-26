import express from "express";
import { Register,Login,Logout, bookmarks, getMyProfile, getOtherUser, followOrUnfollow } from "../controllers/userController.js"; // Adjust path to your controller
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

// Define a POST route for registration
router.post("/register", Register);
router.post("/login",Login);
router.get("/logout", Logout);
router.put("/bookmark/:id", isAuthenticated, bookmarks);
router.get("/profile/:id",isAuthenticated,getMyProfile)
router.get("/otheruser",isAuthenticated,getOtherUser);
router.post("/follow/:id",isAuthenticated,followOrUnfollow);

export default router;