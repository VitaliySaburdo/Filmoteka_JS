var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("cyIMT");var o=r("cyIMT"),i=r("31u3U");const l=document.querySelector(".gallery-list"),c=new(0,o.default);function a(e){const t=e.map((({id:e,original_title:t,poster_path:n,title:r,genre_ids:o,release_date:l})=>`<li class="gallery__item" data-id="${e}">\n        <img src="${function(e){return e?`https://image.tmdb.org/t/p/w500${e}`:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923"}(n)}" alt="${r}" class="gallery_img" width="395" height="574" />\n        <h2 class="gallery__title">${function(e){const t=e.split("");return t.length>=33?t.slice(0,33).join("")+"...":e}(t)}</h2>\n        <p class="gallery__txt">${function(e){const t=(0,i.getFromStorage)("genresList"),n=[];for(const r of e)for(const e of t)e.id===r&&n.push(e.name);return n.length>2?n.slice(0,2).join(", ")+", Other":n.join(", ")}(o)} | ${function(e){return e?e.split("-")[0]:""}(l)}\n      </li>`)).join("");l.insertAdjacentHTML("beforeend",t)}c.getGenres().then((({genres:e})=>{(0,i.addToStorage)("genresList",e)})),c.fetchTrendingMovie().then((e=>{a(e.results)})),r("bTcpz"),r("31u3U"),r("2YGUk"),r("gyeM6");o=r("cyIMT");r("31u3U");const s=new(0,o.default),u=document.querySelector(".gallery-list"),d=(document.querySelector(".pagination-btns"),document.querySelector(".page-btn.prev")),g=document.querySelector(".page-btn.next");!async function(){g.addEventListener("click",(async function(){if(s.currentPage<total_pages){s.currentPage+=1;const{results:e}=await s.fetchTrendingMovie();u.innerHTML="",a(e)}})),d.addEventListener("click",(async function(){if(s.currentPage>1){s.currentPage--;const{results:e}=await s.fetchTrendingMovie();u.innerHTML="",a(e)}}))}();const f=new(0,(o=r("cyIMT")).default),p=document.querySelector("#header-form"),y=document.querySelector(".gallery-list");p.addEventListener("submit",(async function(e){e.preventDefault(),T=e.currentTarget.elements.searchQuery.value.trim();try{const{results:e,page:t,total_pages:n}=await f.getFilmOnSearch(T);m=t,h=n,_=e}catch(e){console.log(e)}y.innerHTML="",a(_),console.log(h)}));let m=1,h=1,T="",_=[];
//# sourceMappingURL=index.de25cf11.js.map
