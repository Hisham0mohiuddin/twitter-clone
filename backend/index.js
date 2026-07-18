import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";

dotenv.config();
console.log("Your URI is:", process.env.MONGODB_URI);
databaseConnection();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 1. MIDDLEWARES FIRST (Pre-processes requests)
// ==========================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Now Express safely parses JSON BEFORE matching routes!
app.use(cookieParser());

// ==========================================
// 2. ROUTES SECOND (Handles incoming API calls)
// ==========================================
app.get("/", (req, res) => {
  res.send("Twitter Clone API is running...");
});

// Moved this to the bottom!
app.use("/api/v1/user", userRoutes);

console.log("Registering tweet routes...");

app.use("/api/v1/tweet", tweetRoute);

app.listen(PORT, () => {
  console.log(`Server is sprinting on port ${PORT}`);
});