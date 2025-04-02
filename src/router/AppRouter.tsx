import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SignupPage from "../pages/SignupPage";
import PatientLayout from "../components/patientLayout/PatientLayout";
import LoginPage from "../pages/LoginPage";

const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  return localStorage.getItem("isAuthenticated") === "true" ? (
    element
  ) : (
    <Navigate to="/login" />
  );
};

const AppRouter = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route
        path="/patient"
        element={<PrivateRoute element={<PatientLayout />} />}
      />
    </Routes>
  );
};

export default AppRouter;
