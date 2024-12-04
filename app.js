let gameseq = [];
let userseq = [];
let btns = ["yellow","red","green","purple"];
let started = false;
let level = 0;
let highscore = 1;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false)
        {
            console.log("game is started");
            started=true;
        }
        levelup();
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },550);
    
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
    
}
function levelup() {
    userseq = [];
    level++;
    if(level >= highscore){
        highscore = level;
    }
     h2.innerText =  `Level ${level}`;
    let randindx = Math.floor(Math.random()*3)+1;
    let randcolor = btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
} 
function checkans(idx){
    if(userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any Key to Start.`;
        h3.innerHTML =`Highest Score =  ${highscore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 1000)
        reset();
    }


}


function btnpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
     checkans(userseq.length-1 ); 
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click", btnpress)
}  
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}