import { FaSignOutAlt } from "react-icons/fa";
import "./DashboardHeader.css";

const DashboardHeader = ({ activeTab, setActiveTab }) => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <header className="admin-header">
      <div className="container">
        <div className="header-content">
          <h2
            className="dashboard-title"
            onClick={() => setActiveTab("dashboard")}
          >
            Admin Dashboard
          </h2>

          <div className="dashboard-nav">
            <button
              className={`nav-btn ${activeTab === "queries" ? "active" : ""
                }`}
              onClick={() => setActiveTab("queries")}
            >
              Queries
            </button>

            <button
              className={`nav-btn ${activeTab === "jobs" ? "active" : ""
                }`}
              onClick={() => setActiveTab("jobs")}
            >
              Jobs
            </button>

            <button
              className={`nav-btn ${activeTab === "applications"
                  ? "active"
                  : ""
                }`}
              onClick={() =>
                setActiveTab("applications")
              }
            >
              Applications
            </button>
          </div>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;