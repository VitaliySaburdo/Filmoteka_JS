!function(){function t(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},e={},a=i.parcelRequired7c6;null==a&&((a=function(t){if(t in l)return l[t].exports;if(t in e){var i=e[t];delete e[t];var a={id:t,exports:{}};return l[t]=a,i.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,i){e[t]=i},i.parcelRequired7c6=a),a("5g02X");var s=a("5g02X"),n=a("UL92Z"),c=document.querySelector(".gallery-list"),o=new(0,s.default);function d(t){var i=t.map((function(t){var i=t.id,l=t.original_title,e=t.poster_path,a=t.title,s=t.genre_ids,c=t.release_date;return'<li class="gallery__item" data-id="'.concat(i,'">\n        <img src="').concat(function(t){return t?"https://image.tmdb.org/t/p/w500".concat(t):"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923"}(e),'" alt="').concat(a,'" class="gallery_img" width="395" height="574" />\n        <h2 class="gallery__title">').concat(function(t){var i=t.split("");return i.length>=33?i.slice(0,33).join("")+"...":t}(l),'</h2>\n        <p class="gallery__txt">').concat(function(t){var i=(0,n.getFromStorage)("genresList"),l=[],e=!0,a=!1,s=void 0;try{for(var c,o=t[Symbol.iterator]();!(e=(c=o.next()).done);e=!0){var d=c.value,r=!0,g=!1,p=void 0;try{for(var h,v=i[Symbol.iterator]();!(r=(h=v.next()).done);r=!0){var u=h.value;u.id===d&&l.push(u.name)}}catch(t){g=!0,p=t}finally{try{r||null==v.return||v.return()}finally{if(g)throw p}}}}catch(t){a=!0,s=t}finally{try{e||null==o.return||o.return()}finally{if(a)throw s}}return l.length>2?l.slice(0,2).join(", ")+", Other":l.join(", ")}(s)," | ").concat(function(t){return t?t.split("-")[0]:""}(c),"\n      </li>")})).join("");c.insertAdjacentHTML("beforeend",i)}o.getGenres().then((function(t){var i=t.genres;(0,n.addToStorage)("genresList",i)})),o.fetchTrendingMovie().then((function(t){d(t.results)})),a("5xtVg"),a("UL92Z"),a("j1Fxp"),a("b3EoS");s=a("5g02X"),n=a("UL92Z");var r=new(0,s.default),g=document.querySelector(".gallery-list"),p=document.querySelector(".pagination-btns"),h=document.querySelector(".page-btn.prev"),v=document.querySelector(".page-btn.next");(0,n.getFromStorage)("total-pages")||(0,n.addToStorage)("total-pages",1e3),(0,n.getFromStorage)("page-pg")||(0,n.addToStorage)("page-pg",1);var u=(0,n.getFromStorage)("page-pg"),L=(0,n.getFromStorage)("total-pages");h&&h.classList.add("is-hidden"),v&&(v.addEventListener("click",(function(){u==L-1&&v.classList.add("is-hidden");1==u&&h.classList.remove("is-hidden");L>1&&L<6?(p.children[u].classList.add("active"),p.children[u-1].classList.remove("active"),u+=1):(u<3?(u+=1,p.children[u+1].classList.add("active"),p.children[u].classList.remove("active")):u>=3&&((u+=1)<=L-2&&(p.children[0].classList.remove("is-hidden"),p.children[1].classList.remove("is-hidden"),p.children[2].textContent=u-2,p.children[3].textContent=u-1,p.children[4].textContent=u,p.children[5].textContent=u+1,p.children[6].textContent=u+2),u>=L-2&&(p.children[7].classList.add("is-hidden"),p.children[8].classList.add("is-hidden")),u==L-1&&(p.children[4].classList.remove("active"),p.children[5].classList.add("active"))),u==L&&(p.children[5].classList.remove("active"),p.children[6].classList.add("active")));r.fetchPaginationMovie(u).then((function(t){window.scrollTo({top:100,behavior:"smooth"}),g.innerHTML="",d(t.results),(0,n.moviesDataUpdate)(t)})),(0,n.addToStorage)("page-pg",u)})),h.addEventListener("click",(function(){u==L&&v.classList.remove("is-hidden");2==u&&h.classList.add("is-hidden");L>1&&L<6?(p.children[u-2].classList.add("active"),p.children[u-1].classList.remove("active"),u-=1):(u<4?(u-=1,p.children[u+1].classList.add("active"),p.children[u+2].classList.remove("active")):u>=3&&u<L-2&&(u-=1,p.children[2].textContent=u-2,p.children[3].textContent=u-1,p.children[4].textContent=u,p.children[5].textContent=u+1,p.children[6].textContent=u+2,3==u&&(p.children[0].classList.add("is-hidden"),p.children[1].classList.add("is-hidden"))),u==L-2?(u-=1,p.children[7].classList.remove("is-hidden"),p.children[8].classList.remove("is-hidden"),p.children[2].textContent=u-2,p.children[3].textContent=u-1,p.children[4].textContent=u,p.children[5].textContent=u+1,p.children[6].textContent=u+2):u==L-1?(u-=1,p.children[4].classList.add("active"),p.children[5].classList.remove("active")):u==L&&(u-=1,p.children[5].classList.add("active"),p.children[6].classList.remove("active")));r.fetchPaginationMovie(u).then((function(t){window.scrollTo({top:100,behavior:"smooth"}),g.innerHTML="",d(t.results),(0,n.moviesDataUpdate)(t)})),(0,n.addToStorage)("page-pg",u)})),p.addEventListener("click",(function(t){"page"==t.target.className&&function(t){u=parseInt(t.target.textContent),L>1&&L<6?(p.children[u-1].classList.remove("active"),p.children[u-1].classList.add("active")):(1==u?p.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(L,"</li>"):2==u?p.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(L,"</li>"):3==u?p.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(L,"</li>"):u>3&&(u<=L-2&&(p.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(u-2,'</li>\n\t\t\t<li class="page">').concat(u-1,'</li>\n\t\t\t<li class="page active">').concat(u,'</li>\n\t\t\t<li class="page">').concat(u+1,'</li>\n\t\t\t<li class="page">').concat(u+2,'</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">').concat(L,"</li>")),u>=L-2&&(p.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(u-2,'</li>\n\t\t\t<li class="page">').concat(u-1,'</li>\n\t\t\t<li class="page active">').concat(u,'</li>\n\t\t\t<li class="page">').concat(u+1,'</li>\n\t\t\t<li class="page">').concat(u+2,'</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">').concat(L,"</li>")),u==L-1&&(p.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(L-4,'</li>\n\t\t\t\t<li class="page">').concat(L-3,'</li>\n\t\t\t\t<li class="page">').concat(L-2,'</li>\n\t\t\t\t<li class="page active">').concat(L-1,'</li>\n\t\t\t\t<li class="page">').concat(L,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(L,"</li>"))),u==L&&(p.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(L-4,'</li>\n\t\t\t\t<li class="page">').concat(L-3,'</li>\n\t\t\t\t<li class="page">').concat(L-2,'</li>\n\t\t\t\t<li class="page">').concat(L-1,'</li>\n\t\t\t\t<li class="page active">').concat(L,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(L,"</li>")));u==L?v.classList.add("is-hidden"):v.classList.remove("is-hidden");1==u?h.classList.add("is-hidden"):h.classList.remove("is-hidden");r.fetchPaginationMovie(u).then((function(t){window.scrollTo({top:100,behavior:"smooth"}),g.innerHTML="",d(t.results),(0,n.moviesDataUpdate)(t)})),(0,n.addToStorage)("page-pg",u)}(t)}))),g&&(L=1e3,u=1,(0,n.addToStorage)("page-pg",u),(0,n.addToStorage)("total-pages",L),r.fetchPaginationMovie(u).then((function(t){g.innerHTML="",d(t.results),(0,n.moviesDataUpdate)(t)})),(0,n.addToStorage)("page-pg",u),L>1&&L<6?(p.children[u-1].classList.remove("active"),p.children[u-1].classList.add("active")):(1==u?p.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page active">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(L,"</li>"):2==u?p.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page active">2</li>\n\t\t\t<li class="page">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(L,"</li>"):3==u?p.innerHTML='\n\t\t\t<li class="page is-hidden">1</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="page">2</li>\n\t\t\t<li class="page active">3</li>\n\t\t\t<li class="page">4</li>\n\t\t\t<li class="page">5</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(L,"</li>"):u>3&&(u<=L-2&&(p.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(u-2,'</li>\n\t\t\t<li class="page">').concat(u-1,'</li>\n\t\t\t<li class="page active">').concat(u,'</li>\n\t\t\t<li class="page">').concat(u+1,'</li>\n\t\t\t<li class="page">').concat(u+2,'</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">').concat(L,"</li>")),u>=L-2&&(p.innerHTML='\n\t\t\t<li class="page">1</li>\n\t\t\t<li class="dots">...</li>\n\t\t\t<li class="page">'.concat(u-2,'</li>\n\t\t\t<li class="page">').concat(u-1,'</li>\n\t\t\t<li class="page active">').concat(u,'</li>\n\t\t\t<li class="page">').concat(u+1,'</li>\n\t\t\t<li class="page">').concat(u+2,'</li>\n\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t<li class="page is-hidden">').concat(L,"</li>")),u==L-1&&(p.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(L-4,'</li>\n\t\t\t\t<li class="page">').concat(L-3,'</li>\n\t\t\t\t<li class="page">').concat(L-2,'</li>\n\t\t\t\t<li class="page active">').concat(L-1,'</li>\n\t\t\t\t<li class="page">').concat(L,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(L,"</li>"))),u==L&&(p.innerHTML='\n\t\t\t\t<li class="page">1</li>\n\t\t\t\t<li class="dots">...</li>\n\t\t\t\t<li class="page">'.concat(L-4,'</li>\n\t\t\t\t<li class="page">').concat(L-3,'</li>\n\t\t\t\t<li class="page">').concat(L-2,'</li>\n\t\t\t\t<li class="page">').concat(L-1,'</li>\n\t\t\t\t<li class="page active">').concat(L,'</li>\n\t\t\t\t<li class="dots is-hidden">...</li>\n\t\t\t\t<li class="page is-hidden">').concat(L,"</li>"))),u==L?v.classList.add("is-hidden"):v.classList.remove("is-hidden"),1==u?h.classList.add("is-hidden"):h.classList.remove("is-hidden"));var m=a("bpxeT"),f=a("2TvXO"),T=new(0,(s=a("5g02X")).default),x=document.querySelector("#header-form"),y=document.querySelector(".gallery-list");x.addEventListener("submit",(function(t){return H.apply(this,arguments)}));var M=1,S="",w=[];function H(){return(H=t(m)(t(f).mark((function i(l){var e,a,s,n;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.preventDefault(),S=l.currentTarget.elements.searchQuery.value.trim(),t.prev=2,t.next=5,T.getFilmOnSearch(S);case 5:e=t.sent,a=e.results,s=e.page,n=e.total_pages,s,M=n,w=a,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:y.innerHTML="",d(w),console.log(M);case 20:case"end":return t.stop()}}),i,null,[[2,14]])})))).apply(this,arguments)}}();
//# sourceMappingURL=index.d196c22c.js.map