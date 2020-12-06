
import Login from '../project/login/index'
import Home from '../project/home/index' 

let routeList = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/",
        component: Login
    }
]
export default routeList;