import React,{Component} from 'react';
import { Form, Input, Button, Checkbox, notification  } from 'antd';
import {setSession} from "../../utils/publicFunc"
import {login} from "../../api/base"
class Login extends Component{
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        // 表单提交成功
        const onFinish = (values) =>{
            let {username,password} = values;
            let params = {
                username,
                password
            }
            login(params).then( res=>{
                // console.log(res)
                if (res.code === 1) {
                    openNotification(res.data)
                    setSession("_token","6666")
                    this.props.history.push("/home/index")
                } else {
                    openNotification(res.data)
                }
            })
        }
        // 表单提交失败
        const onFinishFailed = (errorInfo) =>{
            openNotification("请检查用户名和密码！")
        }
        // 弹框提示
        const openNotification = (msg) => {
            notification.open({
              message: '提示',
              description: msg ,
            });
        };
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: '请输入你的用户名!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: '请输入你的密码!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export default Login