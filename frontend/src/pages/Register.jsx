import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css";
import idmsLogo from "../assetss/idms_logo.svg";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { username, email, password, confirmPassword } = formData;

    // Frontend validation
    if (!username || !email || !password || !confirmPassword) {
      return setError("All fields are required");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:8082/api/auth/register", {
        username,
        email,
        password,
      });

      alert(res.data.message || "Registered Successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-page">
        <div className="register-card">
          {/* Logo */}
          <img src={idmsLogo} alt="IDMS Logo" className="logo" />

          <h2 className="title">Create Account</h2>
          <p className="subtitle">Join the HR Admin Panel</p>

          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Show Password
              </label>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>

            <p className="extra-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
