(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();window.addEventListener("beforeunload",()=>{if(window.threeAnimation){window.removeEventListener("resize",window.threeAnimation.onResize),window.removeEventListener("mousemove",window.threeAnimation.onMouseMove),window.threeAnimation.gridPoints.forEach(s=>{s.geometry.dispose(),s.material.dispose()});const n=document.querySelector("canvas");n&&n.remove()}});const y=700,h=700,p={"index.html":{top:"header",center:".container",bottom:"footer"},"projects.html":{top:"header",center:".menu-projects-content",bottom:"footer"},"about.html":{top:"header",center:".about-container",bottom:"footer"},"contact.html":{top:"header",center:".contact-container",bottom:"footer"}};function u(){const n=window.location.pathname,s=n.substring(n.lastIndexOf("/")+1)||"index.html";return p[s]}function m(){const n=u();if(!n)return;const c=(window.location.pathname.split("/").pop()||"index.html")==="index.html",e=document.querySelector("header"),t=document.querySelector("footer");c?(e&&setTimeout(()=>{e.classList.remove("fade-initial"),e.classList.add("fade-transition"),e.style.opacity="1",e.style.transform="translateY(0)",e.querySelectorAll("a").forEach((r,l)=>{setTimeout(()=>{r.classList.remove("fade-initial"),r.classList.add("fade-transition"),r.style.opacity="1",r.style.transform="translateY(0)"},100*(l+1))})},100),t&&setTimeout(()=>{t.classList.remove("fade-initial"),t.classList.add("fade-transition"),t.style.opacity="1",t.style.transform="translateY(0)"},300)):(e&&(e.classList.remove("fade-initial"),e.style.opacity="1",e.style.transform="translateY(0)",e.querySelectorAll("a").forEach(i=>{i.classList.remove("fade-initial"),i.style.opacity="1",i.style.transform="translateY(0)"})),t&&(t.classList.remove("fade-initial"),t.style.opacity="1",t.style.transform="translateY(0)"));const o=document.querySelector(n.center);o&&setTimeout(()=>{if(o.classList.remove("fade-initial"),o.classList.add("fade-transition"),o.style.opacity="1",o.style.transform="translateY(0)",n.center===".about-container")document.querySelectorAll(".bento-item").forEach((r,l)=>{setTimeout(()=>{r.classList.remove("fade-initial"),r.classList.add("fade-transition"),r.style.opacity="1",r.style.transform="translateY(0)";const d=r.children;Array.from(d).forEach((a,f)=>{setTimeout(()=>{a.style.opacity="1",a.style.transform="translateY(0)"},50*(f+1))})},200*(l+1))});else{const i=o.children;Array.from(i).forEach((r,l)=>{setTimeout(()=>{r.classList.remove("fade-initial"),r.classList.add("fade-transition"),r.style.opacity="1",r.style.transform="translateY(0)";const d=r.children;Array.from(d).forEach((a,f)=>{setTimeout(()=>{a.classList.remove("fade-initial"),a.classList.add("fade-transition"),a.style.opacity="1",a.style.transform="translateY(0)"},50*(f+1))})},100*(l+1))})}},200)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{setTimeout(m,1200)}):setTimeout(m,1200);function L(){const n=u();if(!n)return;if((document.activeElement.getAttribute("href")||"")==="index.html"){const e=document.querySelector("header"),t=document.querySelector("footer"),o=document.querySelector(n.center);e&&(e.classList.add("fade-transition"),e.style.opacity="0",e.style.transform="translateY(20px)"),o&&setTimeout(()=>{o.classList.add("fade-transition"),o.style.opacity="0",o.style.transform="translateY(20px)"},100),t&&setTimeout(()=>{t.classList.add("fade-transition"),t.style.opacity="0",t.style.transform="translateY(20px)"},200)}else{const e=document.querySelector(n.center);e&&(e.classList.add("fade-transition"),e.style.opacity="0",e.style.transform="translateY(20px)")}}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("a[href]").forEach(n=>{n.addEventListener("click",function(s){if(this.getAttribute("target")==="_blank"||this.getAttribute("href").startsWith("#")||this.getAttribute("href").startsWith("mailto:")||this.getAttribute("href").startsWith("tel:"))return;s.preventDefault();const c=this.getAttribute("href");window.threeAnimation&&window.threeAnimation.fadeOutPoints(h),L(),setTimeout(()=>{window.location.href=c},y)})})});
//# sourceMappingURL=main-C8F5p8Aj.js.map