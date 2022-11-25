// menu창 오픈
const $menuBtn = document.querySelector(".menu_btn");
const $menu = document.querySelector(".menu");
const $menuBlock = document.querySelectorAll(".menu .block");

$menuBtn.addEventListener("click", openMenu);

function openMenu() {

  $menu.classList.add("show");
  
}

// menu창 닫기
const $closeBtn = document.querySelector(".close_btn");

$closeBtn.addEventListener("click", closeMenu);

function closeMenu() {
  $menu.classList.remove("show");
}

// 스크롤 이벤트
const $videoWrap = document.querySelector(".video_wrap");
const $videoWrapBlock = document.querySelectorAll(".video_wrap .block");
const $videoWrapSpan = document.querySelectorAll(".video_wrap span");
const $cnt01Wrap = document.querySelector(".cnt01_wrap");
const $cnt02Wrap = document.querySelector(".cnt02_wrap");
const $pinSpacer = document.querySelector(".pin_spacer");
const $cnt01Container = document.querySelector(".cnt01_wrap .container");
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
  const changeColorPoint = document.querySelector(".cnt02_wrap").getBoundingClientRect().top;
  const $menuBtn = document.querySelector(".menu_btn");
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
  const cnt01Viewprot = $cnt01Wrap.offsetTop + $cnt01Wrap.offsetHeight;
  const scrolled = window.scrollY;
  let ratio = ((window.scrollY + $mask.offsetTop - $mask.offsetHeight) / $mask.offsetHeight) * 15;
  winHeight = window.innerHeight;
  
  if (ratio < 1) {
    ratio = 1;
  }

  if (scrolled >= $videoWrap.offsetTop &&scrolled <= $cnt01Wrap.offsetTop) {
    $cnt01Container.style.position = "";
    $cnt01Container.style.top = "0";
    $cnt01Container.style.left = "0";
    $cnt01Container.style.transform = `translate3d(0, 0, 0)`;
    $mask.style.opacity = 1;
    $mask.style.transform = "scale(1, 1)";
  } else if (scrolled >= $cnt01Wrap.offsetTop && scrolled <= cnt01Viewprot * 0.3) {
    $cnt01Container.style.position = "fixed";
    $mask.style.transform =  `translate3d(0px, 0px, 0px) scale(${ratio}, ${ratio})`;
    $mask.style.opacity = 1;
  } else if (scrolled >= cnt01Viewprot * 0.3 && scrolled <= cnt01Viewprot * 0.4) {
    let opacityRatio = (window.scrollY + $mask.offsetTop - $mask.offsetHeight) / $mask.offsetHeight; 
    $mask.style.opacity = (1 - opacityRatio.toFixed(3));   
  } else if (scrolled >= cnt01Viewprot * 0.4 && scrolled <= cnt01Viewprot * 0.5) {
    $mask.style.opacity = 0;    
    $cnt01Wrap.classList.remove("show");
  } else if (scrolled >= cnt01Viewprot * 0.5 && scrolled <= cnt01Viewprot * 0.6) {
    $cnt01Wrap.classList.add("show");
  } else if (scrolled >= cnt01Viewprot * 0.7 && scrolled <= cnt01Viewprot * 0.8) {
    $cnt01Container.style.position = "fixed";
    $cnt01Container.style.transform = `translate3d(0px, 0px, 0px)`;
  } else if (scrolled >= cnt01Viewprot * 0.8 && scrolled <= cnt01Viewprot * 0.9) {
    $cnt01Container.style.position = "";    
    $cnt01Container.style.transform = `translate3d(0px, ${winHeight * 3}px, 0px)`;
  }  
}

function scrolledCnt02() {
  const $cnt02Sub = document.querySelectorAll(".cnt02_sub");
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
  const $guideWrap = document.querySelector(".guide_wrap");
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