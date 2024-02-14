import{i as n,a as d,S as p}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(i){const r=document.querySelector(".cards");r.innerHTML="",i.forEach(o=>{const s=`<li class="card"> 
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
             </li>`;r.innerHTML+=s})}const m=document.querySelector(".form"),l=document.getElementById("loader");m.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.search.value.trim();if(r===""){n.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}f();const o={key:"42328453-99f2c5c34c77a0496905bbef3",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"},s=new URLSearchParams(o);d.get(`https://pixabay.com/api/?${s}`).then(e=>{const t=e.data;if(t.hits.length===0){const a=document.querySelector(".cards");a.innerHTML="",c(),n.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else u(t.hits),new p(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),c()}).catch(e=>{console.log(e)})});function f(){l.style.display="block"}function c(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
