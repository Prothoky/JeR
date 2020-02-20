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
      gravity: { y: 500 },
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
  game.loaded=false;
  game.onfase=-0;
  game.fasebefore=null;
  game.FinNivelloaded=false;
  game.MainMenuloaded=false;
  game.sound.volume = 0.5;
  game.url = String(window.location+'users');
  game.name = null;

  game.scene.add("Nickname", new Nickname);
  game.scene.start("Nickname");

}

function Alive(){
  var url = game.url+'/'+game.name;
  $.ajax({
  method: "GET",
  url:url,
  }).done(function(value){
    console.log("Todo va bien");
  }).fail(function (value) {
    if(value.status == 200){
      console.log("Todo va bien");
    }else if(value.status == 0){
     console.log("Servidor caido");
   }else{
     console.log("Fallo de conexion con el servidor");
   }
  });

  var url = game.url;
  $.ajax({
	  method: "GET",
	  url:url,
	  }).done(function(value){
      getonline(value);
	  }).fail(function (value) {
	    if(value.status == 200){
	      getonline(value);
	    }else{
	     console.log("ERROR");
	   }
	  });
}

function getonline(value){
  for(var i=0 ; i<value.length;i++){
    if(value[i].online){
      console.log(value[i].name +" is online");
    }
  }
}
