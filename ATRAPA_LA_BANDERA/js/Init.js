'use strict'

var config={
  type: Phaser.GAME,
  width: window.innerWidth,
  height: window.innerHeight,
  parent:'game',
  dom: {
        createContainer: true
    },
  scene: {create:create},
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 600},
      debug: true
      }
    },
    scale:{
      parent: 'game',
      mode: Phaser.Scale.CENTER_BOTH,
    }
};

var game = new Phaser.Game(config);

function create(){
  //Variables de reinicio de Juego
  game.prev_sound_volume=5;
  game.loaded=false;
  game.onfase=-0;
  game.fasebefore=null;
  game.FinNivelloaded=false;
  game.MainMenuloaded=false;
  game.sound.volume = 0.5;
  //game.url = String(window.location+'users');
  game.name = null;
/*
  game.scene.add("Juego", new Juego);
  game.scene.start("Juego");
*/
  game.scene.add("Nickname", new Nickname);
  game.scene.start("Nickname");

}
