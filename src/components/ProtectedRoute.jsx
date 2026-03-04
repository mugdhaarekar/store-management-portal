import { Navigate } from "react-router-dom";
import { rolePermissions } from "../config/roles";
import { auth } from "../firebase/firebaseConfig";

export default function ProtectedRoute({ children, path }) {
  const role = localStorage.getItem("role");

  if (!auth.currentUser) {
    return <Navigate to="/" replace />;
  }

  if (!rolePermissions[role]?.includes(path)) {
    return <Navigate to="/products" />;
  }

  return children;
}