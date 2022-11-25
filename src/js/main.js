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
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

window.addEventListener("resize", function() {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;

  console.log(winWidth);
  
  $pinSpacer.style.width = winWidth + "px";
  $pinSpacer.style.display = "block";
  $pinSpacer.style.flexShrink = 1;
  $pinSpacer.style.float = "none";
  $pinSpacer.style.maxWidth = winWidth + "px";
  $pinSpacer.style.height = winHeight * 6 + "px";
  $pinSpacer.style.inset = "0px 0px " + winHeight + "px";
  $pinSpacer.style.paddingBottom = (winHeight * 6) / 2 + "px";
  $cnt01Container.style.width = winWidth + "px";
  $cnt01Container.style.maxWidth = winWidth + "px";
  $cnt01Container.style.height = winHeight * 3 + "px";
  $cnt01Container.style.maxHeight = winHeight * 3 + "px";
  $cnt01Container.style.inset = "0px auto auto 0px";
});

window.onload = function(){
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  
  $pinSpacer.style.width = winWidth + "px";
  $pinSpacer.style.height = winHeight * 6 + "px";
  $pinSpacer.style.inset = "0px 0px " + winHeight + "px";
  $pinSpacer.style.paddingBottom = (winHeight * 6) / 2 + "px";
  $cnt01Container.style.width = winWidth + "px";
  $cnt01Container.style.height = winHeight * 3 + "px";
  $cnt01Container.style.inset = "0px auto auto 0px";

  setTimeout(AddClassShow, 1000);
}

window.addEventListener("scroll", function(){
  winHeight = window.innerHeight;
  scroll = window.scrollY;
  let ratio = (window.scrollY - $cnt01Wrap.offsetTop) / 75;
  let opacityRatio = (window.innerHeight) / (window.scrollY *2);  
  console.log(scroll);

  if (scroll > $cnt01Wrap.offsetTop && scroll < ($cnt01Wrap.offsetTop + $cnt01Wrap.offsetHeight) * 0.6){
    $cnt01Container.style.position = "fixed";
    
    if (ratio <= 1 ) {
      ratio = 1
    } else if (ratio >= 20) {
      ratio = 20;
    }    
    $cnt01Container.style.transform = `translate3d(0px, 0px, 0px)`
    $cnt01Container.style.top = 0;
    $cnt01Container.style.left = 0;
    $mask.style.transform = `scale(${ratio.toFixed(2)}, ${ratio.toFixed(2)})` + "translate3d(0px, 0px, 0px)";  
    $mask.style.transformOrigin = "50% 40%";
    $mask.style.display = "flex";
    $mask.style.opacity = 1;
    $bg.classList.remove("show");
  }

  if (ratio > 8) {
    $mask.style.opacity = opacityRatio;
  }

  if (scroll >= ($cnt02Wrap.offsetTop) * 0.4) {
    $mask.style.opacity = 0;
  }
});

window.addEventListener("scroll", function() {
  scroll = window.scrollY;
  winHeight = window.innerHeight;

  if (scroll >= ($cnt02Wrap.offsetTop) * 0.75) {
    $cnt01Container.style.top = "";
    $cnt01Container.style.left = "";
    $mask.style.display = "none";
    $cnt01Container.style.position = "";
    $cnt01Container.style.transform = `translate3d(0px, ${winHeight * 3}px, 0px)`
  }
});

window.addEventListener("scroll", function() {
  scroll = window.scrollY;
  if (scroll > $videoWrap.offsetTop && scroll < $cnt01Wrap.offsetTop) {
    $cnt01Container.style.position = "absolute";
  }
});


let scroll = window.scrollY;
window.addEventListener("scroll", function(){
  if (scroll > $videoWrap.offsetTop + $videoWrap.offsetHeight ) {  
    setTimeout(AddClassShow, 1000);   
  }
});


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