import { BellOutlined, DownOutlined } from "@ant-design/icons";
import { Badge, Avatar, Dropdown, Menu } from "antd";

const HeaderComponent = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="header-container">
      <h2 className="header-title">Patients</h2>

      <div className="header-right">
        <Badge count={3} size="small" offset={[-2, 5]}>
          <BellOutlined className="notification-icon" />
        </Badge>

        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="user-profile">
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
            <div className="user-info">
              <span className="user-name">Jane Paul</span>
              <span className="user-role">Doctor</span>
            </div>
            <DownOutlined className="dropdown-icon" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderComponent;
