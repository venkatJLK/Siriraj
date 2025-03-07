import React from "react";
import styles from "./ResetPasswordPage.module.css";
import resetpassword from "../assets/resetpassword.png";
import { Input, Button } from "antd";

export default function ResetPasswordPage() {
  return (
    <div className={styles.resetPasswordContainer}>
      {/* Left Section - Image */}
      <div className={styles.card}>
        <img
          src={resetpassword}
          alt="Reset Password Illustration"
          className={styles.image}
        />
      </div>

      {/* Right Section - Form */}
      <div className={styles.formContainer}>
        <div>
          <h2 className={styles.heading}>Forgot Password</h2>
          <h5 className={styles.subHeading}>
            Please Enter Your Email to Reset Password
          </h5>
        </div>

        <form className={styles.form}>
          {/* Email Input */}
          <Input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
            required
          />

          {/* Reset Password Button */}
          <Button type="primary" className={styles.button}>
            Reset Password
          </Button>

          {/* Login Link */}
          <p className={styles.loginText}>
            Already have an account? <a href="/login" className={styles.loginLink}>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
