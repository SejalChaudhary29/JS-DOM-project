let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
// start game code
document.addEventListener('keypress', function(){
    if(started == false){
        console.log("Game has started");
        started = true;
    }
})