//学生信息类
function Studtent(student_id, name, college, major, grade, clazz, age) {
    this.student_id = student_id;
    this.name = name;
    this.college = college;
    this.major = major;
    this.grade = grade;
    this.clazz = clazz;
    this.age = age;
    this.toWatchString = function () {
        return student_id + name + college + major + major + grade + clazz + age;
    }
}


var students = [new Studtent("1", "Mike", "Computer", "CS", 2016, 2, 20), 
    new Studtent("2", "Tom", "Computer", "CS", 2015, 2, 20), 
    new Studtent("3", "James", "Sport", "NBA", 2003, 2, 33), 
    new Studtent("4", "Curry", "Sport", "NBA", 2007, 2, 29), 
    new Studtent("5", "Leonard", "Sport", "NBA", 2007, 2, 29),
    new Studtent("6", "Westbrook", "Sport", "NBA", 2007, 2, 29),
    new Studtent("7", "Davis", "Sport", "NBA", 2007, 2, 29)
        ];
var row = 1;
var tempModify;//全局临时修改的学生信息
var deleteArray = [];//用checkbox删除的行数数组
var page = 1;//当前页码
var pageSize = 4;//每页展示大小

initial(page);

function initial(page) {
    row = 1;
    clearTable();
    console.log((page - 1) * pageSize || 0, page * pageSize)
    for (let index = 0|| (page-1)*pageSize; index < page*pageSize; index++) {
        if(students[index] != undefined){
            var x = document.getElementById('table').insertRow(); //获取第一行对象

            if (row % 2 == 0) {
                x.setAttribute("class", 'table-primary');
            } else {
                x.setAttribute("class", 'table-warning');
            }
            x.insertCell(0).innerHTML = "<input type='checkbox' name='select'/>";
            x.insertCell(1).innerHTML = row++;
            x.insertCell(2).innerHTML = students[index].student_id;
            x.insertCell(3).innerHTML = students[index].name;
            x.insertCell(4).innerHTML = students[index].college;
            x.insertCell(5).innerHTML = students[index].major;
            x.insertCell(6).innerHTML = students[index].grade;
            x.insertCell(7).innerHTML = students[index].clazz;
            x.insertCell(8).innerHTML = students[index].age;
            x.insertCell(9).innerHTML = "<a href='#' data-toggle='modal' data-target='#myModal_watch' onclick='watch(this)'>查看</a> &nbsp;&nbsp;&nbsp;" +
                "<a href='#' data-toggle='modal' data-target='#myModal_modify' onclick='modifyByRow(this)'>修改</a>&nbsp;&nbsp;&nbsp;" +
                "<a href='#' onclick='deleteByRow(this)'>删除</a>";
        }
        
    }
}

//------新增学生信息----------
function addStudent() {
    var student_id = document.getElementById("student_id").value;
    var student_name = document.getElementById("student_name").value;
    var student_college = document.getElementById("student_college").value;
    var student_major = document.getElementById("student_major").value;
    var student_grade = document.getElementById("student_grade").value;
    var student_clazz = document.getElementById("student_clazz").value;
    var student_age = document.getElementById("student_age").value;


    var temp = new Studtent(student_id, student_name, student_college,
        student_major, student_grade, student_clazz, student_age);

    //判断
    if(checkInputIllegal(temp)){
         //将新增的学生信息加入全局数组
        students.push(temp);

        var x = document.getElementById('table').insertRow(); //获取第一行对象

        if (row % 2 == 0) {
            x.setAttribute("class", 'table-primary');
        } else {
            x.setAttribute("class", 'table-warning');
        }
        x.insertCell(0).innerHTML = "<input type='checkbox' name='select'/>";
        x.insertCell(1).innerHTML = row++;
        x.insertCell(2).innerHTML = student_id;
        x.insertCell(3).innerHTML = student_name;
        x.insertCell(4).innerHTML = student_college;
        x.insertCell(5).innerHTML = student_major;
        x.insertCell(6).innerHTML = student_grade;
        x.insertCell(7).innerHTML = student_clazz;
        x.insertCell(8).innerHTML = student_age;
        x.insertCell(9).innerHTML = "<a href='#' data-toggle='modal' data-target='#myModal_watch' onclick='watch(this)'>查看</a> &nbsp;&nbsp;&nbsp;" +
            "<a href='#' data-toggle='modal' data-target='#myModal_modify' onclick='modifyByRow(this)'>修改</a>&nbsp;&nbsp;&nbsp;" +
            "<a href='#' onclick='deleteByRow(this)'>删除</a>";
        // $('#myModal').hide();
    } else {
        // $('#myModal').show();
        alert("输入不能为空");
    }
   
    
   
    

    
    //清除输入信息
    cleanAddInput();
}

