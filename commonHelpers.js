import{S as f,i as g}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y=document.querySelector("form"),a=document.querySelector("input"),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new URLSearchParams({key:"41708261-c154389f16c12e10553f8f229",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0}),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",i=>{i.preventDefault(),l.innerHTML="",c.style.display="block",m.set("q",a.value.trim()),L(),a.value=""});const L=()=>fetch(`https://pixabay.com/api/?${m}`).then(i=>{if(!i.ok)throw new Errop(i.statusText);return i.json()}).then(({hits:i})=>{if(i.length>0){const s=i.map(n=>{const{webformatURL:o,largeImageURL:e,tags:t,likes:r,views:u,comments:p,downloads:d}=n;return`<li class="gallery-item">
                            <a class="gallery-link" href="${e}">
                                <img
                                    class="gallery-image"
                                    src="${o}"
                                    alt="${t}"
                                />
                                <ul class="img-description">
                                    <li class="img-description-item">Likes<span class="img-description-item-num">${r}</span></li>
                                    <li class="img-description-item">Views<span class="img-description-item-num">${u}</span></li>
                                    <li class="img-description-item">Comments<span class="img-description-item-num">${p}</span></li>
                                    <li class="img-description-item">Downloads<span class="img-description-item-num">${d}</span></li>
                                </ul>
                            </a>
                        </li>`}).join("");l.innerHTML=s,h.refresh()}else g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(i=>{console.log(i)}).finally(()=>{c.style.display="none"});
//# sourceMappingURL=commonHelpers.js.map
