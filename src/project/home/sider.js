import React,{Component} from 'react';
import {Link} from "react-router-dom"
import { Layout, Menu  } from 'antd';
import {
  UserOutlined,
  MailOutlined
} from '@ant-design/icons';
import menuData from "../../utils/menuData"
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderPage extends Component{
    render() {
        // console.log(this)
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" />
                {/* 菜单内容 */}
                <Menu theme="dark" mode="inline"  defaultSelectedKeys={[this.props.pathname]} defaultOpenKeys={[this.props.pathname]}>
                    {
                        menuData.map( item => {
                            if (item.children&&item.children.length>0) {
                                return (
                                    <SubMenu key={`/home${item.path}`} icon={<MailOutlined />} title={item.name}>
                                        {
                                            item.children.map( v => {
                                            return (
                                                <Menu.Item key={`/home${v.path}`}>
                                                    <Link to={`/home${v.path}`}>{v.name}</Link>
                                                </Menu.Item>
                                            )
                                            }) 
                                        }
                                    </SubMenu>
                                )
                            } else {
                                return (
                                    <Menu.Item key={`/home${item.path}`} icon={<UserOutlined />}>
                                        <Link to={`/home${item.path}`}>{item.name}</Link>
                                    </Menu.Item>
                                )
                            }
                            
                        })
                    }
                </Menu>
            </Sider>
        )
    }
}
export default SiderPage