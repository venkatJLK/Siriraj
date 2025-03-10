import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography, Image } from "antd";
import styles from "./signuppage.module.css";
import signupImage from "../assets/signup.png"; // Corrected image import

const { Title, Text } = Typography;

export default function SignupPage() {
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, event) => {
    setIsFocused((prev) => ({ ...prev, [field]: event.target.value !== "" }));
  };

  return (
    <Row className={styles.container}>
      <Col xs={24} md={12} className={styles.leftPanel}>
        <Title level={2} className={styles.logoTitle} style={{color:"rgb(27, 181, 181)"}}>MEDLYVES</Title>
        <Image src={signupImage} alt="Signup" className={styles.imageWrapper} />
      </Col>

      <Col xs={24} md={12} className={styles.rightPanel}>
        <Title level={2}>Sign up</Title>
        <Text type="secondary">Welcome! Please register to proceed</Text>

        <Form layout="vertical" className={styles.formContainer}>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: "Please enter your first name!" }]}
          >
            <Input
              size="large"
              placeholder="First Name"
              onFocus={() => handleFocus("firstName")}
              onBlur={(e) => handleBlur("firstName", e)}
            />
          </Form.Item>
          
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name!" }]}
          >
            <Input
              size="large"
              placeholder="Last Name"
              onFocus={() => handleFocus("lastName")}
              onBlur={(e) => handleBlur("lastName", e)}
            />
          </Form.Item>
          
          <Form.Item
            name="email"
            rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
          >
            <Input
              size="large"
              placeholder="Email ID"
              onFocus={() => handleFocus("email")}
              onBlur={(e) => handleBlur("email", e)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              onFocus={() => handleFocus("password")}
              onBlur={(e) => handleBlur("password", e)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              block
              className={styles.submitButton}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <Text>
          Already have an account? <a href="/login" className={styles.link}>Login</a>
        </Text>
      </Col>
    </Row>
  );
}
