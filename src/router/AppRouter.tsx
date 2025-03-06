import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SignupPage from "../pages/SignupPage";

const AppRouter = (): React.JSX.Element => {
  return (
  
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
  
  );
};

export default AppRouter;