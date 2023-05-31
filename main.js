let green = document.querySelector('.green');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let yellow = document.querySelector('.yellow');
green.addEventListener('click', pushColorToPlayer);
blue.addEventListener('click', pushColorToPlayer);
red.addEventListener('click', pushColorToPlayer);
yellow.addEventListener('click', pushColorToPlayer);


let startBtn = document.querySelector('.start-button');
startBtn.addEventListener('click', startGame);

let colors = ['green', 'red', 'blue', 'yellow'];

let player = [];
let simon = [];
let turn = '';

const randomColor = () => {
    let randomIndex = Math.random() * colors.length;
    let newColor = colors[Math.floor(randomIndex)];
    return newColor;
};

function glow(colorElm, indx) {
    setTimeout(() => {
        colorElm.classList.add('glow');
        turn = 'simon';
        setTimeout(() => {
            colorElm.classList.remove('glow');
            if (indx === simon.length - 1) {
                turn = 'player';
                //reset player
                player = [];
                console.log(`It is ${turn}'s turn now!`);
            }
        }, 500);
    }, 1000);
}

function play() {
    if (turn === 'simon' || turn === '') {
        simon.push(randomColor());
        console.log('SIMONS  = ', simon);
    }
    simon.forEach((color, index) => {
        setTimeout(() => {
            console.log();
            let elm = document.querySelector(`.${color}`);
            glow(elm, index);
        }, (index + 1) * 1000);
    });
}

function pushColorToPlayer(event) {
    console.log('CLICK!');
    if (turn === 'player') {
        player.push(event.target.classList[0]);
        check();
    }
}

function check() {
    console.log('checking player...');
    console.log('PLAYERS  = ', player);
    if (simon.length !== player.length) {
        console.log('Lengths dont match, waiting...');
    }
    if (simon.length === player.length) {
        for (let color in simon) {
            if (simon[color] !== player[color]) {
                console.log('NOT MATCHED!!!  :(');
                console.log('Game Over!');
                turn = '';
                return;
            }
        }
        console.log('MATCHED!!! :D');
        console.log(`LEVEL:  ${simon.length + 1}`);
        document.querySelector('.level').innerHTML = `<h1>${simon.length + 1}</h1>`
        turn = 'simon';
        play();
    }
}

function startGame() {
    if (!turn) {
      turn = 'simon'
        console.log('Starting Game....');
        player = [];
        simon = [];
        play();
    }
}
