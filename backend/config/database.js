import mongoose from "mongoose";

const databaseConnection = () => {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB successfully!");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};

export default databaseConnection;