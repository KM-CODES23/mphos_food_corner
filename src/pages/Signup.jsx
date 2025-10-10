import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 🔗 Connect to your ASP.NET Core backend
      const response = await axios.post(
        "https://localhost:7246/api/users/register", // change to your actual backend URL
        formData
      );

      if (response.status === 201 || response.status === 200) {
        alert("✅ Account created successfully!");
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
        window.location.reload(); // update navbar
      }
    } catch (err) {
      console.error("Signup failed:", err);
      if (err.response?.status === 400) {
        setError("⚠️ Email already exists or invalid data.");
      } else {
        setError("❌ Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (min 8 characters)"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
          />

          {error && <p className="error-text">{error}</p>}

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
