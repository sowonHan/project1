/* 슬라이드 */

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    }
});

// 767px 이하에서는 슬라이드 버튼 방향 바뀌게 하는 기능
function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 767 ? 'vertical' : 'horizontal';

    return direction;
}

/* 달력 */

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        buttonText: {
            today: '오늘은?',
            month: '달력',
            list: '행사 목록'
        },
        fixedWeekCount: false, // true는 6주 고정
        initialDate: '2022-04-01',
        businessHours: true, // 주말에 회색 배경 생김
        dayMaxEvents: true, // allow "more" link when too many events,
        expandRows: true,
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listWeek' //행사목록 월별로 바꾸려면 listMonth로 고치면 됨
        },
        locale: 'ko', // 한국어 설정
        events: './json/events.json',
        
        // 이벤트 클릭했을 때 새 탭에서 열리게 하는 기능
        eventClick: function (info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate

            if (info.event.url) {
                window.open(info.event.url);
            }
        }
    });

    calendar.render();
});