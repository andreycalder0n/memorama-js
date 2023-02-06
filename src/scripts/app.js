// cualquier otra api
import { API_Rick_Morty } from './apis.js';
const api = new API_Rick_Morty();
let cardsApi = await api.getCharacters();

import MemoryGame from './memoryGame.js';

const btnEmpezar = document.getElementById('btnEmpezar');

btnEmpezar.addEventListener('click', async () => {
  toggleBtnEmpezar();
  new MemoryGame(cardsApi);
});

function toggleBtnEmpezar() {
  if (btnEmpezar.classList.contains('hide')) {
    btnEmpezar.classList.remove('hide');
  } else {
    btnEmpezar.classList.add('hide');
  }
}