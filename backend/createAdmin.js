import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/user.model.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingUser = await User.findOne({ email: "admin@example.com" });

    if (existingUser) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("123456", 10);

    await User.create({
      email: "admin@example.com",
      username: "admin",
      password: hashedPassword,
    });

    console.log("Admin user created successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
