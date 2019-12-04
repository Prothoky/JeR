var config={
  type: Phaser.GAME,
  width: window.innerWidth-300,
  height: 720,
  parent:'game',
  dom: {
        createContainer: true
    },
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
