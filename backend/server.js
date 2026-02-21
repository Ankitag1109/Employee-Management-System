import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import employeeRoutes from "./routes/employee.routes.js";

dotenv.config();
connectDB();

const app = express();

const UPLOADS_FOLDER = "./uploads";
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER);
}

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
