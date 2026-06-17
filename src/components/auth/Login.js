import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config"; // Path to your backend API URL config
import { useAuth } from "../../context/AuthContext"; // Path to global authentication state
import "./auth.css"; // Ensure this file sits in the exact same folder as this component!

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Local state for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for handling messages, validation errors, and loading animations
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    
    // Clear previous feedback/errors before initiating new validation checks
    setErrors({});
    setMessage("");

    // Client-side validation checks
    let newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    // If there are validation errors, stop execution and show errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Pass client side check, now set loading state to true
    setLoading(true);

    try {
      // Sending network request to Laravel Backend API
      const result = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await result.json();

      // Handle custom API errors or failed responses
      if (!result.ok || !data.status) {
        setErrors({
          api: data.message || "Invalid email or password",
        });
        setLoading(false);
        return;
      }

      // Extract token and user data from the API response
      const token = data.data.token;
      const user = data.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      await login(token);

      setMessage("Login successful!");
      setEmail("");
      setPassword("");

      // Redirect user to homepage after a short delay
      setTimeout(() => {
        navigate("/");
      }, 800);

    } catch (error) {
      setErrors({
        api: "Server error. Please try again later.",
      });
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="auth-card bg-white p-4 p-sm-5 rounded-4 shadow-sm">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Welcome Back</h2>
        <p className="text-muted">Log in to your PW account</p>
      </div>

      {/* Conditional rendering for success and API error messages */}
      {message && <div className="alert alert-success">{message}</div>}
      {errors.api && <div className="alert alert-danger">{errors.api}</div>}

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-3">
          <label className="form-label fw-medium text-secondary">Email Address</label>
          <input
            type="email"
            className={`form-control auth-input ${errors.email ? 'is-invalid' : ''}`}
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors(prev => ({ ...prev, email: null }));
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors(prev => ({ ...prev, password: null }));
            }}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          className="btn btn-primary w-100 auth-submit-btn fw-semibold py-2"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="mb-0 text-muted">
          Don't have an account? <Link to="/register" className="auth-link fw-semibold">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;