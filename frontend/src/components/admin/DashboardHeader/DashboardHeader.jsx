import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/admin/login");
  };

  return (
    <header className="admin-header">
      <div className="container">
        <div className="header-content">
          <h2>Admin Dashboard</h2>

          <button className="btn btn-danger" onClick={logout}>
            <>
              <FaSignOutAlt />
              Logout
            </>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
