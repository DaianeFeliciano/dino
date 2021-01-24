const dino = document.querySelector( ".dino");
const background = document.querySelector (".background");
let isJumping = false;
let position =0;

function handleKeyUp(event) {
    if (event.keyCode === 32)
    if (!isJumping) {
        jump();
    }

    }
    jump();
function jump() {
    let position = 0;
    isJumping = true;
    let upInterval = setInterval (() => {
        if (position >= 150) {
            clearInterval(upInterval);
        // descendo
        let downInterval = setInterval(() => {
        if (position <=0) {
        clearInterval(downInterval);
        isJumping = false;
        } else {
            position -=20;
            dino.style.bottom = position + "px";
        }}, 20);
        } else  {
        //subindo
     position += 20;
     dino.style.bottom = position + "px";
        }
        //codigo   
    }, 20);
}
function createCactus () {
    const cactus = document.createElement ("div");
    let cactusPosition = 1000;
    let randomTimer =  Math.random() * 6000;
    //console.log(randomTimer);

    cactus.classList.add( "cactus");
    cactus.style.left = 1000 + "px";
    background.appendChild(cactus);

    let leftInterval  = setInterval(() => {
        //cactusPosition -= 10;
       // cactus.style.left = cactusPosition + "px";
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);            
        } else if (cactusPosition < 0 &&  cactusPosition < 60 && position < 60) {
            //game over
         clearInterval (leftInterval);
         document.body.innerHTML = '<h1 class = "game-over">Fim de jogo</h1>';   
        }else {
            cactusPosition -= 10;
        cactus.style.left = cactusPosition + "px";
        }      
    }, 20);
    setTimeout(createCactus, randomTimer);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);
//console.log(dino);
//document.addEventListener('keyup', () => {
//console.log ("pressionou uma tecla");
// site keycode.info (mostra o código das teclas)

