'use strict';

const startBtn = document.querySelector('.start__btn');
const stopBtn = document.querySelector('.stop__btn');

addEventListener('load',()=>{
    const targetRect = startBtn.getBoundingClientRect();
    startBtn.style.transform = `translate(${x}px, ${y}px)`
})