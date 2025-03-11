import React, { useState } from "react";
import { Button, Input, Checkbox, Form, Row, Col, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

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
          background: "#f0f2f5",
          padding: 20,
        }}
      >
        <Title level={2}>MEDLYVES</Title>
        <img
          src="../../src/assets/g8.svg"
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
        <Title level={3}>Welcome Back!</Title>
        <Text>Please select your role</Text>
        <Row gutter={45}>
          {roles.map((role) => (
            <Col key={role}>
              <Button
                type={selectedRole === role ? "primary" : "default"}
                onClick={() => setSelectedRole(role)}
              >
                {role}
              </Button>
            </Col>
          ))}
        </Row>
        <Title level={4}>Sign in</Title>
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
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              style={{ minHeight: 40 }}
            />
          </Form.Item>
          <Row justify="space-between" align="middle" style={{ width: "100%" }}>
            <Checkbox>Remember me</Checkbox>
            <a href="/reset-password">Forgot Password?</a>
          </Row>
          <Form.Item>
            <Button type="primary" block className="button">
              Login as {selectedRole}
            </Button>
          </Form.Item>
        </Form>
        <Text>
          Don’t have an account? <a href="/signup">Create Account</a>
        </Text>
      </Col>
    </Row>
  );
};

export default LoginPage;
