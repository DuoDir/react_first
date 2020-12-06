import React,{Component} from 'react';
import { Layout, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import {removeSession} from "../../utils/publicFunc"
const { Header } = Layout;


class Headers extends Component{
    // 登出
    LoginOut() {
        removeSession("_token")
        this.props.history.push("/login");
    }
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.props.toggle,
                })}
                <Button danger onClick={() => this.LoginOut()}>登出</Button>
            </Header>
        )
    }
}
export default Headers