var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("cyIMT");var r=i("cyIMT"),o=i("31u3U");const l=document.querySelector(".gallery-list"),s=new(0,r.default);s.getGenres().then((({genres:e})=>{(0,o.addToStorage)("genresList",e)})),s.fetchTrendingMovie().then((e=>{!function(e){const t=e.map((({id:e,original_title:t,poster_path:n,title:i,genre_ids:r,release_date:l})=>`<li class="gallery__item" data-id="${e}">\n        <img src="${function(e){return e?`https://image.tmdb.org/t/p/w500${e}`:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923"}(n)}" alt="${i}" class="gallery_img" width="395" height="574" />\n        <h2 class="gallery__title">${function(e){const t=e.split("");return t.length>=33?t.slice(0,33).join("")+"...":e}(t)}</h2>\n        <p class="gallery__txt">${function(e){const t=(0,o.getFromStorage)("genresList"),n=[];for(const i of e)for(const e of t)e.id===i&&n.push(e.name);return n.length>2?n.slice(0,2).join(", ")+", Other":n.join(", ")}(r)} | ${function(e){return e?e.split("-")[0]:""}(l)}\n      </li>`)).join("");l.insertAdjacentHTML("beforeend",t)}(e.results)})),i("bTcpz"),i("31u3U"),i("2YGUk"),i("gyeM6");
//# sourceMappingURL=index.d43039b3.js.map
