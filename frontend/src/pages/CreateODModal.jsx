import React, { useState } from "react";
import axios from "axios";
import "../styles/CreateODModal.css";

const CreateODModal = ({ isOpen, onClose, onSaved }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    gender: "",
    dob: "",
    department: "",
    designation: "",
    photo: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.gender ||
      !formData.dob ||
      !formData.department ||
      !formData.designation ||
      !formData.photo
    ) {
      alert("Please fill all fields and upload a photo!");
      return;
    }

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("gender", formData.gender);
    data.append("dob", formData.dob);
    data.append("department", formData.department);
    data.append("designation", formData.designation);
    data.append("photo", formData.photo);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8082/api/employees",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("Employee created successfully!");
      setFormData({
        fullName: "",
        email: "",
        contact: "",
        gender: "",
        dob: "",
        department: "",
        designation: "",
        photo: null,
      });
      if (onSaved) onSaved(res.data);
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to create employee!");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Create OD Request</h3>
          <span className="close-btn" onClick={onClose}>
            ✕
          </span>
        </div>

        <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div>
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Contact *</label>
              <input
                type="text"
                name="contact"
                placeholder="Enter contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Department *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>HR</option>
                <option>IT</option>
              </select>
            </div>

            <div>
              <label>Designation *</label>
              <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Manager</option>
                <option>Developer</option>
              </select>
            </div>

            <div>
              <label>Employee Photo *</label>
              <input type="file" name="photo" onChange={handleChange} />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="save-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateODModal;
