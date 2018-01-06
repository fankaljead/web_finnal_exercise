//GLOBAL 全局变量存储区
var GLOBAL = {};

//全局遍历初始化
(function () {

    //表格的行数
    GLOBAL.row = 1;
    
    //全局临时修改的学生信息
    GLOBAL.tempModify;

    //用checkbox删除的行数数组
    GLOBAL.deleteArray = [];

    //搜索框数据
    GLOBAL.searchData;

    //搜索到的学生信息数组
    GLOBAL.searchData_Students = [];
    
    //当前页码
    GLOBAL.page = 1;
    
    //每页展示大小
    GLOBAL.pageSize = 7;
})();
