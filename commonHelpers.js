import{i as d,a as y,S as w}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function b(s){const r=document.querySelector(".cards");s.forEach(o=>{const a=`<li class="card"> 
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
             </li>`;r.innerHTML+=a})}const p=document.querySelector(".form"),F=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");document.querySelector(".card");const L=document.querySelector(".bottom-loader");let h=window.pageYOffset,n=1,u=15,c="";p.addEventListener("submit",async s=>{if(s.preventDefault(),c=s.target.elements.search.value.trim(),n=1,c===""){d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}S();const r={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:u},o=new URLSearchParams(r);try{const e=(await y.get(`https://pixabay.com/api/?${o}`)).data;if(window.scrollTo({top:0,behavior:"smooth"}),e.hits.length===0){const t=document.querySelector(".cards");t.innerHTML="",l(),m(),d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else{const t=document.querySelector(".cards");t.innerHTML="",b(e.hits),new w(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),l(),v()}n+=1}catch(a){console.log(a)}});f.addEventListener("click",async s=>{P(),m();const r={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:u},o=new URLSearchParams(r);try{if(n>1){const e=(await y.get(`https://pixabay.com/api/?${o}`)).data,t=Math.ceil(e.totalHits/u);if(n>t)return m(),l(),g(),d.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});b(e.hits),new w(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),v(),g(),l(),q()}}catch(a){console.log(a)}});function S(){F.style.display="block"}function l(){F.style.display="none"}function v(){f.style.display="flex"}function m(){f.style.display="none"}function P(){L.style.display="flex"}function g(){L.style.display="none"}function q(){const r=document.querySelector(".cards").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}window.addEventListener("scroll",()=>{const s=window.pageYOffset;s>h?p.style.transform="translate(-50%, -130%)":p.style.transform="translate(-50%, 0)",h=s});
//# sourceMappingURL=commonHelpers.js.map
