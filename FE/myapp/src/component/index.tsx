import {
  DatabaseOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BreadcrumbComponent from "src/component/layout/breadcrumb";
import FooterComponent from "src/component/layout/footer";
import HeaderComponent from "src/component/layout/header";
import LogoComponent from "src/component/layout/logo";
import NotFound from "src/pages/404";
import Dashboard from "src/pages/dashboard/index";
import User from "src/pages/users/index";

import "./index.css";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <a href="/" rel="noopener noreferrer">
      Dashboard
    </a>,
    "/",
    <DatabaseOutlined />
  ),
  getItem(
    <a href="/user" rel="noopener noreferrer">
      User
    </a>,
    "/user",
    <UserOutlined />
  ),
  getItem("Post", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "7"),
  ]),
  getItem("Files", "8", <FileOutlined />),
  getItem("Auth Pages", "sub3", <UserOutlined />, [
    getItem("Login", "9"),
    getItem("Sign Up", "10"),
    getItem("Sign Up", "11"),
    getItem("Lock", "12"),
    getItem("Forgot Password", "13"),
    getItem("Security Code", "14"),
    getItem("New Password", "15"),
  ]),
];

const LayoutComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(window.location.pathname);
  
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Layout id="components-layout-demo-side" style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <LogoComponent />
        <Menu
          onClick={onClick}
          theme="dark"
          defaultSelectedKeys={[current]}
          mode="inline"
          items={items}
          selectedKeys={[current]}
        />
      </Sider>
      <Layout className="site-layout">
        <HeaderComponent />
        <Content style={{ margin: "0 16px" }}>
          <BreadcrumbComponent />
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Router>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/user">
                  <User />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
