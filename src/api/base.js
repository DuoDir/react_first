import request from '../utils/request'

// 登录接口
export function login(data) {
    return request({
        method: "GET",
        url: "/base/login",
        params: data
    })
}

// 查询成员列表
export function getPersonList() {
    return request({
        method: "GET",
        url: "/base/getPersonList"
    })
}
// 添加成员
export function addPerson(data) {
    return request({
        method: "POST",
        url: "/base/addPerson",
        data
    })
}
// 删除成员
export function delPerson(data) {
    return request({
        method: "POST",
        url: "/base/delPerson",
        data
    })
}