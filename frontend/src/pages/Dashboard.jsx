import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service.js";
import { useAuth } from "../store/auth.store.jsx";
import { clearToken } from "../utils/token.js";
import "./Dashboard.css";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, setUser, setToken } = useAuth();

  function onLogout() {
    logout();
    clearToken();
    setToken(null);
    setUser(null);
    navigate("/login", { replace: true });
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <button className="dashboard-button" onClick={onLogout}>
            Logout
          </button>
        </div>
        <p className="dashboard-text">
          You are authenticated. Next step: call protected APIs with the Bearer
          token.
        </p>
        <div className="dashboard-user-card">
          <div className="dashboard-user-label">User (from login response)</div>
          <pre className="dashboard-user-pre">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

