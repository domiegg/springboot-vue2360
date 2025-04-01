const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmeaog5/",
            name: "ssmeaog5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmeaog5/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "线上旅行信息管理系统"
        } 
    }
}
export default base
