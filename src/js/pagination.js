import newsApiService from './fetch';
import {
  addToStorage,
  getFromStorage,
  removeFromStorage,
} from './localStorage';
const ApiService = new newsApiService();
