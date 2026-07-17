// Fixed Register Controller
import bcryptjs from "bcryptjs";
import User from "../models/userSchema.js";

export const Register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                message: "All fields are required", // Fixed spelling
                success: false
            });
        }
        
        // Fixed: findOne requires an object query filter
        const user = await User.findOne({ email }); 
        if (user) {
            return res.status(401).json({
                message: "User already exists",
                success: false // Fixed spelling
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 16);

        // Fixed: map the hashed password variable into the "password" schema key
        await User.create({
            name,
            username,
            email,
            password: hashedPassword 
        });

        return res.status(201).json({
            message: "Account created successfully", // Fixed spelling
            success: true
        });
    }
    catch (e) {
        console.log(e); // Fixed variable from error -> e
        return res.status(500).json({ message: "Server error", success: false });
    }
};