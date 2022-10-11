import { Layout, Menu, Space } from "antd";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const LeftMenu = ({ mode }) => {
    return (
      <Menu mode={"horizontal"}>
        <Menu.Item key="1">
          <Link to="/*">GitHub</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/*">Developers</Link>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <Space>
              <img
                className="brand-font"
                style={{ height: "50px" }}
                src={
                  "https://app-viji.s3.eu-west-2.amazonaws.com/rocket-icon-vector-starter-app.svg"
                }
                alt="logo"
              />
              <Link style={{ marginLeft: "5px" }} to="/">
                Starter App
              </Link>
            </Space>
          </div>
          <LeftMenu mode={"inline"} />
        </Layout.Header>
      </Layout>
    </nav>
  );
};