//----清除添加信息框的内容-----
function cleanAddInput() {
    document.getElementById("student_id").value = '';
    document.getElementById("student_name").value = '';
    document.getElementById("student_college").value = '';
    document.getElementById("student_major").value = '';
    document.getElementById("student_grade").value = '';
    document.getElementById("student_clazz").value = '';
    document.getElementById("student_age").value = '';
}

//删除
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
        console.log("delete temp_r(r):", temp_r)

        students.splice(temp_r - 1, 1);
        console.log("delete students:", students)
        swal.close() 
    });
    
}


//修改
function modifyByRow(r) {
    
    document.getElementById("student_id_m").value = students[getRow(r) - 1].student_id;
    document.getElementById("student_name_m").value = students[getRow(r) - 1].name;
    document.getElementById("student_college_m").value = students[getRow(r) - 1].college
    document.getElementById("student_major_m").value = students[getRow(r) - 1].major;
    document.getElementById("student_grade_m").value = students[getRow(r) - 1].grade
    document.getElementById("student_clazz_m").value = students[getRow(r) - 1].clazz;
    document.getElementById("student_age_m").value = students[getRow(r) - 1].age;

    console.log(students[getRow(r) - 1]);
    tempModify = students[getRow(r) - 1];  
   

}

//----获取行号-----
function getRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    return i;
}

function modifyStudent() {
    console.log("modifyStudent s:", tempModify)
    tempModify.student_id = document.getElementById("student_id_m").value;
    tempModify.name = document.getElementById("student_name_m").value;
    tempModify.college = document.getElementById("student_college_m").value;
    tempModify.major = document.getElementById("student_major_m").value;
    tempModify.grade = document.getElementById("student_grade_m").value;
    tempModify.clazz = document.getElementById("student_clazz_m").value;
    tempModify.age = document.getElementById("student_age_m").value;

    console.log("Students:", students)

     $("#table tr:not(:first)").html("");
    initial();
}

function addAStudent(s) {
    console.log("s:",s)
    var x = document.getElementById('table').insertRow(); //获取第一行对象

    if (row % 2 == 0) {
        x.setAttribute("class", 'table-primary');
    } else {
        x.setAttribute("class", 'table-warning');
    }
    x.insertCell(0).innerHTML = "<input type='checkbox' name='select'/>";
    x.insertCell(1).innerHTML =  row++;
    x.insertCell(2).innerHTML = s.student_id;
    x.insertCell(3).innerHTML = s.name;
    x.insertCell(4).innerHTML = s.college;
    x.insertCell(5).innerHTML = s.major;
    x.insertCell(6).innerHTML = s.grade;
    x.insertCell(7).innerHTML = s.clazz;
    x.insertCell(8).innerHTML = s.age;
    x.insertCell(9).innerHTML = "<a href='#' data-toggle='modal' data-target='#myModal_watch' onclick='watch(this)'>查看</a> &nbsp;&nbsp;&nbsp;"+
                                "<a href='#' data-toggle='modal' data-target='#myModal_modify' onclick='modifyByRow(this)'>修改</a> &nbsp;&nbsp;&nbsp;"+
                                "<a href='#' onclick='deleteByRow(this)'>删除</a>";
}


