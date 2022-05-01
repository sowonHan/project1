/* 버튼 변환 및 모바일 메뉴 출력 */

$(function() {
    $(".trigger").click(function() {
        $(this).toggleClass('open');

        if ($(this).hasClass("open")) {
            $(".mobile-menu").show();
            $(".trigger-container").addClass("shadow");
            $("header").removeClass("transparent");
        } else {
            $(".mobile-menu").hide();
            $(".trigger-container").removeClass("shadow");
            $("header").addClass("transparent");
        }
    });
});

/* resize 과부하 방지 코드 */

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle("resize", "optimizedResize");
})();

/* width가 768px 이상일 때 모바일 메뉴 보이는 것을 방지 */

$(function() {
    window.addEventListener('optimizedResize', () => {
        let winWidth = window.innerWidth;
    
        if (winWidth >= 768) {
            $(".mobile-menu").hide();
            $(".trigger").removeClass('open');
        }
    });
});


/* div에 링크 걸기 */

const openInNewTab = (url) => {
    let win = window.open(url, '_blank');
    win.focus();
}