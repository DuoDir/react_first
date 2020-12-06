import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
// import RouteList from "./index"
import Login from '../project/login/index'
import Home from '../project/home/index' 
class Routes extends Component{

    render(){
        return (
            <Router>
                <div>
                    {/* {
                        RouteList.map( (item,index) => {
                            return  <Route exact key={index} path={item.path} component={item.component}></Route>
                        })
                    } */}
                    
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route exact path="/" component={Login}></Route>
                    
                </div>
            </Router>
        )
    }
}
export default Routes;