var bannerCount = 1;

//处理banner换背景图片事件
function changeBanner(position) {
   
    var banner = document.getElementById('banner');//banner div
    console.log("banner.style:", banner.style)
    if (banner.style.backgroundImage == ''){
        bannerCount = 1;
    }

    if (position == 'left' && bannerCount > 1){    
        var img = '../images/banner/banner' + (--bannerCount) +'.png';       
        banner.style.backgroundImage = "url(" + img + ")";
    } else if (bannerCount < 3 && position == 'right'){
        var img = '../images/banner/banner' + (++bannerCount) + '.png';       
        banner.style.backgroundImage = "url(" + img + ")";
    }     

    
}

setInterval(function () {
    var banner = document.getElementById('banner');//banner div
    if(bannerCount == 3){
        bannerCount = 1;
        var img = '../images/banner/banner' + (bannerCount) + '.png';
        banner.style.backgroundImage = "url(" + img + ")";
    } else{
        var img = '../images/banner/banner' + (++bannerCount) + '.png';
        banner.style.backgroundImage = "url(" + img + ")";
    }
    
    
}, 5000);