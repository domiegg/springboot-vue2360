const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"景点分类","menuJump":"列表","tableName":"jingdianfenlei"}],"menu":"景点分类管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"景点信息","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"购票信息","menuJump":"列表","tableName":"goupiaoxinxi"}],"menu":"购票信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"酒店信息","menuJump":"列表","tableName":"jiudianxinxi"}],"menu":"酒店信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"客房类型","menuJump":"列表","tableName":"kefangleixing"}],"menu":"客房类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"客房信息","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"客房预订","menuJump":"列表","tableName":"kefangyuding"}],"menu":"客房预订管理"},{"child":[{"buttons":["查看","修改","删除","审核","报表"],"menu":"退房评价","menuJump":"列表","tableName":"tuifangpingjia"}],"menu":"退房评价管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"景点资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","购票"],"menu":"景点信息列表","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息模块"},{"child":[{"buttons":["查看"],"menu":"酒店信息列表","menuJump":"列表","tableName":"jiudianxinxi"}],"menu":"酒店信息模块"},{"child":[{"buttons":["查看","预订"],"menu":"客房信息列表","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除","支付"],"menu":"购票信息","menuJump":"列表","tableName":"goupiaoxinxi"}],"menu":"购票信息管理"},{"child":[{"buttons":["查看","删除","支付","评价"],"menu":"客房预订","menuJump":"列表","tableName":"kefangyuding"}],"menu":"客房预订管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"退房评价","menuJump":"列表","tableName":"tuifangpingjia"}],"menu":"退房评价管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","购票"],"menu":"景点信息列表","menuJump":"列表","tableName":"jingdianxinxi"}],"menu":"景点信息模块"},{"child":[{"buttons":["查看"],"menu":"酒店信息列表","menuJump":"列表","tableName":"jiudianxinxi"}],"menu":"酒店信息模块"},{"child":[{"buttons":["查看","预订"],"menu":"客房信息列表","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
