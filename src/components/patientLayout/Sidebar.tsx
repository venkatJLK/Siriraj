import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  AppstoreOutlined,
  UserOutlined,
  CalendarOutlined,
  FileTextOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Overview");

  return (
    <Sidebar collapsed={collapsed} className="custom-sidebar">
      <div className="sidebar-header">
        <img
          src={
            collapsed
              ? "../../src/assets/sidebarsmall.png"
              : "../../src/assets/sidebarlogo.png"
          }
          alt="Logo"
          width={"100%"}
          height={70}
        />

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="collapse-btn"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>

      <Menu>
        <MenuItem
          icon={<AppstoreOutlined />}
          className={selected === "Overview" ? "menu-item-active" : ""}
          onClick={() => setSelected("Overview")}
        >
          {selected === "Overview" && (
            <>
              <span className="active-marker"></span>
              <span className="active-marker-2"></span>
            </>
          )}
          Overview
        </MenuItem>

        <MenuItem
          icon={<UserOutlined />}
          className={selected === "Patients" ? "menu-item-active" : ""}
          onClick={() => setSelected("Patients")}
        >
          {selected === "Patients" && (
            <>
              <span className="active-marker"></span>
              <span className="active-marker-2"></span>
            </>
          )}
          Patients
        </MenuItem>

        <MenuItem
          icon={<CalendarOutlined />}
          className={selected === "Appointments" ? "menu-item-active" : ""}
          onClick={() => setSelected("Appointments")}
        >
          {selected === "Appointments" && (
            <>
              <span className="active-marker"></span>
              <span className="active-marker-2"></span>
            </>
          )}
          Appointments
        </MenuItem>

        <MenuItem
          icon={<FileTextOutlined />}
          className={selected === "Reports" ? "menu-item-active" : ""}
          onClick={() => setSelected("Reports")}
        >
          {selected === "Reports" && (
            <>
              <span className="active-marker"></span>
              <span className="active-marker-2"></span>
            </>
          )}
          Reports
        </MenuItem>

        <MenuItem
          icon={<SettingOutlined />}
          className={selected === "Settings" ? "menu-item-active" : ""}
          onClick={() => setSelected("Settings")}
        >
          {selected === "Settings" && (
            <>
              <span className="active-marker"></span>
              <span className="active-marker-2"></span>
            </>
          )}
          Settings
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
