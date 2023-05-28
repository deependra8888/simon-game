

// const readlineSync = require("readline-sync");

let colors = ["green", "red", "yellow", "blue"];

const randomColor = () => {
  let randomIndex = Math.random() * colors.length;
  let newColor = colors[Math.floor(randomIndex)];
  return newColor;
};
 
function play(simon, player) {
    console.log('simon : '  + simon);
    console.log('player : ' + player)
  if (simon.length === player.length) {
    for (let color in simon) {
      if (simon[color] !== player[color]) {
        console.log('gameOver')
        return ;
      }
    }
    let newColor = randomColor();
    simon.push(newColor);
    play(simon, player);
  } else {
    let newPlayer = [];
    for (let color in simon) {
    //   let playerColor = readlineSync.question(`\n enter color ${+color + 1} = `);
    
      newPlayer.push(playerColor)
    }
    play(simon, newPlayer);
  }

}

play([], []);

let 


