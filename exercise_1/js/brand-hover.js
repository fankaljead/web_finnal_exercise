//门店信息图片的hover效果
$(document).ready(function () {

    $("#delicious_doughnut_image").mouseover(function () {
        $("#brand-content-title-options-modal-id").show();
    });

    $('#delicious_doughnut').click(function () {
        $("#brand-content-title-options-modal-id").show();
    });

    $('#delicious_doughnut_image').mouseout(function () {
        $("#brand-content-title-options-modal-id").hide();
    });

   

});