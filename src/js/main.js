// <-- 변수 선언 -->

// menu
const $menuBtn = document.querySelector(".menu-btn");
const $menu = document.querySelector(".menu");
const $menuBlock = document.querySelectorAll(".menu .block");
const $closeBtn = document.querySelector(".close-btn");

// header
const $headerText = document.querySelector(".header .text");
const $logo = document.querySelector(".logo");
const $guideBtn = document.querySelector(".guide-btn");

// video
const $videoWrap = document.querySelector(".video-wrap");
const $videoWrapBlock = document.querySelectorAll(".video-wrap .block");
const $videoWrapSpan = document.querySelectorAll(".video-wrap span");

// cnt01
const $cnt01Wrap = document.querySelector(".cnt01-wrap");
const $pinSpacer = document.querySelector(".pin-spacer");
const $cnt01Container = document.querySelector(".cnt01-wrap .container");
const checkPoint01 = document.querySelector(".cp-01");
const checkPoint02 = document.querySelector(".cp-02");
const checkPoint03 = document.querySelector(".cp-03");
const checkPoint04 = document.querySelector(".cp-04");
const $mask = document.querySelector(".mask");
const $bg = document.querySelector(".bg");
let winWidth = 0;
let winHeight = 0;

// cnt02
const $cnt02Wrap = document.querySelector(".cnt02-wrap");

// guide
const $guideWrap = document.querySelector(".guide-wrap");
const $guideSwiperBtn = document.querySelectorAll(".slide-wrap .btns a");
const prevBtn = document.querySelector(".slide-wrap .btns .prev");
const nextBtn = document.querySelector(".slide-wrap .btns .next");
const $guideSlideWrap = document.querySelector(".guide-wrap .slide-wrap");
const $guideItemWrap = document.querySelector(".guide-wrap .item-wrap");
const $guideSwiperItem = document.querySelectorAll(".guide-wrap .slide-wrap .item");
const $slideDotLi = document.querySelectorAll(".slide-dot li");
const itemWidth = document.querySelector(".slide-wrap").offsetWidth;
const itemLength = $guideSwiperItem.length;
let setInt = setInterval(clickNextBtn, 3000);
let pageIndex = 0;
let currentIndex = 0;

// mobile 슬라이드
let startPoint = 0;
let endPoint = 0;

// <-- 함수 기능 -->

// <header>

// 메뉴창 열기 기능
function openMenu() {

  $menu.classList.add("show");
  
}

// 메뉴창 닫기 기능
function closeMenu() {
  $menu.classList.remove("show");
}

// 헤더 스크롤 애니메이션 기능
function scrolledHeader() {
  const changeColorPoint = document.querySelector(".cnt02-wrap").getBoundingClientRect().top;  
  scrolled = window.scrollY;
  winHeight = window.innerHeight;

    if (changeColorPoint < winHeight) {
      headerTxtClass()
      ChangeWhiteLogo()
    } else {      
      headerTxtClass()   
    }

    if (scrolled > $cnt02Wrap.offsetTop) {
      menuClass()
      ChangeBlackLogo()
    } else {
      menuClass()
      ChangeWhiteLogo()
    }
}

// 검은 로고로 변경 기능
function ChangeBlackLogo() {
  $logo.innerHTML = 
  `<a href="index.html"><span class="blind">FURSYS 홈로고</span>
  <img src="./src/img/logo_bk.png" alt="">
  </a>`
}

// 하얀 로고로 변경 기능
function ChangeWhiteLogo() {
  $logo.innerHTML = 
  `<a href="index.html"><span class="blind">FURSYS 홈로고</span>
  <img src="./src/img/logo_w.png" alt="">
  </a>`
}

// 가이드 버튼 가이드 영역 도달시 삭제 기능
function deleteGuideBtn() {
  scrolled = window.scrollY;
  
  if (scrolled + window.innerHeight >= $guideWrap.offsetTop) {
    $guideBtn.style.opacity = "0"
  } else {
    $guideBtn.style.opacity = "1"
  }
}

