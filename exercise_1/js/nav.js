//处理导航栏事件



function changePage(name) {

    var frame = document.getElementById('frame');//获取框架
    var content = document.getElementById('content');//获取内容 div
    // frame.src = allSrc[name];
    frame.src = '../html/' + name + '.html';
    if(isIE()){
        document.getElementById('frame').src = '../html/' + name + '.html'; 
        console.log("kdsfhjh")
    }

    switch (name) {
        //首页
        case 'index-content':
            content.style.height = '840px';
            break;
        //品牌和产品
        case 'brand':
            content.style.height = '945px';
            break;
        //关于我们
        case 'about':
            content.style.height = '560px';
            break; 
        //门店信息
        case 'info':
            content.style.height = '1415px';
            break;
        default:
            content.style.height = '0';
            break;
    }

}

function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}

$(document).ready(function () {

   

    $("#aboutUs").mouseover(function () {
        $(".aboutUs-modal").show();
    });

    // $(".aboutUs-modal").mouseout(() =>{
    //     setInterval(() => {
    //         $(".aboutUs-modal").hide();
    //     }, 3000);
    // });

    

    setInterval(function(){
        $(".aboutUs-modal").hide();       
    }, 5000);

    

});