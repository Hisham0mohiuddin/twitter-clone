console.log("Tweet routes loaded");

import express from "express";
import { isAuthenticated } from "../config/auth.js";
import { createTweet ,deleteTweet} from "../controllers/tweetController.js";

const router = express.Router();

router.post("/post", isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated,deleteTweet )

export default router;