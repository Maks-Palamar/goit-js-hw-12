import{i as d,a as m,S as u}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(s){const a=document.querySelector(".cards");s.forEach(o=>{const r=`<li class="card"> 
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
             </li>`;a.innerHTML+=r})}const y=document.querySelector(".form"),g=document.getElementById("loader"),l=document.querySelector(".load-more-btn");let n=1,h=15,c="";y.addEventListener("submit",async s=>{if(s.preventDefault(),c=s.target.elements.search.value.trim(),n=1,c===""){d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}F();const a={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:h},o=new URLSearchParams(a);try{const e=(await m.get(`https://pixabay.com/api/?${o}`)).data;if(e.hits.length===0){const t=document.querySelector(".cards");t.innerHTML="",p(),L(),d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else{const t=document.querySelector(".cards");t.innerHTML="",f(e.hits),new u(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),p(),b()}n+=1}catch(r){console.log(r)}});l.addEventListener("click",async s=>{const a={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:h},o=new URLSearchParams(a);try{if(n>1){const e=(await m.get(`https://pixabay.com/api/?${o}`)).data;f(e.hits),new u(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}}catch{console.log(error)}});function F(){g.style.display="block"}function p(){g.style.display="none"}function b(s){l.style.display="flex"}function L(s){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
