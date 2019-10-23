"use strict"

var fondo;


var playState = {
  init: function () {
    //Se llama cuando se inicia el estado
  },
  preload: function () {
    fondo = this.game.add.image()
    //Se cargan Imagenes y archivos de recurso
  },
  create: function () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    //Se crea el personaje, los enemigos, los sonidos, el fondo del juego, etc
  },
  update: function () {
    //Logica del Juego como los movimientos, las colisiones, el movimiento del personaje, etc
  },
  render: function () {
    //Depurar lo que se renderiza
    //this.game.debug.body(this.player);
  },
  pause: function () {
    //Cuando el juego es pausado
  },
  shutdown: function () {
    //Cuando se sale del estado
  }
};
//(Ancho, Alto, Renderer WebGL/Canvas/Auto, id elemento donde se creara el lienzo del juego)
var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');
//Se pueden crear tantos estados del juego como tu quieras
game.state.add('play', playState);
//Se inicia un estado del juego
game.state.start('play');
