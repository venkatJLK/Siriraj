// import React from "react";
// import styles from "./ResetPasswordPage.module.css";
// import resetpassword from "../assets/resetpassword.png";
// import { Input, Button } from "antd";

// export default function ResetPasswordPage() {
//   return (
//     <div className={styles.resetPasswordContainer}>
//       {/* Left Section - Image */}
//       <div className={styles.card}>
//         <img
//           src={resetpassword}
//           alt="Reset Password Illustration"
//           className={styles.image}
//         />
//       </div>

//       {/* Right Section - Form */}
//       <div className={styles.formContainer}>
//         <div>
//           <h2 className={styles.heading}>Forgot Password</h2>
//           <h5 className={styles.subHeading}>
//             Please Enter Your Email to Reset Password
//           </h5>
//         </div>

//         <form className={styles.form}>
//           {/* Email Input */}
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             className={styles.input}
//             required
//           />

//           {/* Reset Password Button */}
//           <Button type="primary" className={styles.button}>
//             Reset Password
//           </Button>

//           {/* Login Link */}
//           <p className={styles.loginText}>
//             Already have an account? <a href="/login" className={styles.loginLink}>Login</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Button, Input, Checkbox, Form, Row, Col, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import resetpassword from "../assets/resetpassword.png";

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("Admin");

  const roles = ["Admin", "Doctor", "Patient", "Staff"];

  return (
    <Row className="login-container" style={{ height: "100vh" }}>
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // background: "#f0f2f5",
          padding: 20,
        }}
      >
        <img
          src={resetpassword}
          alt="Medical Team"
          style={{ maxWidth: "100%" }}
        />
      </Col>
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
        }}
      >
        <Title level={3}>Forgot Password</Title>
        <Text>Please Enter your mail id to change password</Text>

        <Form layout="vertical" style={{ width: "100%", maxWidth: 400 }}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email Id"
              style={{ minHeight: 40 }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block>
              Continue
            </Button>
          </Form.Item>
        </Form>
        <Text>
          Already have an account? <a href="/login">Login</a>
        </Text>
      </Col>
    </Row>
  );
};

export default LoginPage;
