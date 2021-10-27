'use strict';
const CARROT_SIZE = 80;
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const startBtn = document.querySelector('.game__start');

function initGame() {
    console.log(fieldRect);
    addItem('carrot', 10, 'img/carrot.png');
    addItem('bug', 10, 'img/bug.png');
}

function addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;

    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.position = 'absolute';
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
};

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let num = 10;
let timer = setInterval(function(){
if(num<=0){
    clearInterval(timer);
    document.querySelector('.game__timer').innerHTML = 
   `0:${num}`;
   let popupMsg = document.querySelector('.pop-up');
   popupMsg.style.display ='flex';

}
num -= 1;


},1000);

function displayTime(seconds){
    const min = Math.floor(seconds/60);
    const remainderSec = seconds % 60;
    const display = `${min}: ${remainderSec <10 ? '0' : ''} ${remainderSec}`;
    document.title = display ;
    timerDisplay.textContent = display;

}

function changeBtn(){
    const btnElement = document.querySelector('.game__start');
    btnElement.innerHTML = '<i class="fas fa-stop"></i>';
    clearInterval(timer);
}



function refreshBtn(){
    document.querySelector('.pop-up__replay');
    setInterval(timer);
}

initGame();
displayTime(seconds);

// function startGame(){
//     field.innerHTML = `<section class="game__field"></section>`;
    
// }

// startGame();