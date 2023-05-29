
let green = document.querySelector('.green')
let red = document.querySelector('.red')
let blue = document.querySelector('.blue')
let yellow = document.querySelector('.yellow')

let startBtn = document.querySelector('.start-button')

let colors = ['green', 'red', 'blue', 'yellow'];

let player = []
let simon = []
let turn = 'simon'

const randomColor = () => {
    let randomIndex = Math.random() * colors.length;
    let newColor = colors[Math.floor(randomIndex)];
    return newColor;
};

function glow (colorElm, indx) {
   
    colorElm.classList.add('glow')
    turn = 'simon'
    setTimeout(() => {
        colorElm.classList.remove('glow')
        if(simon.length === indx + 1){
            turn = 'player'
        }

        console.log(turn);
    }, 1000)
}

function play(simon, player) {
    removeAllEventListners()
    console.log('simon : ' + simon);
    console.log('player : ' + player);
    if(turn === 'simon'){
        simon.push(randomColor())
    }
    simon.forEach((color, index) => {
        setTimeout(() =>{
            console.log();
            let elm = document.querySelector(`.${color}`)
            glow(elm, index)
        }, (index + 1)*1000)
    })

    if(turn === 'player'){
        green.addEventListener('click', pushColorToPlayer)
        blue.addEventListener('click', pushColorToPlayer)
        red.addEventListener('click', pushColorToPlayer)
        yellow.addEventListener('click', pushColorToPlayer)
    } 
}

function pushColorToPlayer (event) {
    player.push(event.target.classList[0])
    console.log(player);
    check(simon, player)
}

function check(simon, player) {
    console.log('checking...');
    if(simon.length !== player.length){
        console.log('waiting...');
        console.log('I have clicked');
        return false;
    }
    for(let color in simon){
        if(simon[color] !== player[color]){
            console.log('gameover');
            return 'gameOver';
        }
    }

    console.log('next level....');
    turn = 'simon'
    console.log(simon.length);
    removeAllEventListners()
    play(simon, player)
}

function startGame() {
    removeAllEventListners()
    console.log('starting game....');
    player = []
    simon = []

    play(simon, player)
}

function removeAllEventListners () {
    green.removeEventListener('click', pushColorToPlayer)
    blue.removeEventListener('click', pushColorToPlayer)
    red.removeEventListener('click', pushColorToPlayer)
    yellow.removeEventListener('click', pushColorToPlayer)
}

console.log(startBtn);

startBtn.addEventListener(('click'), startGame)
