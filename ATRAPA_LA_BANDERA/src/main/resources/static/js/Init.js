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
game.url = String(window.location+'users');
game.name = null;

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
