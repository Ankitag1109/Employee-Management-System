import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    contact: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    department: {
      type: String,
      enum: ["HR", "IT"],
      required: true,
    },
    designation: {
      type: String,
      enum: ["Manager", "Developer"],
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
