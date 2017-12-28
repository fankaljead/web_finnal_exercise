//门店信息图片的hover效果
$(document).ready(function () {

    var showPictures_hover_image_count = 1;

    $(".showPictures").mouseover(function () {
        $(".showPictures-hover").show();
    });

    $('#showPictures-hover-image-close').click(function () {
        $(".showPictures-hover").hide();
    });

    //左滑
    $('#showPictures-hover-image-left').click(()=>{
        if (showPictures_hover_image_count > 1){
            var img = '../images/showPicture_big' + (--showPictures_hover_image_count) + '.png';            
            document.getElementById('showPictures-hover-image').src = img ;
        }
           
    });

    //右滑
    $('#showPictures-hover-image-right').click(() => {
        if (showPictures_hover_image_count < 3) {
            var img = '../images/showPicture_big' + (++showPictures_hover_image_count) + '.png';            
            document.getElementById('showPictures-hover-image').src = img ;
        }

    });

    setInterval(function () {
        
        if (showPictures_hover_image_count == 3) {
            showPictures_hover_image_count = 1;
            var img = '../images/showPicture_big' + (showPictures_hover_image_count) + '.png';
            document.getElementById('showPictures-hover-image').src = img;
        } else {
            var img = '../images/showPicture_big' + (++showPictures_hover_image_count) + '.png';
            document.getElementById('showPictures-hover-image').src = img;
        }


    }, 3000);
    
});