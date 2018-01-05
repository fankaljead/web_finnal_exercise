$(document).ready(function () {

    $(".main-c").mouseover(function(){
        $(".main_tip1").animate({ top: '50px' }, 1000)
    });
    $(".main-c").mouseout(function () {
        $(".main_tip1").animate({ top: '-50px' })
    });


    $(".main-s2").mouseover(function () {
        $(".main_tip2").animate({ top: '50px' }, 1000)
    });
    $(".main-s2").mouseout(function () {
        $(".main_tip2").animate({ top: '-50px' })
    });
});