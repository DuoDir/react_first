import React,{Component} from 'react';
import { Route,Switch } from "react-router-dom"
import { Layout } from 'antd';
import Index from '../../views/index'
import Music from '../../views/music'
import Person from '../../views/person'
import NotPage from '../../views/404'
const { Content } = Layout;
class Main extends Component{

    render(){
        return (
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                }}
            >   
                <Switch>
                    <Route path="/home/index" component={Index}></Route>
                    <Route path="/home/music" component={Music}></Route>
                    <Route path="/home/person" component={Person}></Route>
                    <Route path="*" component={NotPage}></Route>
                </Switch>
            </Content>
        )
    }
}
export default Main;