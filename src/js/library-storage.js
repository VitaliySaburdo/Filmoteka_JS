// Library-sorage
import { addToStorage } from './localStorage';

const libraryEl = document.querySelector('.library');
// const queueButton = document.querySelector('.queue_button');
// const watchedButton = document.querySelector('.watched_button');

export function libraryStorage(data) {
  const queueBtn = document.querySelector('.js-queue');
  const watchedBtn = document.querySelector('.js-watched');
  const cartItem = document.querySelector(`[data-id="${data.id}"]`);
  const movie = addToStorage('watch', data);
}
