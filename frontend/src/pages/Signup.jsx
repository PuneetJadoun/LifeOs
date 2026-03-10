import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/auth.service.js";
import "./Signup.css";

export default function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const data = await signup({ name, email, password });
      setSuccess(data?.message || "Account created. Please login.");
      setTimeout(() => navigate("/login"), 600);
    } catch (err) {
      setError(err?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Signup</h1>
        <form onSubmit={onSubmit}>
          <div className="signup-field">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              autoComplete="name"
              required
            />
          </div>
          <div className="signup-field">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="signup-field">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="signup-row">
            <button
              className="signup-button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create account"}
            </button>
            <Link className="signup-link" to="/login">
              Back to login
            </Link>
          </div>
          {error ? <div className="signup-error">{error}</div> : null}
          {success ? <div className="signup-success">{success}</div> : null}
        </form>
      </div>
    </div>
  );
}

