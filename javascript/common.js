/* 버튼 변환 및 모바일 메뉴 출력 */

$(function() {
    $(".trigger").click(function() {
        $(this).toggleClass('open');

        if ($(this).hasClass("open")) {
            $(".mobile-menu").show();
        } else {
            $(".mobile-menu").hide();
        }
    });
});