import{i as d,a as g,S as h}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function y(r){const s=document.querySelector(".cards");r.forEach(o=>{const a=`<li class="card"> 
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
             </li>`;s.innerHTML+=a})}const p=document.querySelector(".form"),w=document.getElementById("loader"),m=document.querySelector(".load-more-btn");document.querySelector(".card");let f=window.pageYOffset,n=1,u=15,c="";p.addEventListener("submit",async r=>{if(r.preventDefault(),c=r.target.elements.search.value.trim(),n=1,c===""){d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}b();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:u},o=new URLSearchParams(s);try{const e=(await g.get(`https://pixabay.com/api/?${o}`)).data;if(window.scrollTo({top:0,behavior:"smooth"}),e.hits.length===0){const t=document.querySelector(".cards");t.innerHTML="",l(),F(),d.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else{const t=document.querySelector(".cards");t.innerHTML="",y(e.hits),new h(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),l(),L()}n+=1}catch(a){console.log(a)}});m.addEventListener("click",async r=>{b();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:c,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:u},o=new URLSearchParams(s);try{if(n>1){const e=(await g.get(`https://pixabay.com/api/?${o}`)).data,t=Math.ceil(e.totalHits/u);if(n>t)return F(),l(),d.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});y(e.hits),new h(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),l(),v()}}catch(a){console.log(a)}});function b(){w.style.display="block"}function l(){w.style.display="none"}function L(r){m.style.display="flex"}function F(r){m.style.display="none"}function v(){const s=document.querySelector(".cards").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}window.addEventListener("scroll",()=>{const r=window.pageYOffset;r>f?p.style.transform="translate(-50%, -130%)":p.style.transform="translate(-50%, 0)",f=r});
//# sourceMappingURL=commonHelpers.js.map
