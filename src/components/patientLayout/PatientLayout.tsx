import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellFilled,
  GlobalOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Layout,
  Menu,
  Typography,
  Drawer,
  theme,
} from "antd";
import { useTranslation } from "react-i18next";
import PatientContainer from "../patient/PatientContainer";
import Images from "../common/image/Images";
const { Header, Sider, Content } = Layout;

const PatientLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const languageMenu = (
    <Menu
      onClick={(e) => changeLanguage(e.key)}
      items={[
        { key: "en", label: "English" },
        { key: "th", label: "ไทย" },
      ]}
    />
  );

  const userMenu = (
    <Menu
      items={[
        { key: "1", label: t("sidebar.overview"), icon: <UserOutlined /> },
        { key: "2", label: t("sidebar.patients"), icon: <UploadOutlined /> },
        {
          key: "3",
          label: t("sidebar.appointments"),
          icon: <VideoCameraOutlined />,
        },
      ]}
    />
  );

  const sidebarContent = (
    <div style={{ height: "100vh", backgroundColor: "#172947" }}>
      <div className="demo-logo-vertical" />
      <img
        src={collapsed ? Images.small : Images.large}
        alt="Logo"
        width={"100%"}
        height={60}
        style={{ marginBottom: 20 }}
      />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          marginTop: 20,
          backgroundColor: "#172947",
          color: "#fff",
          width: "100%",
        }}
        items={[
          {
            key: "1",
            icon: (
              <img
                src={Images.inactive_overview}
                alt=""
                height={22}
                width={22}
              />
            ),
            label: t("sidebar.overview"),
            style: { marginBottom: "8%" },
          },
          {
            key: "2",
            icon: (
              <img
                src={Images.inactive_patient}
                alt=""
                height={22}
                width={22}
              />
            ),
            label: t("sidebar.patients"),
            style: { marginBottom: "8%" },
          },
          {
            key: "3",
            icon: (
              <img
                src={Images.inactive_attendance}
                alt=""
                height={22}
                width={22}
              />
            ),
            label: t("sidebar.appointments"),
          },
        ]}
      />
    </div>
  );

  return (
    <Layout style={{ height: "100vh" }}>
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={250}
          style={{
            height: "100vh",
            backgroundColor: "#172947",
            overflow: "hidden",
          }}
        >
          {sidebarContent}
        </Sider>
      )}

      {isMobile && (
        <Drawer
          title=""
          placement="left"
          closable={false}
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={250}
          bodyStyle={{
            padding: 0,
            backgroundColor: "#172947",
          }}
        >
          {sidebarContent}
        </Drawer>
      )}

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
            onClick={() =>
              isMobile ? setDrawerVisible(true) : setCollapsed(!collapsed)
            }
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
            <Dropdown overlay={languageMenu} trigger={["click"]}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "8px",
                  padding: "6px 12px",
                  backgroundColor: "#172947",
                  color: "#fff",
                  borderRadius: "8px",
                }}
              >
                <Typography.Text style={{ color: "#fff" }}>
                  {i18n.language === "en" ? "English" : "ไทย"}
                </Typography.Text>
                <GlobalOutlined style={{ fontSize: "18px" }} />
              </div>
            </Dropdown>
            <Badge count={3}>
              <BellFilled style={{ fontSize: "18px", cursor: "pointer" }} />
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
                <DownOutlined style={{ marginRight: "0px 20px" }} />
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
          <PatientContainer />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PatientLayout;
