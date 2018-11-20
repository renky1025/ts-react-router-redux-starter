import * as React from 'react';
import { NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

interface LayoutPageProps {
    content: JSX.Element;
    activedIndex?: string;
}

class LayoutPage extends React.Component<LayoutPageProps, undefined> {
    constructor(props: LayoutPageProps, undefined) {
        super(props,undefined);

    }
    render() {
        return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.props.activedIndex]}
            style={{ lineHeight: '64px' }}
            >
            <Menu.Item key="1"><NavLink to="/" className="nav-text">Home</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/dashboard" className="nav-text">Dashboard</NavLink></Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                {this.props.content}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
        </Layout>
        
        );
  }
}

export default LayoutPage