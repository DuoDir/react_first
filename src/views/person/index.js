import React,{Component} from 'react';
import { Table, Space, Button, notification, Modal, Form, Input, Select  } from 'antd'; 
import {getPersonList,addPerson,delPerson} from "../../api/base";

const { Option } = Select;

class Person extends Component{
    
    constructor() {
        super();
        this.state = {
            dataSource: [],
            visible: false 
        }
        this.formRef = React.createRef();
    }
    componentWillMount() {
        this.load();
        
    }
    // 加载列表
    load() {
        getPersonList().then(res => {
            console.log(res)
            if (res.code === 1) {
                let dataSource = res.data.map( (element,index) => {
                    return {
                        name: element.name,
                        password: element.password,
                        power: element.power,
                        key: index,
                    }
                });
                this.setState({
                    dataSource
                })
            }
        })
    }
    // 展示添加模态框
    showAddModal() {
        this.setState({
            visible: true,
        });
    };
    //隐藏添加模态框
    hideAddModal() {
        this.setState({
            visible: false,
        });
        this.onReset()
    };
    // 添加保存
    saveAdd(obj) {
        console.log(obj)
        addPerson(obj).then(res=>{
            if (res.code === 1) {
                this.openNotification(res.data)
                this.onReset()
                this.hideAddModal()
                this.load()
            }
        })
    }
    onReset() {
        this.formRef.current.resetFields();
    };
    // 删除
    delete(obj) {
        delPerson({id:obj.key}).then(res => {
            if (res.code === 1) {
                this.openNotification(res.data)
                this.load()
            }
        })
    }
    // 权限下拉
    handleChangePower() {

    }
    // 提示
    openNotification(text) {
        notification.open({
          message: "提示",
          description: text
        });
    };
    render(){
        const columns = [
            {
                title: '用户名',
                dataIndex: 'name',
                // key: 'name',
            },
            {
                title: '密码',
                dataIndex: 'password',
                // key: 'age',
            },
            {
                title: '权限',
                dataIndex: 'power',
                // key: 'power',
            },
            {
                title: '操作',
                // key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={() =>this.delete(record)}>删除</a>
                    </Space>
                ),
            },
        ];
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 12 },
        };
        const tailLayout = {
            wrapperCol: { offset: 9, span: 15 },
        };
        return (
            
            <div class="personPage">
                <Button type="primary" onClick={this.showAddModal.bind(this)}>
                    添加
                </Button>
                <Modal
                    title="添加"
                    visible={this.state.visible}
                    onCancel={this.hideAddModal.bind(this)}
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.saveAdd.bind(this)}
                        ref={this.formRef}
                        >
                        <Form.Item
                            label="用户名"
                            name="name"
                            rules={[{ required: true, message: '请输入姓名!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="权限"
                            name="power"
                            rules={[{ required: true, message: '请选择对应的权限!' }]}
                        >
                            <Select  onChange={this.handleChangePower.bind(this)}>
                                <Option value="0">管理员</Option>
                                <Option value="1">测试</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">确 定</Button>

                            <Button onClick={()=>this.hideAddModal()}>取 消</Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <Table dataSource={this.state.dataSource} columns={columns} />
                
            </div>
        )
    }
}
export default Person;