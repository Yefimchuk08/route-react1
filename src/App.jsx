import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LockOutlined,
  QuestionOutlined,
  HomeOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import About from './components/About'
// import Menu from './components/Menu'
import Privacy from './components/Privacy'
import Home from './components/Home'
import Login from './components/login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:
                <Link to={"/home"}>
                  <HomeOutlined />
                </Link>,
              label: 'Home',
            },
            {
              key: '2',
              icon:
                <Link to={"/about"}>
                  <QuestionOutlined />
                </Link>,
              label: 'About',
            },
            {
              key: '3',
              icon:
                <Link to={"/privacy"}>
                  <LockOutlined />
                </Link>,
              label: 'Privacy',
            },
            {
              key: '4',
              icon:                 
              <Link to={"/login"}>
                <LoginOutlined />
              </Link>,
              label: 'Login',
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header> */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "100vh",
            minWidth: "100vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path='/login' element={<Login/>}></Route>
            <Route path="*" element={<h2>Page not found</h2>} />
            {/* <About/>
              <Privacy/> */}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;