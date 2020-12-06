import React,{Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import {getSession} from "../../utils/publicFunc"
import { Layout  } from 'antd';
import Main from "./main"
import HeaderPage from "./header"
import SiderPage from "./sider"
import "./index.scss"
class Home extends Component{
    
    constructor() {
        super();
        this.state = {
            collapsed: false
        }
    }
    componentWillMount() {
        if (!getSession("_token")) {
            this.props.history.push("/login");
        } 
    }
    // 导航收起
    toggle() {
        // console.log(this)
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    
    render() {
        // console.log(this)
        return (
            <Router>
                <Layout>
                    {/* 左侧侧边栏 */}
                    <SiderPage 
                        collapsed={this.state.collapsed} 
                        pathname={this.props.location.pathname} 
                    />
                    <Layout className="site-layout">
                        {/* 头部内容 */}
                        <HeaderPage 
                            toggle={this.toggle.bind(this)} 
                            collapsed={this.state.collapsed} 
                            history={this.props.history} 
                        />
                        {/* 主体内容 */}
                        <Main></Main>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}
export default Home