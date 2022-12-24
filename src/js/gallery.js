import newsApiService from './fetch';

const imageGallaryRef = document.querySelector('.gallery-list');

const ApiService = new newsApiService();

ApiService.fetchTrendingMovie().then(data => {
  renderGalleryFilms(data.results);
});

function renderGalleryFilms(data) {
  const markup = data
    .map(
      ({
        id,
        original_title,
        poster_path,
        title,
        genre_ids,
        vote_average,
      }) => `<li class="gallery__item" data-id="${id}">
        <img src="${renderImg(
          poster_path
        )}" alt="${original_title}" class="gallery_img" width="395" height="574" />
        <h2 class="gallery__title">${title}</h2>
        <p class="gallery__txt">${changeGenre(
          genre_ids
        )}<span class="card__rating"> ${vote_average.toFixed(1)}</span></p>
      </li>`
    )
    .join('');

  imageGallaryRef.insertAdjacentHTML('beforeend', markup);
}

function renderImg(poster_path) {
  if (poster_path) {
    return `https://image.tmdb.org/t/p/w500${poster_path}`;
  }
  return `https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`;
}

function changeGenre(genre_ids) {
  const genresInfo = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];

  const genrArrey = [];
  for (const genre_id of genre_ids) {
    for (const genrInfo of genresInfo) {
      if (genrInfo.id === genre_id) {
        genrArrey.push(genrInfo.name);
      }
    }
  }
  if (genrArrey.length > 2) {
    return genrArrey.slice(0, 2).join(', ') + ', Other';
  }
  return genrArrey.join(', ');
}

// ${changeGenre(genresInfo, genre_ids)} | ${
//         release_date.split('-')[0] || 'Coming soon'
//       }
renderMarkup();
function renderMarkup() {
  ApiService.getGenres().then(({ genres }) => {
    console.log({ genres });
    //Добавление списка жанров в localStorage
    saveLs('genresList', genres);
    // console.log(data);

    // if (data.results) {
    //   data.results.forEach(film => {
    //     const { genre_ids, release_date } = film;
    //     genres.forEach(({ name, id }) => {
    //       if (genre_ids.includes(id)) {
    //         if (genre_ids.length > 2) {
    //           genre_ids.splice(2, genre_ids.length - 1, 'Other');
    //         }
    //         genre_ids.splice(genre_ids.indexOf(id), 1, name);
    //       }
    //       film.genre_names = genre_ids.join(', ');
    //       if (film.release_date) {
    //         film.release_date = release_date.slice(0, 4);
    //       }
    //     });
    //   });
    // }
    // const markupList = createListMarkup(data.results);
    // if (list) {
    //   list.innerHTML = markupList;
    // }
  });
}

// getTrending(1).then(r => {
//   renderMarkup(r),
//     //Сохранение результата запроса в  localStorage
//     saveLs('moviesData', r.results);
// });
const saveLs = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
