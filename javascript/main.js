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
        // events: [
        //     {
        //         "title": "[예매] 경복궁 5월 야간 관람",
        //         "start": "2022-04-22T10:00:00",
        //         "color": "red",
        //         "url": "https://ticket.11st.co.kr/Product/Detail?id=266194&prdNo=4239172482"
        //     }
        // ],
        events: '../json/events.json',
        // live server로는 잘 되는데 chrome 브라우저로 여니까 안 돼^.T...
        
        // 이벤트 클릭했을 때 새 탭에서 열리게 하는 기능
        eventClick: function (info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate

            if (info.event.url) {
                window.open(info.event.url);
            }
        }
    });

    calendar.render();
    // calendar.changeView(getView());
});

// swiper 코드 참고해서 반응형으로 너비에 따라 달력 뷰를 바꿔주려고 했는데, 너비 줄인 상태에서 새로고침을 해야만 뷰가 바뀐다...자동으로 바뀔 수 없을까? 근데 급한 거 아니니까 나중에 여쭤보기로
// let getView = () => {
//     var intFrameWidth = window.innerWidth;

//     const view = intFrameWidth <= 329 ? 'listWeek' : 'dayGridMonth';

//     return view;
// }