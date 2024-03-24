import"./assets/vendor-db7463ae.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();//! напиши всю логіку роботи додатка
const a=document.querySelector(".form"),c=document.querySelector(".js-image-container");//! 1. подія
a.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.request.value;console.log(r);//! видалити
l(r).then(o=>{const n=u(o);c.insertAdjacentHTML("beforeend",n),console.log(o);//! видалити
}).catch(o=>{console.log(o)})});//! 2. запит
function l(s){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"43032032-8eb24f10be4f06f56a6a96441",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${o}`;console.log(n);//! видалити
return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}//! 3. рендер
function u({webformatURL:s,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:i}){return`<div class="gallery">
  <div class = "image-container">
    <a class="gallery-link" href="${s}">
    <img class="gallery-image"
    src="${r}" alt="${o}"/>
    </a>
    </div>
    <div class="image-info">
<span>likes: ${n}</span>
<span>views: ${e}</span>
<span>comments: ${t}</span>
<span>downloads: ${i}</span>
 </div></div>`}
//# sourceMappingURL=commonHelpers.js.map
