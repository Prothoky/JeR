  var config={
  type: Phaser.CANVAS,
  width: 1600,
  height:720,
  parent:'game',
  scenes:{
    preload: 'preload',
  },
  scene: [Precarga],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false
    }
  }
}

var game = new Phaser.Game(config);

game.scene.add('Precarga', Pantalla.PrecargaInfo);
game.scene.add('MenuPrincipal', Pantalla.MenuPrincipal);
game.scene.add('MenuPausa', Pantalla.MenuPausa);
game.scene.add('ControlesPrinc', Pantalla.ControlesPrinc);
game.scene.add('ControlesPaus', Pantalla.ControlesPaus);
game.scene.add('OpcionesPrinc', Pantalla.OpcionesPrinc);
game.scene.add('OpcionesPaus', Pantalla.OpcionesPaus);
game.scene.add('SeleccionMapa', Pantalla.SeleccionMapa);
game.scene.add('Juego', Pantalla.Juego);
game.scene.add('FinNivel', Pantalla.FinNivel);
game.scene.start('Precarga');

function preload(){

  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  //this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.setScreenSize( true );

}
