var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},l={},s=t.parcelRequired7c6;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in l){var s=l[t];delete l[t];var e={id:t,exports:{}};return i[t]=e,s.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,i){l[t]=i},t.parcelRequired7c6=s),s("cyIMT");var e=s("cyIMT"),a=s("31u3U");const n=document.querySelector(".gallery-list"),c=new(0,e.default);function d(t){const i=t.map((({id:t,original_title:i,poster_path:l,title:s,genre_ids:e,release_date:n})=>`<li class="gallery__item" data-id="${t}">\n        <img src="${function(t){return t?`https://image.tmdb.org/t/p/w500${t}`:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923"}(l)}" alt="${s}" class="gallery_img" width="395" height="574" />\n        <h2 class="gallery__title">${function(t){const i=t.split("");return i.length>=33?i.slice(0,33).join("")+"...":t}(i)}</h2>\n        <p class="gallery__txt">${function(t){const i=(0,a.getFromStorage)("genresList"),l=[];for(const s of t)for(const t of i)t.id===s&&l.push(t.name);return l.length>2?l.slice(0,2).join(", ")+", Other":l.join(", ")}(e)} | ${function(t){return t?t.split("-")[0]:""}(n)}\n      </li>`)).join("");n.insertAdjacentHTML("beforeend",i)}c.getGenres().then((({genres:t})=>{(0,a.addToStorage)("genresList",t)})),c.fetchTrendingMovie().then((t=>{d(t.results)})),s("bTcpz"),s("31u3U"),s("2YGUk"),s("gyeM6");e=s("cyIMT"),a=s("31u3U");const o=new(0,e.default),r=document.querySelector(".pagination-btns"),g=document.querySelector(".page-btn.prev"),p=document.querySelector(".page-btn.next");(0,a.getFromStorage)("total-pages")||(0,a.addToStorage)("total-pages",1e3),(0,a.getFromStorage)("page-pg")||(0,a.addToStorage)("page-pg",1);let h=(0,a.getFromStorage)("page-pg"),v=(0,a.getFromStorage)("total-pages");g&&g.classList.add("is-hidden"),p&&(p.addEventListener("click",(function(){h==v-1&&p.classList.add("is-hidden");1==h&&g.classList.remove("is-hidden");v>1&&v<6?(r.children[h].classList.add("active"),r.children[h-1].classList.remove("active"),h+=1):(h<3?(h+=1,r.children[h+1].classList.add("active"),r.children[h].classList.remove("active")):h>=3&&(h+=1,h<=v-2&&(r.children[0].classList.remove("is-hidden"),r.children[1].classList.remove("is-hidden"),r.children[2].textContent=h-2,r.children[3].textContent=h-1,r.children[4].textContent=h,r.children[5].textContent=h+1,r.children[6].textContent=h+2),h>=v-2&&(r.children[7].classList.add("is-hidden"),r.children[8].classList.add("is-hidden")),h==v-1&&(r.children[4].classList.remove("active"),r.children[5].classList.add("active"))),h==v&&(r.children[5].classList.remove("active"),r.children[6].classList.add("active")));o.fetchTrendingMovie().then((t=>{window.scrollTo({top:100,behavior:"smooth"}),d(t.results),console.log(t.results),(0,a.moviesDataUpdate)(t)})),(0,a.addToStorage)("page-pg",h)})),g.addEventListener("click",(function(){h==v&&p.classList.remove("is-hidden");2==h&&g.classList.add("is-hidden");v>1&&v<6?(r.children[h-2].classList.add("active"),r.children[h-1].classList.remove("active"),h-=1):(h<4?(h-=1,r.children[h+1].classList.add("active"),r.children[h+2].classList.remove("active")):h>=3&&h<v-2&&(h-=1,r.children[2].textContent=h-2,r.children[3].textContent=h-1,r.children[4].textContent=h,r.children[5].textContent=h+1,r.children[6].textContent=h+2,3==h&&(r.children[0].classList.add("is-hidden"),r.children[1].classList.add("is-hidden"))),h==v-2?(h-=1,r.children[7].classList.remove("is-hidden"),r.children[8].classList.remove("is-hidden"),r.children[2].textContent=h-2,r.children[3].textContent=h-1,r.children[4].textContent=h,r.children[5].textContent=h+1,r.children[6].textContent=h+2):h==v-1?(h-=1,r.children[4].classList.add("active"),r.children[5].classList.remove("active")):h==v&&(h-=1,r.children[5].classList.add("active"),r.children[6].classList.remove("active")));getSearchForm(h,query,genre,year,sort).then((t=>{window.scrollTo({top:100,behavior:"smooth"}),renderMarkup.renderMarkup(t),(0,a.moviesDataUpdate)(t)})),(0,a.addToStorage)("page-pg",h)})),r.addEventListener("click",(function(t){"page"==t.target.className&&function(t){h=parseInt(t.target.textContent),v>1&&v<6?(r.children[h-1].classList.remove("active"),r.children[h-1].classList.add("active")):(1==h?r.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`:2==h?r.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`:3==h?r.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`:h>3&&(h<=v-2&&(r.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${h-2}</li>\n\t\t\t<li class="page">${h-1}</li>\n\t\t\t<li class="page active">${h}</li>\n\t\t\t<li class="page">${h+1}</li>\n\t\t\t<li class="page">${h+2}</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`),h>=v-2&&(r.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${h-2}</li>\n\t\t\t<li class="page">${h-1}</li>\n\t\t\t<li class="page active">${h}</li>\n\t\t\t<li class="page">${h+1}</li>\n\t\t\t<li class="page">${h+2}</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">${v}</li>`),h==v-1&&(r.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${v-4}</li>\n\t\t\t\t<li class="page">${v-3}</li>\n\t\t\t\t<li class="page">${v-2}</li>\n\t\t\t\t<li class="page active">${v-1}</li>\n\t\t\t\t<li class="page">${v}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${v}</li>`)),h==v&&(r.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${v-4}</li>\n\t\t\t\t<li class="page">${v-3}</li>\n\t\t\t\t<li class="page">${v-2}</li>\n\t\t\t\t<li class="page">${v-1}</li>\n\t\t\t\t<li class="page active">${v}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${v}</li>`));h==v?p.classList.add("is-hidden"):p.classList.remove("is-hidden");1==h?g.classList.add("is-hidden"):g.classList.remove("is-hidden");o.fetchTrendingMovie().then((t=>{d(t.results),(0,a.moviesDataUpdate)(t)})),(0,a.addToStorage)("page-pg",h)}(t)}))),"library.html"==location.pathname.split("/").slice(-1)&&(v=1e3,h=1,(0,a.addToStorage)("page-pg",h),(0,a.addToStorage)("total-pages",v)),"library.html"==location.pathname.split("/").slice(-1)&&(o.fetchTrendingMovie().then((t=>{d(t.results),(0,a.moviesDataUpdate)(t),(0,a.addToStorage)("total-pages",v)})),(0,a.addToStorage)("page-pg",h),v>1&&v<6?(r.children[h-1].classList.remove("active"),r.children[h-1].classList.add("active")):(1==h?r.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`:2==h?r.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`:3==h?r.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`:h>3&&(h<=v-2&&(r.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${h-2}</li>\n\t\t\t<li class="page">${h-1}</li>\n\t\t\t<li class="page active">${h}</li>\n\t\t\t<li class="page">${h+1}</li>\n\t\t\t<li class="page">${h+2}</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v}</li>`),h>=v-2&&(r.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${h-2}</li>\n\t\t\t<li class="page">${h-1}</li>\n\t\t\t<li class="page active">${h}</li>\n\t\t\t<li class="page">${h+1}</li>\n\t\t\t<li class="page">${h+2}</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">${v}</li>`),h==v-1&&(r.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${v-4}</li>\n\t\t\t\t<li class="page">${v-3}</li>\n\t\t\t\t<li class="page">${v-2}</li>\n\t\t\t\t<li class="page active">${v-1}</li>\n\t\t\t\t<li class="page">${v}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${v}</li>`)),h==v&&(r.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${v-4}</li>\n\t\t\t\t<li class="page">${v-3}</li>\n\t\t\t\t<li class="page">${v-2}</li>\n\t\t\t\t<li class="page">${v-1}</li>\n\t\t\t\t<li class="page active">${v}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${v}</li>`)),h==v?p.classList.add("is-hidden"):p.classList.remove("is-hidden"),1==h?g.classList.add("is-hidden"):g.classList.remove("is-hidden"));
//# sourceMappingURL=index.3b04047b.js.map
