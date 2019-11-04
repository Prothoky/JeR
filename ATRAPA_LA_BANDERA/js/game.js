const config={
  type: Phaser.CANVAS,
  width: 1600,
  height:720,
  parent:'game',
  scenes:{
    preload: 'preload',
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false
    }
  }
}

var game= new Phaser.Game(config);

game.state.add('Precarga', Pantalla.PrecargaInfo);
game.state.add('MenuPrincipal', Pantalla.MenuPrincipal);
game.state.add('MenuPausa', Pantalla.MenuPausa);
game.state.add('ControlesPrinc', Pantalla.ControlesPrinc);
game.state.add('ControlesPaus', Pantalla.ControlesPaus);
game.state.add('OpcionesPrinc', Pantalla.OpcionesPrinc);
game.state.add('OpcionesPaus', Pantalla.OpcionesPaus);
game.state.add('SeleccionMapa', Pantalla.SeleccionMapa);
game.state.add('Juego', Pantalla.Juego);
game.state.add('FinNivel', Pantalla.FinNivel);

game.state.start('Precarga');

function preload(){

  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  //this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.setScreenSize( true );

}
