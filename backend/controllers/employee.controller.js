import Employee from "../models/employee.model.js";
import fs from "fs";

export const createEmployee = async (req, res) => {
  try {
    const { fullName, email, contact, gender, dob, department, designation } =
      req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Employee photo is required" });
    }

    const newEmployee = new Employee({
      fullName,
      email,
      contact,
      gender,
      dob,
      department,
      designation,
      photo: req.file.path,
    });

    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const { search, department, designation, gender } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } },
      ];
    }

    if (department) {
      query.department = department;
    }

    if (designation) {
      query.designation = designation;
    }

    if (gender) {
      query.gender = gender;
    }

    const employees = await Employee.find(query).sort({ createdAt: -1 });

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.photo = req.file.path;
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true },
    );

    if (!updatedEmployee)
      return res.status(404).json({ message: "Employee not found" });

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    if (employee.photo && fs.existsSync(employee.photo)) {
      fs.unlinkSync(employee.photo);
    }

    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
