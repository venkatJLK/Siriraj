import React, { useState } from "react";
import { Button, Input, Checkbox, Form, Row, Col, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./AuthPage.module.css";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("Admin");
  const navigate = useNavigate();

  const roles = ["Admin", "Doctor", "Staff"];

  const handleLogin = (values: { email: string; password: string }) => {
    const { email, password } = values;
    if (email === "123" && password === "123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/overview");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <Row className={styles.loginContainer}>
      <Col xs={0} md={12} className={styles.loginLeft}>
        <img
          src="../../src/assets/cms-logo.png"
          alt="CMS Logo"
          className={styles.cmsLogo}
        />
        <img
          src="../../src/assets/login-banner.png"
          alt="Medical Banner"
          className={styles.loginBanner}
        />
      </Col>

      <Col xs={24} md={12} className={styles.loginRight}>
        <Title level={3}>Welcome Back!</Title>
        <Text>Please select your role</Text>
        <Row gutter={16} className={styles.roleSelection}>
          {roles.map((role) => (
            <Col key={role}>
              <Button
                type="primary"
                style={{
                  backgroundColor:
                    selectedRole === role ? "#A28F60" : "transparent",
                  borderColor: "#A28F60",
                  color: selectedRole === role ? "#fff" : "#A28F60",
                }}
                onClick={() => setSelectedRole(role)}
              >
                {role}
              </Button>
            </Col>
          ))}
        </Row>

        <Title level={4}>Sign in</Title>
        <Form
          layout="vertical"
          className={styles.loginForm}
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email Id" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Row justify="space-between" align="middle">
            <Checkbox>Remember me</Checkbox>
            <a href="/reset-password">Forgot Password?</a>
          </Row>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              style={{ backgroundColor: "#A28F60", borderColor: "#A28F60" }}
            >
              Login as {selectedRole}
            </Button>
          </Form.Item>
        </Form>
        {/* <Text>
          Don’t have an account? <a href="/signup">Create Account</a>
        </Text> */}
      </Col>
    </Row>
  );
};

export default LoginPage;
