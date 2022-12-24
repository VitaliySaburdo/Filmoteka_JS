import newsApiService from './fetch';

const imageGallaryRef = document.querySelector('.gallery-list');

const ApiService = new newsApiService();

ApiService.getGenres().then(({ genres }) => {
  //Добавление списка жанров в localStorage
  saveLs('genresList', genres);
  console.log(JSON.parse(localStorage.getItem('genresList')));
});

const saveLs = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

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
        release_date,
      }) => `<li class="gallery__item" data-id="${id}">
        <img src="${renderImg(
          poster_path
        )}" alt="${title}" class="gallery_img" width="395" height="574" />
        <h2 class="gallery__title">${checkTitle(original_title)}</h2>
        <p class="gallery__txt">${changeGenre(genre_ids)} | ${checkDate(
        release_date
      )}
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

function checkDate(release_date) {
  if (release_date) {
    return release_date.split('-')[0];
  }
  return 'Coming soon';
}

function checkTitle(original_title) {
  const arr = original_title.split('');

  if (arr.length >= 33) {
    return arr.slice(0, 33).join('') + '...';
  }
  return original_title;
}

function changeGenre(genre_ids) {
  const genresInfo = JSON.parse(localStorage.getItem('genresList'));

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
