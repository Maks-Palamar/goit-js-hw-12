import{i as d,a as m,S as g}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(r){const s=document.querySelector(".cards");r.forEach(o=>{const a=`<li class="card"> 
                <a class="card-link" href="${o.largeImageURL}">
                    <img class="card-img" src="${o.webformatURL}" alt="${o.tags}" data-source="${o.largeImageURL}" />
                </a>
                <div class="card-data">
                    <div class="data-wrap">
                        <p>Likes: </p>
                        <span>${o.likes}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Views: </p>
                        <span>${o.views}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Comments: </p>
                        <span>${o.comments}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Downloads: </p>
                        <span>${o.downloads}</span>
                    </div>
                </div>
             </li>`;s.innerHTML+=a})}const b=document.querySelector(".form"),h=document.getElementById("loader"),u=document.querySelector(".load-more-btn");let n=1,p=15,c="";b.addEventListener("submit",async r=>{if(r.preventDefault(),c=r.target.elements.search.value.trim(),n=1,c===""){d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}y();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:p},o=new URLSearchParams(s);try{const e=(await m.get(`https://pixabay.com/api/?${o}`)).data;if(e.hits.length===0){const t=document.querySelector(".cards");t.innerHTML="",l(),F(),d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else{const t=document.querySelector(".cards");t.innerHTML="",f(e.hits),new g(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),l(),L()}n+=1}catch(a){console.log(a)}});u.addEventListener("click",async r=>{y();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:p},o=new URLSearchParams(s);try{if(n>1){const e=(await m.get(`https://pixabay.com/api/?${o}`)).data,t=Math.ceil(e.totalHits/p);if(n>t)return F(),l(),d.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});f(e.hits),new g(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),l()}}catch(a){console.log(a)}});function y(){h.style.display="block"}function l(){h.style.display="none"}function L(r){u.style.display="flex"}function F(r){u.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
