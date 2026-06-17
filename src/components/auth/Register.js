import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config"; // Path to your backend API URL config
import { useAuth } from "../../context/AuthContext"; // Path to global authentication state
import "./auth.css";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Local state variables for tracking signup input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for handling messages, validation errors, and loading status
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload during form submission
    
    setErrors({});
    setMessage("");
    setLoading(true);

    let newErrors = {};

    // Input validations
    if (!name.trim()) newErrors.name = "Name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Stop execution if client-side validation errors exist
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // API call to backend register route
      const result = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await result.json();

      // Handle backend validation or authentication response errors
      if (!result.ok || !data.status) {
        setErrors({
          api: data.message || "Registration failed",
        });
        setLoading(false);
        return;
      }

      const token = data.data.token;
      const user = data.data.user;

      // Auto-login user if token exists upon successful registration
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        login(user);
      }

      setMessage("User Registered Successfully!");
      setName("");
      setEmail("");
      setPassword("");

      // Redirect user to home dashboard
      setTimeout(() => {
        navigate("/");
      }, 1200);

    } catch (error) {
      setErrors({
        api: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card bg-white p-4 p-sm-5 rounded-4 shadow-sm">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Create Account</h2>
        <p className="text-muted">Join the platform to start learning</p>
      </div>

      {message && <div className="alert alert-success">{message}</div>}
      {errors.api && <div className="alert alert-danger">{errors.api}</div>}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label className="form-label fw-medium text-secondary">Full Name</label>
          <input
            type="text"
            className={`form-control auth-input ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="form-label fw-medium text-secondary">Email Address</label>
          <input
            type="email"
            className={`form-control auth-input ${errors.email ? 'is-invalid' : ''}`}
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="form-label fw-medium text-secondary">Password</label>
          <input
            type="password"
            className={`form-control auth-input ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        {/* Register Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100 auth-submit-btn fw-semibold py-2"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="mb-0 text-muted">
          Already have an account? <Link to="/login" className="auth-link fw-semibold">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;