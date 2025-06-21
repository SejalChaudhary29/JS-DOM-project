let gameSeq = [];
let userSeq = [];

let btns = ['box1','box3','box2','box4'];

let h2 = document.querySelector('h2');
let started = false;
let level = 0;
// start game code
document.addEventListener('keypress', function(){
    if(started == false){
        console.log("Game has started");
        started = true;
        levelup();
    }
});


function gameFlash(box){

   box.classList.add('flash')
    setTimeout(function(){
        box.classList.remove('flash');
    },250)
}
function userFlash(box){

   box.classList.add('userFlash')
    setTimeout(function(){
        box.classList.remove('userFlash');
    },250)
}
function levelup(){
    level++;
    h2.innerText = `Level ${level}`;

    let randamIndex = Math.floor(Math.random()*3);
 let randomColor = btns[randamIndex]
    console.log(randomColor);
    console.log(randamIndex);
    let randomBtn = document.querySelector(`.${randomColor}`);
    console.log(randomBtn)
    gameFlash(randomBtn);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    console.log("btn was pressed",this)
}

let allbtns = document.querySelectorAll('.box');
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}