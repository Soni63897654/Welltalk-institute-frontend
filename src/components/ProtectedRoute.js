import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();
  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted">Verifying Permissions...</p>
      </div>
    );
  }
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;