//通过checkbox删除
function deleteThroughCheckbox() {
    deleteArray = [];
    var obj = document.getElementsByName('select'); //选择所有name="'test'"的对象，返回数组 
    //取到对象数组后，我们来循环检测它是不是被选中 
    var s = '';
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            s += obj[i].value + ','; //如果选中，将value添加到变量s中 
            deleteArray.push(i);
            
            console.log(i)
        }
    }

    deleteArray.reverse();
    console.log(deleteArray)
    for (let index = 0; index < deleteArray.length; index++) {
        document.getElementById('table').deleteRow(deleteArray[index]+1);

        students.splice(deleteArray[index], 1);
        
    }
    //那么现在来检测s的值就知道选中的复选框的值了 
    // alert(s == '' ? '你还没有选择任何内容！' : s);
    initialCheckbox();
}

function jqchk() { //jquery获取复选框值 
    var chk_value = [];
    $('input[name="test"]:checked').each(function () {
        chk_value.push($(this).val());
    });
    alert(chk_value.length == 0 ? '你还没有选择任何内容！' : chk_value); 
}

function selectAll() {
    var is_selected_all = document.getElementById('is_selected_all').checked;

    console.log(is_selected_all)
    if(is_selected_all){
        var obj = document.getElementsByName('select'); //选择所有name="'test'"的对象，返回数组 
        //取到对象数组后，我们来循环检测它是不是被选中 
        var s = '';
        for (var i = 0; i < obj.length; i++) {
            obj[i].checked = true;
        }
    }else{
        initialCheckbox();
    }
}

function initialCheckbox() {
    document.getElementById('is_selected_all').checked = false;
    var obj = document.getElementsByName('select'); //选择所有name="'test'"的对象，返回数组 
    //取到对象数组后，我们来循环检测它是不是被选中 
    var s = '';
    for (var i = 0; i < obj.length; i++) {
        obj[i].checked = false;
    }
}

//查看学生信息
function watch(r) {
    document.getElementById("student_id_w").value = students[getRow(r) - 1].student_id;
    document.getElementById("student_name_w").value = students[getRow(r) - 1].name;
    document.getElementById("student_college_w").value = students[getRow(r) - 1].college
    document.getElementById("student_major_w").value = students[getRow(r) - 1].major;
    document.getElementById("student_grade_w").value = students[getRow(r) - 1].grade
    document.getElementById("student_clazz_w").value = students[getRow(r) - 1].clazz;
    document.getElementById("student_age_w").value = students[getRow(r) - 1].age;
    console.log(students[getRow(r) - 1].toWatchString())
}


//搜索功能
function search() {
    // 声明变量 
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    tr = document.getElementsByTagName('tr');

    // 循环所有列表，查找匹配项 
    for (i = 0; i < students.length; i++) {
        
        if (students[i].toWatchString().toUpperCase().indexOf(filter) > -1) {
            tr[i+1].style.display = "";
        } else {
            tr[i+1].style.display = "none";
        }
    }
}

//判断输入是否合法
function checkInputIllegal(student_id, name, college, major, grade, clazz, age) {
    if (student_id == "" || isNaN(student_id)){

    }

    return false;
}


function initialPagination() {
    var pagination = document.getElementById("pagination_ul");
    var pagination_li = "";
    pagination_li += '<li class="page-item">' +
                    '<a class="page-link" href="#" onclick="lastPage()">上一页</a>'+
                     '</li>';
    for (let index = 1; index <= Math.ceil(students.length/pageSize); index++) {

        if(index == page){
            pagination_li += '<li class="page-item" '+ '>' +
                '<a class="page-link" href="#" onclick=' + '"changePage(' + index + ')"' + "style='background: #ece9ef'"  + '>' + index + '</a>' +
                '</li>';
        }else{
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

//点击页面换页
function changePage(index) {
    page = index;
    initialPagination();
    clearTable()
    initial(page);
}

//上一页
function lastPage() {
    clearTable()
}

//下一页
function nextPage() {
    
}

function clearTable() {
    // for (let index = 0; index < document.getElementById('table').r; index++) {
    //     console.log(document.getElementById('table').deleteRow(index))
        
    // }
    // var x = document.getElementById("table");
    $("#table:not(:first)").remove();
    console.log("clear")
}

initialPagination(); 

