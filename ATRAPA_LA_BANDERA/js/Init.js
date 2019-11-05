var config={
type: Phaser.GAME,
width: window.innerWidth-300,
height: window.innerHeight-300,
parent:'game',

scene: [Start],
physics: {
  default: 'arcade',
  arcade: {
    gravity: { y: 500 },
    debug: false
  }
}
}

var game = new Phaser.Game(config);
