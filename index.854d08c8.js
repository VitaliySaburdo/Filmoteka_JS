!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},l={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in l){var a=l[t];delete l[t];var s={id:t,exports:{}};return i[t]=s,a.call(s.exports,s,s.exports),s.exports}var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(t,i){l[t]=i},t.parcelRequired7c6=a),a("5g02X");var s=a("5g02X"),e=a("UL92Z"),n=document.querySelector(".gallery-list"),c=new(0,s.default);function d(t){var i=t.map((function(t){var i=t.id,l=t.original_title,a=t.poster_path,s=t.title,n=t.genre_ids,c=t.release_date;return'<li class="gallery__item" data-id="'.concat(i,'">\n        <img src="').concat(function(t){return t?"https://image.tmdb.org/t/p/w500".concat(t):"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923"}(a),'" alt="').concat(s,'" class="gallery_img" width="395" height="574" />\n        <h2 class="gallery__title">').concat(function(t){var i=t.split("");return i.length>=33?i.slice(0,33).join("")+"...":t}(l),'</h2>\n        <p class="gallery__txt">').concat(function(t){var i=(0,e.getFromStorage)("genresList"),l=[],a=!0,s=!1,n=void 0;try{for(var c,d=t[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){var o=c.value,r=!0,g=!1,p=void 0;try{for(var h,v=i[Symbol.iterator]();!(r=(h=v.next()).done);r=!0){var L=h.value;L.id===o&&l.push(L.name)}}catch(t){g=!0,p=t}finally{try{r||null==v.return||v.return()}finally{if(g)throw p}}}}catch(t){s=!0,n=t}finally{try{a||null==d.return||d.return()}finally{if(s)throw n}}return l.length>2?l.slice(0,2).join(", ")+", Other":l.join(", ")}(n)," | ").concat(function(t){return t?t.split("-")[0]:""}(c),"\n      </li>")})).join("");n.insertAdjacentHTML("beforeend",i)}c.getGenres().then((function(t){var i=t.genres;(0,e.addToStorage)("genresList",i)})),c.fetchTrendingMovie().then((function(t){d(t.results)})),a("5xtVg"),a("UL92Z"),a("j1Fxp"),a("b3EoS");s=a("5g02X"),e=a("UL92Z");var o=new(0,s.default),r=document.querySelector(".pagination-btns"),g=document.querySelector(".page-btn.prev"),p=document.querySelector(".page-btn.next");(0,e.getFromStorage)("total-pages")||(0,e.addToStorage)("total-pages",1e3),(0,e.getFromStorage)("page-pg")||(0,e.addToStorage)("page-pg",1);var h=(0,e.getFromStorage)("page-pg"),v=(0,e.getFromStorage)("total-pages");g&&g.classList.add("is-hidden"),p&&(p.addEventListener("click",(function(){h==v-1&&p.classList.add("is-hidden");1==h&&g.classList.remove("is-hidden");v>1&&v<6?(r.children[h].classList.add("active"),r.children[h-1].classList.remove("active"),h+=1):(h<3?(h+=1,r.children[h+1].classList.add("active"),r.children[h].classList.remove("active")):h>=3&&((h+=1)<=v-2&&(r.children[0].classList.remove("is-hidden"),r.children[1].classList.remove("is-hidden"),r.children[2].textContent=h-2,r.children[3].textContent=h-1,r.children[4].textContent=h,r.children[5].textContent=h+1,r.children[6].textContent=h+2),h>=v-2&&(r.children[7].classList.add("is-hidden"),r.children[8].classList.add("is-hidden")),h==v-1&&(r.children[4].classList.remove("active"),r.children[5].classList.add("active"))),h==v&&(r.children[5].classList.remove("active"),r.children[6].classList.add("active")));o.fetchTrendingMovie().then((function(t){window.scrollTo({top:100,behavior:"smooth"}),d(t.results),console.log(t.results),(0,e.moviesDataUpdate)(t)})),(0,e.addToStorage)("page-pg",h)})),g.addEventListener("click",(function(){h==v&&p.classList.remove("is-hidden");2==h&&g.classList.add("is-hidden");v>1&&v<6?(r.children[h-2].classList.add("active"),r.children[h-1].classList.remove("active"),h-=1):(h<4?(h-=1,r.children[h+1].classList.add("active"),r.children[h+2].classList.remove("active")):h>=3&&h<v-2&&(h-=1,r.children[2].textContent=h-2,r.children[3].textContent=h-1,r.children[4].textContent=h,r.children[5].textContent=h+1,r.children[6].textContent=h+2,3==h&&(r.children[0].classList.add("is-hidden"),r.children[1].classList.add("is-hidden"))),h==v-2?(h-=1,r.children[7].classList.remove("is-hidden"),r.children[8].classList.remove("is-hidden"),r.children[2].textContent=h-2,r.children[3].textContent=h-1,r.children[4].textContent=h,r.children[5].textContent=h+1,r.children[6].textContent=h+2):h==v-1?(h-=1,r.children[4].classList.add("active"),r.children[5].classList.remove("active")):h==v&&(h-=1,r.children[5].classList.add("active"),r.children[6].classList.remove("active")));getSearchForm(h,query,genre,year,sort).then((function(t){window.scrollTo({top:100,behavior:"smooth"}),renderMarkup.renderMarkup(t),(0,e.moviesDataUpdate)(t)})),(0,e.addToStorage)("page-pg",h)})),r.addEventListener("click",(function(t){"page"==t.target.className&&function(t){h=parseInt(t.target.textContent),v>1&&v<6?(r.children[h-1].classList.remove("active"),r.children[h-1].classList.add("active")):(1==h?r.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(v,"</li>"):2==h?r.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(v,"</li>"):3==h?r.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(v,"</li>"):h>3&&(h<=v-2&&(r.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(h-2,'</li>\n\t\t\t<li class="page">').concat(h-1,'</li>\n\t\t\t<li class="page active">').concat(h,'</li>\n\t\t\t<li class="page">').concat(h+1,'</li>\n\t\t\t<li class="page">').concat(h+2,'</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">').concat(v,"</li>")),h>=v-2&&(r.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(h-2,'</li>\n\t\t\t<li class="page">').concat(h-1,'</li>\n\t\t\t<li class="page active">').concat(h,'</li>\n\t\t\t<li class="page">').concat(h+1,'</li>\n\t\t\t<li class="page">').concat(h+2,'</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">').concat(v,"</li>")),h==v-1&&(r.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(v-4,'</li>\n\t\t\t\t<li class="page">').concat(v-3,'</li>\n\t\t\t\t<li class="page">').concat(v-2,'</li>\n\t\t\t\t<li class="page active">').concat(v-1,'</li>\n\t\t\t\t<li class="page">').concat(v,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(v,"</li>"))),h==v&&(r.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(v-4,'</li>\n\t\t\t\t<li class="page">').concat(v-3,'</li>\n\t\t\t\t<li class="page">').concat(v-2,'</li>\n\t\t\t\t<li class="page">').concat(v-1,'</li>\n\t\t\t\t<li class="page active">').concat(v,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(v,"</li>")));h==v?p.classList.add("is-hidden"):p.classList.remove("is-hidden");1==h?g.classList.add("is-hidden"):g.classList.remove("is-hidden");o.fetchTrendingMovie().then((function(t){d(t.results),(0,e.moviesDataUpdate)(t)})),(0,e.addToStorage)("page-pg",h)}(t)}))),"library.html"==location.pathname.split("/").slice(-1)&&(v=1e3,h=1,(0,e.addToStorage)("page-pg",h),(0,e.addToStorage)("total-pages",v)),"library.html"==location.pathname.split("/").slice(-1)&&(o.fetchTrendingMovie().then((function(t){d(t.results),(0,e.moviesDataUpdate)(t),(0,e.addToStorage)("total-pages",v)})),(0,e.addToStorage)("page-pg",h),v>1&&v<6?(r.children[h-1].classList.remove("active"),r.children[h-1].classList.add("active")):(1==h?r.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(v,"</li>"):2==h?r.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(v,"</li>"):3==h?r.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(v,"</li>"):h>3&&(h<=v-2&&(r.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(h-2,'</li>\n\t\t\t<li class="page">').concat(h-1,'</li>\n\t\t\t<li class="page active">').concat(h,'</li>\n\t\t\t<li class="page">').concat(h+1,'</li>\n\t\t\t<li class="page">').concat(h+2,'</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">').concat(v,"</li>")),h>=v-2&&(r.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(h-2,'</li>\n\t\t\t<li class="page">').concat(h-1,'</li>\n\t\t\t<li class="page active">').concat(h,'</li>\n\t\t\t<li class="page">').concat(h+1,'</li>\n\t\t\t<li class="page">').concat(h+2,'</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">').concat(v,"</li>")),h==v-1&&(r.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(v-4,'</li>\n\t\t\t\t<li class="page">').concat(v-3,'</li>\n\t\t\t\t<li class="page">').concat(v-2,'</li>\n\t\t\t\t<li class="page active">').concat(v-1,'</li>\n\t\t\t\t<li class="page">').concat(v,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(v,"</li>"))),h==v&&(r.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(v-4,'</li>\n\t\t\t\t<li class="page">').concat(v-3,'</li>\n\t\t\t\t<li class="page">').concat(v-2,'</li>\n\t\t\t\t<li class="page">').concat(v-1,'</li>\n\t\t\t\t<li class="page active">').concat(v,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(v,"</li>"))),h==v?p.classList.add("is-hidden"):p.classList.remove("is-hidden"),1==h?g.classList.add("is-hidden"):g.classList.remove("is-hidden"))}();
//# sourceMappingURL=index.854d08c8.js.map
