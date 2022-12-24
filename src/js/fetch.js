import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab57a8d74b0df3fdba80a78e42f32d17';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.lang = '';
  }
  // Запрос популярных фильмов на главную страницу
  async fetchTrendingMovie() {
    try {
      const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  // Запрос детальной информации по id для модалки
  async getFilmDetails(id) {
    try {
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  // Запрос детальной информации по id для модалки
  async getFilmOnSearch() {
    try {
      const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  // Запрос детальной информации по id для модалки
  async getGenres() {
    try {
      const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
