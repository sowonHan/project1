# 🌺 고궁 산책
![대표](https://user-images.githubusercontent.com/100406001/236392408-f57cf4d7-4cae-4a8e-ae54-3a3e1389ffbe.png)

jQuery 기반의 고궁 행사 일정 체크 및 안내 사이트

> [배포링크](https://sowonhan.github.io/walking_palace/)

## 🐲 프로젝트 소개

`고궁 산책`은 조선 4대 궁궐인 경복궁 · 창덕궁 · 창경궁 · 덕수궁을 활용한 각종 고궁행사를 홍보하는 반응형 웹사이트입니다.

고궁을 자주 방문해왔던 사람들에게는 형태와 시기가 제각기 다른 행사를 한 번에 확인할 수 있는 편의성을 제공하고,  
이전까지 고궁에 관심이 없었던 사람들에게는 궁을 연상시키는 색감과 사진을 기반으로 그동안 잘 알지 못했던 고궁과 행사에 대해 알아가며 호기심과 흥미를 느끼게 합니다.

`고궁 산책` 사이트명은 사람들이 궁을 따분하고 어려워하여 외국인에게만 유의미한 관광지로 치부하기보다는,  
특별한 목적 없이도 가볍게 산책과 나들이를 즐기러 가면서 친숙한 장소로 여기기를 바란다는 의미를 담고 있습니다.

> **개발 기간** : 2022년 4월 1일 ~ 2022년 5월 2일

## ⚙ 기술 스택

`언어`

- Javascript
- HTML5
- CSS3

`라이브러리`

- jQuery
- FullCalendar
- Swiper
- **스타일 도구**
  - fullPage.js
  - Backstretch
  - AOS (Animate On Scroll)
  - Animate.css
  - Font Awesome

`디자인`
- Figma
  - [프로토타입](https://www.figma.com/file/O3UILD43EN71akDOHvigZz/Walking-Palace?type=design&t=apdwRn1l4K5w55t0-1)
  - [와이어프레임](https://www.figma.com/file/JH8CS83vniO3g93LiVKhVY/Walking-Palace_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&t=apdwRn1l4K5w55t0-1)

## 🪁 소스

`OPEN API`

- Kakao 지도 API

`데이터 및 이미지 소스`

- [문화재청 궁능유적본부 공식 인스타그램](https://www.instagram.com/royalpalaces_tombs/)
- [문화재청 공식 트위터](https://twitter.com/chlove_u)
- [문화재청 공식 블로그](https://blog.naver.com/chagov)
- [창경궁 홈페이지](http://cgg.cha.go.kr/agapp/main/index.do?siteCd=CGG)
- [창경궁 공식 트위터](https://twitter.com/cgglove)
- [경복궁 홈페이지](http://www.royalpalace.go.kr/)
- [경복궁 공식 트위터](https://twitter.com/royalpalacego)
- [창덕궁 홈페이지](http://www.cdg.go.kr/default.jsp)
- [덕수궁 홈페이지](https://deoksugung.go.kr/)
- [한국문화재재단 홈페이지](https://www.chf.or.kr/chf)
- [궁중문화축전 홈페이지](https://www.chf.or.kr/fest)

## 🗂 디렉터리 구조

<details>
  <summary>접기/펼치기</summary>

    📦walking_palace
    ┣ 📂css
    ┃ ┣ 📜all_time.css
    ┃ ┣ 📜common.css
    ┃ ┣ 📜detail.css
    ┃ ┣ 📜main.css
    ┃ ┗ 📜reset.css
    ┣ 📂images
    ┣ 📂javascript
    ┃ ┣ 📜all_time.js : 상설행사 페이지의 전체화면 스크롤 및 슬라이드 설정 코드
    ┃ ┣ 📜common.js : 메뉴, resize 과부하 방지 등 공용 코드
    ┃ ┗ 📜main.js : 기본 index 페이지의 슬라이드와 달력 설정 코드
    ┣ 📂library
    ┃ ┣ 📂aos
    ┃ ┣ 📂fontawesome-free-6.1.1-web
    ┃ ┣ 📂fullcalendar-5.10.2
    ┃ ┣ 📂fullpage
    ┃ ┗ 📂jquery
    ┣ 📂pages
    ┃ ┣ 📜all_time.html
    ┃ ┣ 📜changdeok.html
    ┃ ┣ 📜changgyeong.html
    ┃ ┣ 📜deoksu.html
    ┃ ┗ 📜gyeongbok.html
    ┣ 📜index.html
    ┣ 📜memo.txt : 사이트에 사용된 색상 코드
    ┗ 📜README.md

</details>

## 🌲 주요 기능

### 소개마당 페이지

![슬라이드](https://user-images.githubusercontent.com/100406001/236392473-d14470b1-4c5d-438c-b1bc-2daccc89e5c2.gif)

#### (1) 슬라이드
 - Swiper 라이브러리를 사용하여 가로진행형 자동 슬라이드를 구현. 
 - 가로 767px 이하의 타블렛·모바일 화면에서는 세로진행형 슬라이드로 전환.
 - 이미지 위에 마우스를 올릴 시 슬라이드 자동진행 정지. 이미지 클릭 시 행사와 관련된 공식 페이지로 이동.

![달력](https://user-images.githubusercontent.com/100406001/236392569-a356ee02-31ec-4a3a-ad1b-a784cb7305f4.gif)

#### (2) 스케줄러
 - FullCalendar 라이브러리를 이용해 월간/일간 스케줄러로 행사를 정리.
 - 행사는 일반 기간제 스케줄, 예매일은 시간 스케줄로 설정하고 봄꽃 개화기간은 배경으로 처리하여 사용자가 구분할 수 있도록 표시.
 - 개화 기간을 제외한 모든 스케줄은 클릭 시 행사 관련 페이지로 이동.

**(3)** [트위터 공식 지원 사이트](https://publish.twitter.com/)를 사용하여 blockquote 태그로 인용된 문화재청 트윗을 웹페이지에 추가.

### 상설 행사 페이지

![풀페이지스크롤](https://user-images.githubusercontent.com/100406001/236396518-5e2b0a44-f5e6-4d02-9aad-d306610b0cdd.gif)

- fullPage.js 라이브러리를 이용해 전체화면 스크롤 페이지를 구현.
- Backstretch 라이브러리를 사용해 1, 3번째 페이지를 슬라이드쇼 배경으로 구현.


### 4대 궁궐 페이지

![지도](https://user-images.githubusercontent.com/100406001/236399649-2551d036-d324-4f98-becd-c1749558a48c.gif)

  - Kakao 지도 API를 호출하여 카카오맵을 클라이언트단에 렌더링.
  - 각 궁궐의 위치를 지도에 마커로 표시.

### 스타일

- 각 메뉴에 슬라이딩 애니메이션 구현. 가로 767px 이하부터는 모바일용 드롭다운 메뉴로 전환.
- 미디어 쿼리로 웹사이트의 모든 구성 요소가 화면 크기에 맞춰 배치되는 반응형 웹을 구현.
- AOS와 Animate.css 라이브러리를 이용하여 페이지 및 섹션별 애니메이션 효과 적용.

## 🌸 개발 계기

***고궁 행사를 즐기고 싶은데 찾아보기 불편하네.***  
***궁궐 정보와 행사 내용까지 한 번에 모아서 볼 수 있는 웹사이트가 있었으면 좋겠다.***  
`고궁 산책`은 지극히 개인적인 경험과 바람에서 시작된 프로젝트입니다.

행사를 예매하는 과정에서 스스로 체감한 불편 사항은 다음과 같습니다.

**불규칙하고 산재된 정보**

1. 행사 안내가 예매일과 밭은 날짜 혹은 시간에 올라온다.
2. 공지 사항이 동시에 업데이트되지 않아 여러 플랫폼을 모두 체크해야 한다.
3. 궁궐마다 정보를 따로따로 찾아봐야 한다. 

1, 2번 문제점이 겹쳐 심하게는 이미 매진된 상황에서 SNS로 예매 공지가 올라오는 경우도 있었습니다😂.

한국문화재재단·궁중문화축전·문화재청 홈페이지에서 어느 정도 통합적인 안내를 하고 있었지만  
프로젝트를 기획하던 2022년 4월 경에는 웹페이지의 UI 사용성이 좋지 못하거나, 월별 조회시스템에 정보가 제대로 업데이트되지 않는 상태였습니다.

거듭된 예매 실패를 겪고 행사를 직관적으로 정리해주는 서비스의 필요성을 절절히 느끼던 끝에

- 2, 3번 문제점을 보완해 정보 접근성을 올릴 것.
- 소비자로서 평소 원하던 콘텐츠, UI, 컨셉을 담아낼 것.

위의 목표점을 담은 홍보 사이트를 직접 만들어보기로 결심하고 `고궁 산책` 프로젝트를 기획하게 되었습니다.

현재는 [문화재청 궁능유적본부 행사 달력](http://royal.cha.go.kr/public/EVENT/RptcEventCalendar.do?pageNo=2100000&siteCd=RPTC)과 [한국문화재재단 문화달력](https://www.chf.or.kr/cont/calendar/all/month/menu/363) 페이지에서 `고궁 산책` 프로젝트의 월간, 일간 스케줄러와 동일한 서비스를 이용하실 수 있습니다.

## 🌳 얻은 경험

- 웹 표준과 웹 접근성을 준수하여 웹사이트를 제작할 수 있게 되었습니다.
- OPEN API를 호출해 받아온 데이터를 클라이언트 사이드에 렌더링할 수 있게 되었습니다.
- jQuery와 Javascript 라이브러리를 활용하여 웹페이지에 메뉴, 슬라이드, 달력 등 동적인 기능을 구현할 수 있게 되었습니다.
- 웹페이지에 다양한 애니메이션 효과를 부여하고 반응형 웹을 설계함으로써 서비스 UX를 향상시킬 수 있게 되었습니다.
- Figma로 와이어프레임과 프로토타입을 제작하는 경험을 통해 타 직무와의 협업에 필요한 역량을 기를 수 있게 되었습니다.
- 웹페이지에 SNS 콘텐츠를 추가할 수 있게 되었습니다.
- 행사 데이터를 하드코딩으로 처리해야 하는 한계를 경험해, 서버의 필요성과 공공데이터 유무의 중요성을 느끼게 되었습니다.

## 🏹 트러블 슈팅

<details>
  <summary>모바일 드롭다운 메뉴 강제 비활성화 문제</summary>
  
  - 모바일 드롭다운 메뉴를 활성화시킨 상태에서 브라우저 너비를 768px 이상으로 늘렸을 때, 드롭다운 메뉴가 계속 활성화된 채로 유지되는 오류를 발견했습니다.
  - window에서 resize 이벤트가 발생할 때마다 브라우저 창 내부의 너비를 확인하고 768 이상이 될 경우 드롭다운 메뉴를 사라지게 하는 jQuery 함수를 만들어 문제를 해결했습니다.

  </details>
