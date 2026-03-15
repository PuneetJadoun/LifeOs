import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/token";
import "./Dashboard.css";

export default function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Dashboard</h2>
          <button className="dashboard-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <p className="dashboard-text">
          Welcome to LifeOS! You are logged in.
        </p>
      </div>
    </div>
  );
}
