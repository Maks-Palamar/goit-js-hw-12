import{i,a as y,S as b}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function w(a){const s=document.querySelector(".cards");a.forEach(o=>{const r=`<li class="card"> 
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
             </li>`;s.innerHTML+=r})}const n=document.querySelector(".form"),F=document.querySelector(".loader"),m=document.querySelector(".load-more-btn");document.querySelector(".card");const L=document.querySelector(".bottom-loader");let f=window.pageYOffset,c=1,u=15,h="";n.addEventListener("submit",async a=>{if(a.preventDefault(),h=a.target.elements.search.value.trim(),c=1,h===""){i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}S();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:h,image_type:"photo",orientation:"horizontal",safesearch:"true",page:c,per_page:u},o=new URLSearchParams(s);try{const r=await y.get(`https://pixabay.com/api/?${o}`),e=r.data;if(window.scrollTo({top:0,behavior:"smooth"}),e.hits.length===0){const t=document.querySelector(".cards");t.innerHTML="",d(),l(),i.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else{const t=document.querySelector(".cards");if(t.innerHTML="",w(e.hits),new b(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),d(),v(),n.reset(),u>e.hits.length&&r.status===200)return l(),n.reset(),i.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}c+=1}catch(r){return console.log(r),l(),g(),d(),n.reset(),i.error({position:"bottomRight",message:"Sorry, something went wrong..."})}});m.addEventListener("click",async a=>{P(),l();const s={key:"42328453-99f2c5c34c77a0496905bbef3",q:h,image_type:"photo",orientation:"horizontal",safesearch:"true",page:c,per_page:u},o=new URLSearchParams(s);try{if(c>1){const r=await y.get(`https://pixabay.com/api/?${o}`),e=r.data,t=Math.ceil(e.totalHits/u);if(c>t)return l(),d(),g(),i.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});if(w(e.hits),new b(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),v(),g(),d(),R(),c+=1,u>e.hits.length&&r.status===200)return l(),n.reset(),i.error({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}}catch(r){return console.log(r),l(),g(),d(),n.reset(),i.error({position:"bottomRight",message:"Sorry, something went wrong..."})}});function S(){F.style.display="block"}function d(){F.style.display="none"}function v(){m.style.display="flex"}function l(){m.style.display="none"}function P(){L.style.display="flex"}function g(){L.style.display="none"}function R(){const s=document.querySelector(".cards").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}window.addEventListener("scroll",()=>{const a=window.pageYOffset;a>f?n.style.transform="translate(-50%, -130%)":n.style.transform="translate(-50%, 0)",f=a});
//# sourceMappingURL=commonHelpers.js.map
