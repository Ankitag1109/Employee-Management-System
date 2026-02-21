import express from "express";
import multer from "multer";
import path from "path";
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employee.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("photo"), createEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", upload.single("photo"), updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
