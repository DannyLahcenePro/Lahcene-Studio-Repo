import"./main-D0qWa0L8.js";import{v as i}from"./video-preloader-BgEkNBjW.js";import{T as h}from"./three-animation-DnUW4nHC.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".projects-names"),a=document.querySelectorAll(".projects-category"),n=document.getElementById("loader");i.videosLoaded===0&&(n.style.display="flex",i.preloadVideos().then(()=>{n.style.display="none"}).catch(e=>{console.error("Error loading videos:",e),n.style.display="none"}));function l(e){switch(e){case"design":return"linear-gradient(129.1deg, #FF153C 14.5%, #FF5387 39.11%, #FF8438 84.05%)";case"development":return"linear-gradient(142deg, #2654EC 7.83%, #5B5BFF 55.07%, #4D00FF 95.88%)";case"generative":return"linear-gradient(50deg, #FF5757 0%, #E743CC 46.31%, #5765FF 95.94%)";default:return""}}function c(){a.forEach(e=>{e.classList.remove("hovered"),Object.assign(e.style,{color:"",background:"",webkitBackgroundClip:"",webkitTextFillColor:"",paddingLeft:"4vw"})})}function g(e){const o=e.getAttribute("data-category"),d=e.getAttribute("data-src");r.forEach(t=>t.style.color="grey"),a.forEach(t=>{t.getAttribute("data-category")===o?(t.classList.add("hovered"),Object.assign(t.style,{color:"white",paddingLeft:"2vw"})):t.classList.remove("hovered")}),e.style.background=l(o),e.style.webkitBackgroundClip="text",e.style.webkitTextFillColor="transparent";const v={default:"default",design:"design",development:"development",generative:"touchdesigner"};threeAnimation.updateColors(v[o]);const s=i.getVideo(d);s?threeAnimation.updateVideoTexture(s.blobUrl):threeAnimation.updateVideoTexture(d)}function u(e){c(),r.forEach(o=>o.style.color="white"),Object.assign(e.style,{background:"",webkitBackgroundClip:"",webkitTextFillColor:""})}function f(e){}function m(){threeAnimation.updateColors("default")}r.forEach(e=>{e.addEventListener("mouseenter",()=>{g(e)}),e.addEventListener("mouseleave",()=>{u(e),m()}),e.addEventListener("click",()=>void 0)}),threeAnimation.toggleBokeh(!1)});window.threeAnimation=new h("circular");
//# sourceMappingURL=projects-C6Yu6Tp5.js.map
