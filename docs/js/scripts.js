const rel=document.querySelector(".burMenu"),nav=document.querySelector(".menu");rel.onclick=function(){nav.classList.toggle("menuOpen"),rel.classList.toggle("burOpen")};const preloader=document.querySelector(".preloader");window.onload=()=>{document.querySelector(".preloader").style.display="none"};const but=document.querySelector(".butt"),inputform=document.querySelector(".contactForm");but.onclick=function(){inputform.classList.toggle("showForm")};