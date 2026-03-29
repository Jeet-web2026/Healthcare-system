import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("healthCare_auth_token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
