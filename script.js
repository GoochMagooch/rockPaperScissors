const input = document.querySelector('.move');
const button = document.querySelector('.button');

const compChoice = document.querySelector('.comp-choice');
const userWin = document.querySelector('.user-win');
const compWin = document.querySelector('.comp-win');
const stalemate = document.querySelector('.stalemate');

const game = ['rock', 'paper', 'scissors'];
const compRandom = Math.floor(Math.random() * 3);

function gameBegin() {
    
}

button.addEventListener('click', gameBegin);