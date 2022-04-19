/* 풀페이지 스크롤 */

new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    responsiveWidth: 0, //픽셀로 정의된 폭 아래에 정상 스크롤(autoScrolling:false)을 씁니다.
    credits: {
        enabled: false
        // default {enabled: true, label: 'Made with fullpage.js', position: 'right'}
    }
});

/* 풀스크린 슬라이드 */

$(function () {
    $(".back-1").backstretch([
        "../images/changgyeong_all.jpg",
        "../images/deoksu_all.jpg"
    ], { duration: 3000, fade: 750 });

    $(".back-3").backstretch([
        "../images/seokjojeon1.jpg",
        "../images/seokjojeon2.jpg",
        "../images/seokjojeon3.jpg"
    ], { duration: 3000, fade: 750 });
});

/* 텍스트 애니메이션 */

// (function ($) {

//     'use strict';

//     // variables
//     var $isAnimatedSecond = $('.second .is-animated'),
//         $isAnimatedThird = $('.third .is-animated'),
//         $isAnimatedFourth = $('.fourth .is-animated')

//     // initialize fullPage
//     $('#fullpage').fullpage({

//         navigation: true,
//         onLeave: function (index, nextIndex, direction) {

//             /**
//             * use the following condition: 
//             *
//             *   if( index == 1 && direction == 'down' ) {
//             *
//             * if you haven't enabled the dot navigation
//             * or you aren't interested in the animations that occur 
//             * when you jump (using the dot navigation) 
//             * from the first section to another sections 
//             */

//             // first animation
//             if (index == 1 && nextIndex == 2) {
//                 $isAnimatedSecond.addClass('animated fadeInUp');
//             }

//             /**
//               * use the following condition: 
//               *
//               *   else if( index == 2 && direction == 'down' ) {
//               *
//               * if you haven't enabled the dot navigation
//               * or you aren't interested in the animations that occur 
//               * when you jump (using the dot navigation) from the first section to the third one 
//               */

//             // second animation
//             else if ((index == 1 || index == 2) && nextIndex == 3) {
//                 $isAnimatedThird.addClass('animated fadeInUp');
//             }


//             /**
//              * use the following condition:
//              *
//              *   else if( index == 3 && direction == 'down' ) {
//              *
//              * if you haven't enabled the dot navigation
//              * or you aren't interested in the animations that occur 
//              * when you jump (using the dot navigation) 
//              * from the first or second section to the fourth one 
//              */

//             // third animation
//             else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
//                 $isAnimatedFourth.addClass('animated fadeInUp');
//             }
//         }

//     });

// })(jQuery);
