import { Navigate } from "react-router-dom";
import { rolePermissions } from "../config/roles";

export default function ProtectedRoute({ children, path,role }) {
  if(!role){
    return <Navigate to="/" replace />;
  }

  if (!rolePermissions[role]?.includes(path)) {
    return <Navigate to="/products" />;
  }

  return children;
}