var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},l={},e=t.parcelRequired7c6;null==e&&((e=function(t){if(t in i)return i[t].exports;if(t in l){var e=l[t];delete l[t];var s={id:t,exports:{}};return i[t]=s,e.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,i){l[t]=i},t.parcelRequired7c6=e),e("cyIMT");var s=e("cyIMT"),a=e("31u3U");const n=document.querySelector(".gallery-list"),c=new(0,s.default);function d(t){const i=t.map((({id:t,original_title:i,poster_path:l,title:e,genre_ids:s,release_date:n})=>`<li class="gallery__item" data-id="${t}">\n        <img src="${function(t){return t?`https://image.tmdb.org/t/p/w500${t}`:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923"}(l)}" alt="${e}" class="gallery_img" width="395" height="574" />\n        <h2 class="gallery__title">${function(t){const i=t.split("");return i.length>=33?i.slice(0,33).join("")+"...":t}(i)}</h2>\n        <p class="gallery__txt">${function(t){const i=(0,a.getFromStorage)("genresList"),l=[];for(const e of t)for(const t of i)t.id===e&&l.push(t.name);return l.length>2?l.slice(0,2).join(", ")+", Other":l.join(", ")}(s)} | ${function(t){return t?t.split("-")[0]:""}(n)}\n      </li>`)).join("");n.insertAdjacentHTML("beforeend",i)}c.getGenres().then((({genres:t})=>{(0,a.addToStorage)("genresList",t)})),c.fetchTrendingMovie().then((t=>{d(t.results)})),e("bTcpz"),e("31u3U"),e("2YGUk"),e("gyeM6");s=e("cyIMT"),a=e("31u3U");const o=new(0,s.default),r=document.querySelector(".gallery-list"),g=document.querySelector(".pagination-btns"),p=document.querySelector(".page-btn.prev"),h=document.querySelector(".page-btn.next");(0,a.getFromStorage)("total-pages")||(0,a.addToStorage)("total-pages",1e3),(0,a.getFromStorage)("page-pg")||(0,a.addToStorage)("page-pg",1);let v=(0,a.getFromStorage)("page-pg"),L=(0,a.getFromStorage)("total-pages");p&&p.classList.add("is-hidden"),h&&(h.addEventListener("click",(function(){v==L-1&&h.classList.add("is-hidden");1==v&&p.classList.remove("is-hidden");L>1&&L<6?(g.children[v].classList.add("active"),g.children[v-1].classList.remove("active"),v+=1):(v<3?(v+=1,g.children[v+1].classList.add("active"),g.children[v].classList.remove("active")):v>=3&&(v+=1,v<=L-2&&(g.children[0].classList.remove("is-hidden"),g.children[1].classList.remove("is-hidden"),g.children[2].textContent=v-2,g.children[3].textContent=v-1,g.children[4].textContent=v,g.children[5].textContent=v+1,g.children[6].textContent=v+2),v>=L-2&&(g.children[7].classList.add("is-hidden"),g.children[8].classList.add("is-hidden")),v==L-1&&(g.children[4].classList.remove("active"),g.children[5].classList.add("active"))),v==L&&(g.children[5].classList.remove("active"),g.children[6].classList.add("active")));o.fetchPaginationMovie(v).then((t=>{window.scrollTo({top:100,behavior:"smooth"}),r.innerHTML="",d(t.results),(0,a.moviesDataUpdate)(t)})),(0,a.addToStorage)("page-pg",v)})),p.addEventListener("click",(function(){v==L&&h.classList.remove("is-hidden");2==v&&p.classList.add("is-hidden");L>1&&L<6?(g.children[v-2].classList.add("active"),g.children[v-1].classList.remove("active"),v-=1):(v<4?(v-=1,g.children[v+1].classList.add("active"),g.children[v+2].classList.remove("active")):v>=3&&v<L-2&&(v-=1,g.children[2].textContent=v-2,g.children[3].textContent=v-1,g.children[4].textContent=v,g.children[5].textContent=v+1,g.children[6].textContent=v+2,3==v&&(g.children[0].classList.add("is-hidden"),g.children[1].classList.add("is-hidden"))),v==L-2?(v-=1,g.children[7].classList.remove("is-hidden"),g.children[8].classList.remove("is-hidden"),g.children[2].textContent=v-2,g.children[3].textContent=v-1,g.children[4].textContent=v,g.children[5].textContent=v+1,g.children[6].textContent=v+2):v==L-1?(v-=1,g.children[4].classList.add("active"),g.children[5].classList.remove("active")):v==L&&(v-=1,g.children[5].classList.add("active"),g.children[6].classList.remove("active")));o.fetchPaginationMovie(v).then((t=>{window.scrollTo({top:100,behavior:"smooth"}),r.innerHTML="",d(t.results),console.log(t.results),(0,a.moviesDataUpdate)(t)})),(0,a.addToStorage)("page-pg",v)})),g.addEventListener("click",(function(t){"page"==t.target.className&&function(t){v=parseInt(t.target.textContent),L>1&&L<6?(g.children[v-1].classList.remove("active"),g.children[v-1].classList.add("active")):(1==v?g.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`:2==v?g.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`:3==v?g.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`:v>3&&(v<=L-2&&(g.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v-2}</li>\n\t\t\t<li class="page">${v-1}</li>\n\t\t\t<li class="page active">${v}</li>\n\t\t\t<li class="page">${v+1}</li>\n\t\t\t<li class="page">${v+2}</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`),v>=L-2&&(g.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v-2}</li>\n\t\t\t<li class="page">${v-1}</li>\n\t\t\t<li class="page active">${v}</li>\n\t\t\t<li class="page">${v+1}</li>\n\t\t\t<li class="page">${v+2}</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">${L}</li>`),v==L-1&&(g.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${L-4}</li>\n\t\t\t\t<li class="page">${L-3}</li>\n\t\t\t\t<li class="page">${L-2}</li>\n\t\t\t\t<li class="page active">${L-1}</li>\n\t\t\t\t<li class="page">${L}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${L}</li>`)),v==L&&(g.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${L-4}</li>\n\t\t\t\t<li class="page">${L-3}</li>\n\t\t\t\t<li class="page">${L-2}</li>\n\t\t\t\t<li class="page">${L-1}</li>\n\t\t\t\t<li class="page active">${L}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${L}</li>`));v==L?h.classList.add("is-hidden"):h.classList.remove("is-hidden");1==v?p.classList.add("is-hidden"):p.classList.remove("is-hidden");o.fetchPaginationMovie(v).then((t=>{window.scrollTo({top:100,behavior:"smooth"}),r.innerHTML="",d(t.results),(0,a.moviesDataUpdate)(t)})),(0,a.addToStorage)("page-pg",v)}(t)}))),r&&(L=1e3,v=1,(0,a.addToStorage)("page-pg",v),(0,a.addToStorage)("total-pages",L),o.fetchPaginationMovie(v).then((t=>{r.innerHTML="",d(t.results),(0,a.moviesDataUpdate)(t),console.log((0,a.addToStorage)("total-pages",L))})),(0,a.addToStorage)("page-pg",v),L>1&&L<6?(g.children[v-1].classList.remove("active"),g.children[v-1].classList.add("active")):(1==v?g.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`:2==v?g.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`:3==v?g.innerHTML=`\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`:v>3&&(v<=L-2&&(g.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v-2}</li>\n\t\t\t<li class="page">${v-1}</li>\n\t\t\t<li class="page active">${v}</li>\n\t\t\t<li class="page">${v+1}</li>\n\t\t\t<li class="page">${v+2}</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${L}</li>`),v>=L-2&&(g.innerHTML=`\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">${v-2}</li>\n\t\t\t<li class="page">${v-1}</li>\n\t\t\t<li class="page active">${v}</li>\n\t\t\t<li class="page">${v+1}</li>\n\t\t\t<li class="page">${v+2}</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">${L}</li>`),v==L-1&&(g.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${L-4}</li>\n\t\t\t\t<li class="page">${L-3}</li>\n\t\t\t\t<li class="page">${L-2}</li>\n\t\t\t\t<li class="page active">${L-1}</li>\n\t\t\t\t<li class="page">${L}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${L}</li>`)),v==L&&(g.innerHTML=`\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">${L-4}</li>\n\t\t\t\t<li class="page">${L-3}</li>\n\t\t\t\t<li class="page">${L-2}</li>\n\t\t\t\t<li class="page">${L-1}</li>\n\t\t\t\t<li class="page active">${L}</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">${L}</li>`)),v==L?h.classList.add("is-hidden"):h.classList.remove("is-hidden"),1==v?p.classList.add("is-hidden"):p.classList.remove("is-hidden"));const u=new(0,(s=e("cyIMT")).default),$=document.querySelector("#header-form");document.querySelector(".gallery-list");$.addEventListener("submit",(function(t){t.preventDefault(),u.query=t.currentTarget.elements.searchQuery.value.trim(),console.log(u.query),u.getFilmOnSearch().then((t=>console.log(t))).catch((t=>console.log(t)))}));
//# sourceMappingURL=index.00985b16.js.map