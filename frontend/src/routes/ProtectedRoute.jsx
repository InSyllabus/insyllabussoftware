import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Read only the standard token key
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;