import React from "react";
import HeaderComponent from "./Header";
import SidebarComponent from "./Sidebar";
import { Col, Row, Layout } from "antd";

const { Content, Sider, Header } = Layout;

interface PatientLayoutProps {
  children: React.ReactNode;
}

const PatientLayout: React.FC<PatientLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} style={{ background: "#fff" }}>
        <SidebarComponent />
      </Sider>
      <Layout>
        <HeaderComponent />
        <Content
          style={{ margin: "16px", padding: "16px", background: "#fff" }}
        >
          {/* {children} */}
          <h1>test</h1>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PatientLayout;
