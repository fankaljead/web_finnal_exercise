

/**
 * 为表格新增一行 需要传入一个student对象
 * @param {*} student 
 */
function addAnRow(student){

    //判断是否传人student对象，或者是否为空
    if(student == undefined){
        return;
    }

    //获取第一行对象
    var newRow = document.getElementById('tbody').insertRow(); 

    if (row % 2 == 0) {
        newRow.setAttribute("class", 'table-primary');
    } else {
        newRow.setAttribute("class", 'table-warning');
    }
    newRow.insertCell(0).innerHTML = "<input type='checkbox' name='select'/>";
    newRow.insertCell(1).innerHTML = GLOBAL.row++;
    newRow.insertCell(2).innerHTML = student.student_id;
    newRow.insertCell(3).innerHTML = student.name;
    newRow.insertCell(4).innerHTML = student.college;
    newRow.insertCell(5).innerHTML = student.major;
    newRow.insertCell(6).innerHTML = student.grade;
    newRow.insertCell(7).innerHTML = student.clazz;
    newRow.insertCell(8).innerHTML = student.age;
    newRow.insertCell(9).innerHTML = "<a href='#' data-toggle='modal' data-target='#myModal_watch' onclick='watch(this)'>查看</a> &nbsp;&nbsp;&nbsp;" +
        "<a href='#' data-toggle='modal' data-target='#myModal_modify' onclick='modifyByRow(this)'>修改</a>&nbsp;&nbsp;&nbsp;" +
        "<a href='#' onclick='deleteByRow(this)'>删除</a>";
}

/**
 * 传值给表格，并生成表格
 * @param {*} page 
 */
function generateTable(page) {
    GLOBAL.row = 1;

    var tempShowData = students;

    if (GLOBAL.searchData_Students.length != 0){
        tempShowData = GLOBAL.searchData_Students
    }
    
    for (let index = 0 || (page - 1) * pageSize; index < page * pageSize; index++) {
        if (tempShowData[index] != undefined) {
            addAnRow(tempShowData);
        }

    }

    //生成分页栏
    generatePagination(); 
}

/**
 * 清除表单主体的内容 不包括表头
 */
function clearTable() {    
    $("tbody").empty();
}


/**
 * 生成 表格底部的数字分页栏
 */
function generatePagination() {
    var pagination = document.getElementById("pagination_ul");
    var pagination_li = "";

    pagination_li += '<li class="page-item">' +
        '<a class="page-link" href="#" onclick="lastPage()">上一页</a>' +
        '</li>';

    for (let index = 1; index <= Math.ceil(students.length / pageSize); index++) {

        if (index == page) {
            pagination_li += '<li class="page-item" ' + '>' +
                '<a class="page-link" href="#" onclick=' + '"changePage(' + index + ')"' + "style='background: #ece9ef'" + '>' + index + '</a>' +
                '</li>';
        } else {
            pagination_li += '<li class="page-item">' +
                '<a class="page-link" href="#" onclick=' + '"changePage(' + index + ')"' + '>' + index + '</a>' +
                '</li>';
        }
    }

    pagination_li += '<li class="page-item">' +
        '<a class="page-link" href="#" onclick="nextPage()">下一页</a>' +
        '</li>';
    pagination.innerHTML = pagination_li;

}



/**
 * 通过checkbox删除多行
 */
function deleteThroughCheckbox() {
    GLOBAL.deleteArray = [];
    var obj = document.getElementsByName('select'); //选择所有name="'test'"的对象，返回数组 
    //取到对象数组后，我们来循环检测它是不是被选中 
    var s = '';
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            s += obj[i].value + ','; //如果选中，将value添加到变量s中 
            GLOBAL.deleteArray.push(i);

        }
    }

    //判断是否选择了复选框
    if (GLOBAL.deleteArray.length == 0){
        alert("至少选择一条数据");
    }

    GLOBAL.deleteArray.reverse();

    for (let index = 0; index < GLOBAL.deleteArray.length; index++) {
        document.getElementById('table').deleteRow(GLOBAL.deleteArray[index] + 1);

        GLOBAL.students.splice(GLOBAL.deleteArray[index], 1);
    }

    //那么现在来检测s的值就知道选中的复选框的值了 
    // alert(s == '' ? '你还没有选择任何内容！' : s);
    initialCheckbox();
    generateTable(page);
}


/**
 * 初始化复选框
 */
function initialCheckbox() {
    //将表头复选框设为为选中的状态
    document.getElementById('is_selected_all').checked = false;

    //选择所有name="'select'"的对象，返回数组
    var obj = document.getElementsByName('select'); 
    //取到对象数组后，我们来循环检测它是不是被选中 

    for (var i = 0; i < obj.length; i++) {
        obj[i].checked = false;
    }
}

/**
 * 标头复选框选中事件 选中所有
 */
function selectAll() {
    var is_selected_all = document.getElementById('is_selected_all').checked;

    if (is_selected_all) {
        var obj = document.getElementsByName('select'); //选择所有name="'test'"的对象，返回数组 
        //取到对象数组后，我们来循环检测它是不是被选中 
        var s = '';
        for (var i = 0; i < obj.length; i++) {
            obj[i].checked = true;
        }
    } else {
        initialCheckbox();
    }
}


//点击页面换页
function changePage(index) {
    GLOBAL.page = index;
    generatePagination();
    clearTable();
    generateTable(GLOBAL.page);
}

//上一页
function lastPage() {
    if (GLOBAL.page > 1) {
        generateTable(--GLOBAL.page);
    }
}

//下一页
function nextPage() {
    if (GLOBAL.page < Math.ceil(GLOBAL.students.length / GLOBAL.pageSize)) {
        generateTable(++GLOBAL.page);
    }
}


/**
 * 获取行号
 * @param {*} r 
 */
function getRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    return i;
}


/**
 * 通过每行的按键删除
 * @param {*} r 
 */
function deleteByRow(r) {
    swal({
        title: "您确定要删除吗？",
        text: "您确定要删除这条数据？",
        type: "warning",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: 'slide-from-top',
        confirmButtonText: "是的，我要删除",
        confirmButtonColor: "#ec6c62"
    }, function () {
        var temp_r = getRow(r);
        document.getElementById('table').deleteRow(getRow(r));      

        GLOBAL.students.splice(temp_r - 1, 1);
        generateTable(page);
        swal.close();
    });

}