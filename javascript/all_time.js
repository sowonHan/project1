/* 풀페이지 스크롤 */

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  responsiveWidth: 0,
  credits: {
    enabled: false,
    // default {enabled: true, label: 'Made with fullpage.js', position: 'right'}
  },
});

/* 풀스크린 슬라이드 */

$(function () {
  $(".back-1").backstretch(
    ["../images/changgyeong_all.jpg", "../images/deoksu_all.jpg"],
    { duration: 3000, fade: 750 }
  );

  $(".back-3").backstretch(
    [
      "../images/seokjojeon1.jpg",
      "../images/seokjojeon2.jpg",
      "../images/seokjojeon3.jpg",
    ],
    { duration: 3000, fade: 750 }
  );
});
