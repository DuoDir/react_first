var express = require("express"); // 加载依赖包
var bodyParser = require("body-parser");
var app = express();

// var allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
//     res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, DELETE');  //允许任何方法
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token');   //允许任何类型
//     next(); //下一步
//    };
//    app.use(allowCrossDomain);//运用跨域的中间件
   app.use(bodyParser.json())   //// 创建 application/json 解析

function changePowerNum(num) {
    if (num === "0") {
        return "管理员"
    } else {
        return "测试"
    }
}
// 成员列表
var personList = [
    {name: 'admin', password: '666', power: "管理员"},
    {name: 'ceshi', password: '888', power: "测试"}
]

// 接口
// 登录
// app.get("/base/login/:name/:password",function(req,res){
//     console.log(req.params)
app.get("/base/login",function(req,res){
    let {username, password} = req.query;
    if (username !== ""&&password !== "") {
        let userinfo = personList.filter( item => {
            return username === item.name
        })
        if (userinfo.length>0&&(password === userinfo[0].password)) {
            res.send({code:1,data:"登录成功"})
        } else {
            res.send({code:-1,data:"请检查用户名或密码!"})
        }
        
    } else {
        res.send({code:-1,data:"请填写用户名或密码!"})
    }
    
})

// 添加成员
app.post("/base/addPerson",function(req,res){
    let {name, password, power} = req.body;
    if (name === ""||password === ""||power === "") {
        res.send({code:-1,data:"请填写完整!"})
    } else {
        console.log(req.body)
        personList = [...personList,{
            name,
            password,
            power: changePowerNum(power)
        }]
        res.send({code:1,data:"添加成功"})
    }
    
})
// 删除成员
app.post("/base/delPerson",function(req,res){
    let {id} = req.body;
    if (id === "") {
        res.send({code:-1,data:"没有删除id!"})
    } else {
        personList.splice(id,1)
        res.send({code:1,data:"删除成功"})
    }
    
})
// 查询成员列表
app.get("/base/getPersonList",function(req,res){
    res.send({code:1,data:personList})
})

app.listen(8000, function(){console.log("Server started on port 8000.")});
