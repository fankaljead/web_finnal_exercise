//处理导航栏事件



function changePage(name) {

    var frame = document.getElementById('frame');//获取框架
    var content = document.getElementById('content');//获取内容 div
    // frame.src = allSrc[name];
    frame.src = '../html/' + name + '.html';

    switch (name) {
        case 'index-content':
            content.style.height = '840px';
            break;
        case 'brand':
            content.style.height = '945px';
            break;
        case 'about':
            content.style.height = '560px';
            break;
        default:
            break;
    }

}