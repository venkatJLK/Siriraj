import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Layout,
  Menu,
  Typography,
  theme,
} from "antd";

const { Header, Sider, Content } = Layout;

const PatientLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const userMenu = (
    <Menu
      items={[
        { key: "1", label: "Profile", icon: <UserOutlined /> },
        { key: "2", label: "Settings", icon: <UploadOutlined /> },
        { key: "3", label: "Logout", icon: <VideoCameraOutlined /> },
      ]}
    />
  );

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh", backgroundColor: "#172947" }}
      >
        <div className="demo-logo-vertical" />
        <img
          src={
            collapsed
              ? "../../src/assets/sidebarsmall.png"
              : "../../src/assets/sidebarlogo.png"
          }
          alt="Logo"
          width={"100%"}
          height={60}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            marginTop: 50,
            backgroundColor: "#172947",
            color: "#fff",
          }}
          items={[
            { key: "1", icon: <UserOutlined />, label: "Overview" },
            { key: "2", icon: <VideoCameraOutlined />, label: "Patients" },
            { key: "3", icon: <UploadOutlined />, label: "Appointments" },
          ]}
        />
      </Sider>
      <Layout style={{ flex: 1 }}>
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Badge count={3}>
              <BellOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
            </Badge>

            <Dropdown overlay={userMenu} placement="bottomRight">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "8px",
                }}
              >
                <Avatar
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  size="large"
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography.Text strong style={{ fontSize: "14px" }}>
                    Jane Paul
                  </Typography.Text>
                  <Typography.Text
                    type="secondary"
                    style={{ fontSize: "12px" }}
                  >
                    Doctor
                  </Typography.Text>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default PatientLayout;
