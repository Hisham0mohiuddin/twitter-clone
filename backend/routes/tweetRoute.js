console.log("Tweet routes loaded");

import express from "express";
import { isAuthenticated } from "../config/auth.js";
import { createTweet } from "../controllers/tweetController.js";

const router = express.Router();

router.post("/post", isAuthenticated, createTweet);

export default router;