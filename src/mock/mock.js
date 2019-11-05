import Mock from "mockjs"
Mock.mock("/api","get",{
    "list|5":[
        {
            "title":"@ctitle",
            "content|8-10":"@ctitle",
        }
    ]
})