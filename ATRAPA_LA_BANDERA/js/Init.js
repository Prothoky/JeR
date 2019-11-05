  var config={
  type: Phaser.CANVAS,
  width: 1600,
  height:720,
  parent:'game',
  scenes:{
    preload: 'preload',
  },
  scene: [Precarga,MenuPrincipal,MenuPausa,ControlesPrinc,ControlesPaus,OpcionesPrinc,OpcionesPaus,SeleccionMapa,Juego,FinNivel],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false
    }
  }
}

var game = new Phaser.Game(config);

game.scene.start('Precarga');

function preload(){

  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  //this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.setScreenSize( true );

}