// 헤더 택스트 칼라 클래스 추가 기능
function headerTxtClass() {
  $headerText.classList.add("white");
  $headerText.classList.remove("black"); 
}

// 메뉴 색 칼라 클래스 추가 기능
function menuClass() {
  $menuBtn.classList.add("white");
  $menuBtn.classList.remove("black");
}

// 비디오 텍스트 애니메이션 기능
function ani(i) {
  $videoWrapBlock[i].style.transform = "translateY(0%)";  
}

// 비디오 텍스트 아웃라인 클래스 추가 기능
function addOutline(i) {
  $videoWrapSpan[i].classList.add("outline");
}

// 비디오 텍스트 애니메이션 클래스 추가 기능
function AddClassShow() {
  $videoWrap.classList.add("show");
  for(let i = 0; i < $videoWrapBlock.length; i++) {
    setTimeout(ani, (i + 1) * 500, i);
  }
  for(let i = 0; i < $videoWrapSpan.length; i++) {
    setTimeout(addOutline, 2000, i);
  }
}

// </header>
// <cnt01>

// cnt01 스크롤 애니메이션 기능
function scrolledCnt01() {
  const scrolled = window.pageYOffset;
  const opacityRatio = 1 - ((window.pageYOffset - checkPoint01.offsetTop) / checkPoint01.offsetHeight);
  const scaleRatio = ((window.pageYOffset - checkPoint01.offsetTop) / checkPoint01.offsetHeight) * 10;

  
  if (scrolled <= checkPoint01.offsetTop) {
    $mask.style.transform = `scale(1, 1)`;
    $mask.style.opacity = 1;
  } else if (scrolled >= checkPoint01.offsetTop && scrolled <= checkPoint02.offsetTop) {    
    if (scaleRatio > 1) {
      $mask.style.transform = `scale(${scaleRatio}, ${scaleRatio})`;
      if (scaleRatio > 3) {
        $mask.style.opacity = opacityRatio;
      }
    }
  } else if (scrolled >= checkPoint02.offsetTop && scrolled <= checkPoint03.offsetTop) {
    $mask.style.opacity = 0;
    $bg.classList.remove("show");
  } else if (scrolled >= checkPoint03.offsetTop && scrolled <= checkPoint04.offsetTop) {
    $bg.classList.add("show");
  } else {
    $mask.style.transform = `scale(10, 10)`;
    $mask.style.opacity = 0;
  }
}

// </cnt01>
// <cnt02>

