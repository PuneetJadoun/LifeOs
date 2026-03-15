import { useState } from "react";
import { signupUser } from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setError("");
    setLoading(true);

    try {
      await signupUser({ name, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Signup</h2>

        <div className="signup-field">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="signup-field">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="signup-field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="signup-error">{error}</p>}

        <div className="signup-row">
          <Link to="/login" className="signup-link">
            Already have an account? Login
          </Link>
          <button
            className="signup-button"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
}