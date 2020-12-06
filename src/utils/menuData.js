let menuData = [
    {
        path: "/index",
        name: "首页"
    },
    {
        path: "/music",
        name: "音乐模块",
        children: [
            { name: "音乐系列" , path: '/music'}
        ]
    },
    {
        path: "/person",
        name: "成员管理",
        children: [
            { name: "成员列表" , path: '/person'}
        ]
    }
]
export default menuData