// cnt02 스크롤 애니메이션 기능
function scrolledCnt02() {
  const $cnt02Sub = document.querySelectorAll(".cnt02-sub");
  winHeight = window.innerHeight;

  $cnt02Sub.forEach(function(item) {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < winHeight) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}

// </cnt02>
// <gudie>

// guide 스크롤 애니메이션 기능
function scrolledGuide() {
  const $guideWrap = document.querySelector(".guide-wrap");
  const changeColorPoint = $guideWrap.getBoundingClientRect().top;

  if (changeColorPoint <= winHeight) {
    $guideWrap.classList.add("show");
  } else {
    $guideWrap.classList.remove("show");
  }
}

// guide 슬라이드 애니메이션 기능

// 무한 슬라이드 클론 요소 만들기 기능
function makeClone() {
  for (let i = 0; i < itemLength; i++) {
    let cloneSlide = $guideSwiperItem[i].cloneNode(true);
    $guideItemWrap.appendChild(cloneSlide);
  }
  for (let i = itemLength - 1; i >= 0; i--) {
    let cloneSlide = $guideSwiperItem[i].cloneNode(true);
    $guideItemWrap.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPosition();
  setTimeout( () => {
    $guideItemWrap.classList.add("animated");
  }, 100);
}

// width 값 반응형으로 만들기 기능
function updateWidth() {
  const currentSlide = document.querySelectorAll(".item-wrap > div");
  const newItemLength = currentSlide.length;

  const newWidth = itemWidth * newItemLength;

  $guideItemWrap.style.width = newWidth + "px";
}

// 초기 애니메이션 포지션 값 기능
function setInitialPosition() {
  const initialTranslateValue = -(itemWidth * itemLength) + "px";
  $guideItemWrap.style.transform = "translateX("+ initialTranslateValue + ")";
  $guideItemWrap.style.left = "0px";
}

// 슬라이드 기능
function moveSlide(num) {
  $guideItemWrap.style.left = -num * itemWidth + "px";
  
  currentIndex = num;
  pageIndex = num;

  deleteNowClass();  
  bidingIndex(num);  


  if (currentIndex == itemLength || currentIndex == -itemLength) {
    setTimeout(function(){
      $guideItemWrap.classList.remove("animated");
      $guideItemWrap.style.left = "0px";
      currentIndex = 0;
    }, 400);
    setTimeout(function(){
      $guideItemWrap.classList.add("animated");
    }, 500);
  }
}

// num index 바인딩 기능
function bidingIndex(num) {
  if (num >= itemLength) {
    pageIndex = 0;
  } else if (num < 0) {
    pageIndex = pageIndex + itemLength;
  } else if (num == 0) {
    pageIndex = 0;
  }
  $slideDotLi[pageIndex].classList.add("now");
}

function deleteNowClass() {
  for(let i = 0; i < itemLength; i++) {
    $slideDotLi[i].classList.remove("now");
  };
}

// 슬라이드 다음 버튼 기능
function clickNextBtn() {
  moveSlide(currentIndex + 1);
  clearInterval(setInt);
  setInt = setInterval(clickNextBtn, 3000);
}

// 슬라이드 이전 버튼 기능
function clickPrevBtn() {
  moveSlide(currentIndex - 1);
  clearInterval(setInt);
  setInt = setInterval(clickNextBtn, 3000);
}

// 슬라이드 오버클릭 막는 기능
// function blockClick() {
//   $guideSlideWrap.style.pointerEvents = "none";
//   setTimeout(function(){
//     $guideSlideWrap.style.pointerEvents = "auto";
//   }, 500);
// }


// 인덱스 현재 페이지 기능
for(let i = 0; i < itemLength; i++) {
  $slideDotLi[i].addEventListener("click", function(){
    moveSlide(i);
    clearInterval(setInt);
    setInt = setInterval(clickNextBtn, 3000);
  });  
};

// </guide>

// <-- mobile check-->
function mobileCheck() {
  var constmobileKeyWords = new Array("Android", "iPhone", "iPod", "BlackBerry", "Windows CE", "SAMSUNG", "LG", "MOT", "SonyEricsson");
  for (var info in constmobileKeyWords) {
    if (navigator.userAgent.match(constmobileKeyWords[info]) != null) {
      return true;
    }
  }
  return false;
}

// 슬라이드 모바일 터치 기능
if (mobileCheck()) {
  $guideSlideWrap.addEventListener("touchstart", screenTouch, true);
  $guideSlideWrap.addEventListener("touchend", screenTouch, true);
}

function screenTouch(event) {
  
  var type = null;
  var touch = null;
  
  switch (event.type) {
    case "touchstart":
      type = "mousedown";
      touch = event.changedTouches[0];
      startPoint = touch.clientX;
    break;

    case "touchend":
      type = "mouseup";
      touch = event.changedTouches[0];
      endPoint = touch.clientX;

    const checkNum = startPoint - endPoint;
    
    if (checkNum < 0) {
      clickPrevBtn()
    } else {
      clickNextBtn()
    }
  }  
}

// <-- 함수 실행 -- >

window.onload = function(){
  setTimeout(AddClassShow, 100);
  makeClone();
  setInt;
}

$menuBtn.addEventListener("click", openMenu);

$closeBtn.addEventListener("click", closeMenu);

window.addEventListener("scroll", deleteGuideBtn);

window.addEventListener("scroll", scrolledHeader);

window.addEventListener("scroll", scrolledCnt01);

window.addEventListener("scroll", scrolledCnt02);

window.addEventListener("scroll", scrolledGuide);

nextBtn.addEventListener("click", clickNextBtn);

prevBtn.addEventListener("click", clickPrevBtn);