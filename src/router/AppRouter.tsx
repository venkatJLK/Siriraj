import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SignupPage from "../pages/SignupPage";
import PatientLayout from "../components/patientLayout/PatientLayout";
import LoginPage from "../pages/LoginPage";
import OverViewContainer from "../components/overview/OverViewContainer";
import PatientContainer from "../components/patient/PatientContainer";
import PatientDetails from "../components/patient/PatientDetails";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return localStorage.getItem("isAuthenticated") === "true" ? (
    children
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
        path="/"
        element={
          <PrivateRoute>
            <PatientLayout />
          </PrivateRoute>
        }
      >
        <Route path="overview" element={<OverViewContainer />} />
        <Route path="patients" element={<PatientContainer />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="*" element={<Navigate to="/overview" />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
