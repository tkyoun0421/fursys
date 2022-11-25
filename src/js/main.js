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

window.onload = function(){
  setTimeout(AddClassShow, 1000);
}

window.addEventListener("scroll", function() {
  const cnt01Viewprot = $cnt01Wrap.offsetTop + $cnt01Wrap.offsetHeight;
  let scrolled = window.scrollY;
  let ratio = ((window.scrollY + $mask.offsetTop - $mask.offsetHeight) / $mask.offsetHeight) * 15;
  winHeight = window.innerHeight;

  console.log("scroll:" + scrolled);
  console.log("ratio: " + cnt01Viewprot );
  // console.log("컨텐츠1 끝나는 뷰포트 높이: " + cnt01Viewprot * 0.3);
  
  if (ratio < 1) {
    ratio = 1;
  }

  if (scrolled <= $cnt01Wrap.offsetTop) {
    $cnt01Container.style.position = "";
    $cnt01Container.style.top = "0";
    $cnt01Container.style.left = "0";
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
  
  
});

// window.addEventListener("scroll", function(){
//   scroll = window.scrollY;
//   winHeight = window.innerHeight;


//   let ratio = (window.scrollY - $cnt01Wrap.offsetTop) / 75;
//   let opacityRatio = (window.innerHeight) / (window.scrollY *2);  


//   if (scroll > $cnt01Wrap.offsetTop && scroll < ($cnt01Wrap.offsetTop + $cnt01Wrap.offsetHeight) * 0.4){
//     $cnt01Container.style.position = "fixed";
    
//     if (ratio <= 1 ) {
//       ratio = 1
//     } else if (ratio >= 20) {
//       ratio = 20;
//     }
//     $mask.style.transform =  `translate3d(0px, 0px, 0px) scale(${ratio.toFixed(2)}, ${ratio.toFixed(2)})`;  
//     $mask.style.transformOrigin = "50% 40%";
//     $mask.style.display = "flex";
//     $mask.style.opacity = 1;    
//   }

//   if (ratio > 7) {
//     $mask.style.opacity = opacityRatio;
//   }

//   if (scroll >= ($cnt02Wrap.offsetTop) * 0.3) {
//     $cnt01Wrap.classList.remove("show");
//   }

//   if (scroll >= ($cnt02Wrap.offsetTop) * 0.4) {
//     if ($cnt01Wrap.classList.contains("show") != true) {
//       $cnt01Wrap.classList.add("show");    
//     }
//   }

//   if (scroll >= ($cnt02Wrap.offsetTop) * 0.5) {
//     $mask.style.opacity = 0;
//   }
// });

// window.addEventListener("scroll", function() {
//   scroll = window.scrollY;
//   winHeight = window.innerHeight;


//   if (scroll >= $cnt02Wrap.offsetTop * 0.8) {
//     $mask.style.display = "none";
//     $cnt01Container.style.height = `${winHeight * 3}px`;
//     $cnt01Container.style.position = "";    
//     $cnt01Container.style.transform = `translate3d(0px, ${winHeight * 3}px, 0px)`;    
//   } else if (scroll > $cnt01Wrap.offsetTop && scroll <= ($cnt02Wrap.offsetTop) * 0.8) {
//     $cnt01Container.style.position = "fixed"; 
//     $cnt01Container.style.transform = `translate3d(0px, 0px, 0px)`;
//   }
// });

// window.addEventListener("scroll", function() {
//   scroll = window.scrollY;
//   if (scroll > $videoWrap.offsetTop && scroll < $cnt01Wrap.offsetTop) {
//     $cnt01Container.style.position = "absolute";
//   }
// });

// window.addEventListener("scroll", function(){
//   if (scroll > $videoWrap.offsetTop + $videoWrap.offsetHeight ) {  
//     setTimeout(AddClassShow, 1000);   
//   }
// });


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