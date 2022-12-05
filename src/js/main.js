// menu창 오픈
const $menuBtn = document.querySelector(".menu-btn");
const $menu = document.querySelector(".menu");
const $menuBlock = document.querySelectorAll(".menu .block");

$menuBtn.addEventListener("click", openMenu);

function openMenu() {

  $menu.classList.add("show");
  
}

// menu창 닫기
const $closeBtn = document.querySelector(".close-btn");

$closeBtn.addEventListener("click", closeMenu);

function closeMenu() {
  $menu.classList.remove("show");
}

// 스크롤 이벤트
const $videoWrap = document.querySelector(".video-wrap");
const $videoWrapBlock = document.querySelectorAll(".video-wrap .block");
const $videoWrapSpan = document.querySelectorAll(".video-wrap span");
const $cnt01Wrap = document.querySelector(".cnt01-wrap");
const $cnt02Wrap = document.querySelector(".cnt02-wrap");
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

window.onload = function(){
  setTimeout(AddClassShow, 1000);
  setTimeout(toTop, 100);
}

window.addEventListener("scroll", scrolledHeader);

window.addEventListener("scroll", scrolledCnt01);

window.addEventListener("scroll", scrolledCnt02);

window.addEventListener("scroll", scrolledGuide);

function scrolledHeader() {
  const changeColorPoint = document.querySelector(".cnt02-wrap").getBoundingClientRect().top;
  const $menuBtn = document.querySelector(".menu-btn");
  const $headerText = document.querySelector(".header .text");
  const $logo = document.querySelector(".logo");
  scrolled = window.scrollY;

  winHeight = window.innerHeight;

    if (changeColorPoint < winHeight) {
      $headerText.classList.add("black");
      $headerText.classList.remove("white");
      $logo.innerHTML = `<img src="./src/img/logo_bk.png" alt="FURSYS LOGO">`
    } else {      
      $headerText.classList.add("white");
      $headerText.classList.remove("black");      
    }

    if (scrolled > $cnt02Wrap.offsetTop) {
      $menuBtn.classList.add("black");
      $menuBtn.classList.remove("white");
      $logo.innerHTML = `<img src="./src/img/logo_bk.png" alt="FURSYS LOGO">`
    } else {
      $menuBtn.classList.add("white");
      $menuBtn.classList.remove("black");
      $logo.innerHTML = `<img src="./src/img/logo_w.png" alt="FURSYS LOGO">`
    }
}

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
  }  
}


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

function scrolledGuide() {
  const $guideWrap = document.querySelector(".guide-wrap");
  const changeColorPoint = $guideWrap.getBoundingClientRect().top;

  if (changeColorPoint <= winHeight) {
    $guideWrap.classList.add("show");
  } else {
    $guideWrap.classList.remove("show");
  }

}

function ani(i) {
  $videoWrapBlock[i].style.transform = "translateY(0%)";  
}

function addOutline(i) {
  $videoWrapSpan[i].classList.add("outline");
}

function AddClassShow() {
  $videoWrap.classList.add("show");
  for(let i = 0; i < $videoWrapBlock.length; i++) {
    setTimeout(ani, (i + 1) * 500, i);
  }
  for(let i = 0; i < $videoWrapSpan.length; i++) {
    setTimeout(addOutline, 2000, i);
  }
}

// 새로고침시 상단으로 이동
function toTop() {
  scrollTo(0,0);
}