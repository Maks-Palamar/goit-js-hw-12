import{i as l,a as d,S as m}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(r){const a=document.querySelector(".cards");a.innerHTML="",r.forEach(o=>{const s=`<li class="card"> 
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
             </li>`;a.innerHTML+=s})}const h=document.querySelector(".form"),g=document.getElementById("loader"),y=document.querySelector(".load-more-btn");let i=1,f=15,n;h.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements.search.value.trim(),n===""){l.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}F();const a={key:"42328453-99f2c5c34c77a0496905bbef3",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:f},o=new URLSearchParams(a);try{const e=(await d.get(`https://pixabay.com/api/?${o}`)).data;if(e.hits.length===0){const t=document.querySelector(".cards");t.innerHTML="",p(),l.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else u(e.hits),new m(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),p();i+=1}catch(s){console.log(s)}});y.addEventListener("click",async r=>{const a={key:"42328453-99f2c5c34c77a0496905bbef3",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:f},o=new URLSearchParams(a);if(i>1){const e=(await d.get(`https://pixabay.com/api/?${o}`)).data;u(e.hits),new m(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}});function F(){g.style.display="block"}function p(){g.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
