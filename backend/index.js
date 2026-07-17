import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";

// Automatically loads the standard .env file from the root folder
dotenv.config();
console.log("Your URI is:", process.env.MONGODB_URI);
databaseConnection();

const app = express();
const PORT = process.env.PORT || 5000; // Fallback to 5000 if PORT isn't read

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Twitter Clone API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is sprinting on port ${PORT}`);
});