(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();console.log("main");window.addEventListener("beforeunload",()=>{if(window.threeAnimation){window.removeEventListener("resize",window.threeAnimation.onResize),window.removeEventListener("mousemove",window.threeAnimation.onMouseMove),window.threeAnimation.gridPoints.forEach(n=>{n.geometry.dispose(),n.material.dispose()});const e=document.querySelector("canvas");e&&e.remove()}});const u=700,f=700,m={"index.html":{top:"header",center:".container",bottom:"footer"},"projects.html":{top:"header",center:".menu-projects-content",bottom:"footer"},"about.html":{top:"header",center:".about-container",bottom:"footer"},"contact.html":{top:"header",center:".contact-container",bottom:"footer"}};function l(){const e=window.location.pathname;console.log("Full path:",e);let n=e.split("/").filter(Boolean).pop()||"";const s={"":"index.html",projects:"projects.html",about:"about.html",contact:"contact.html"}[n]||"index.html";return console.log("Detected page:",s),m[s]}function h(){console.log("hey0");const e=l();if(!e)return;console.log("hey1");const n=document.querySelector(e.top),r=document.querySelector(e.center),s=document.querySelector(e.bottom),t=(o,i=0)=>{o&&setTimeout(()=>{o.classList.add("fade-transition"),Array.from(o.children).forEach((a,c)=>{setTimeout(()=>{a.classList.add("fade-transition")},c*100)})},i)};requestAnimationFrame(()=>{t(n,200),t(r,400),t(s,600),document.querySelectorAll(".bento-item").forEach((i,a)=>{setTimeout(()=>{i.classList.add("fade-transition"),i.classList.add("visible")},800+a*100)})})}function g(){const e=l();if(!e)return;const n=document.querySelector(e.top),r=document.querySelector(e.center),s=document.querySelector(e.bottom),t=(o,i=0)=>{o&&setTimeout(()=>{o.classList.remove("fade-transition"),o.classList.add("fade-initial"),Array.from(o.children).forEach((a,c)=>{setTimeout(()=>{a.classList.remove("fade-transition"),a.classList.add("fade-initial")},c*50)})},i)};requestAnimationFrame(()=>{t(s,0),t(r,100),t(n,200),document.querySelectorAll(".bento-item").forEach((i,a)=>{setTimeout(()=>{i.classList.remove("visible","hover","fade-transition"),i.classList.add("fade-initial")},a*50)})})}function d(){console.log("Initializing animations...");const e=l();if(console.log("Got config:",e),!e){console.log("No config found for current page");return}const n=[document.querySelector(e.top),document.querySelector(e.center),document.querySelector(e.bottom)].filter(Boolean);console.log("Found elements:",n.length),n.forEach(r=>{r.classList.add("fade-initial"),Array.from(r.children).forEach(s=>{s.classList.add("fade-initial")})}),console.log("Starting fadeInUi in 100ms..."),setTimeout(h,100)}console.log("Document ready state:",document.readyState);document.readyState==="loading"?(console.log("Adding DOMContentLoaded listener"),document.addEventListener("DOMContentLoaded",d)):(console.log("Document already loaded, initializing now"),d());window.addEventListener("pageshow",e=>{e.persisted&&d()});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("a[href]").forEach(e=>{e.addEventListener("click",function(n){if(this.getAttribute("target")==="_blank"||this.getAttribute("href").startsWith("#")||this.getAttribute("href").startsWith("mailto:")||this.getAttribute("href").startsWith("tel:"))return;n.preventDefault();const r=this.getAttribute("href");g(),window.threeAnimation&&window.threeAnimation.fadeOutPoints(f),setTimeout(()=>{window.location.href=r},u)})})});
//# sourceMappingURL=main-C_OIAiG7.js.map
