var config={
  type: Phaser.GAME,
  width: window.innerWidth-300,
  height: 720,
  parent:'game',
  dom: {
        createContainer: true
    },
  scene: {create:create},
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false
      }
    }
};

var game = new Phaser.Game(config);

function create(){

  //Variables de reinicio de Juego
  game.loaded=false;
  game.onfase=-0;
  game.fasebefore=null;
  game.FinNivelloaded=false;
  game.SubMainMenuloaded=false;
  game.sound.volume = 0.5;
  game.url = String(window.location+'users');
  game.name = null;

  game.scene.add("Nickname", new Nickname);
  game.scene.start("Nickname");


  //game.scene.add("ControlesPrinc", new ControlesPrinc);
//  game.scene.start("ControlesPrinc");

  //game.scene.add("ControlesPaus", new ControlesPaus);
  //game.scene.start("ControlesPaus");

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
}
