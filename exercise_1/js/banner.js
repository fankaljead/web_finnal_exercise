//处理导航栏事件



function changePage(name) {
   
    var frame = document.getElementById('frame');//获取框架
    // frame.src = allSrc[name];
    frame.src = '../html/' + name + '.html';
   
}