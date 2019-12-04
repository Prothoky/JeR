class Start extends Phaser.Scene{
  constructor(){
    super({key: 'Start'})
  }

preload(){
    //this.load.image('fondoGenerico', 'assets/img/Asus01.png');
}
  create(){
    //get the width and height of the
    //game from the config file
    var height = game.config.height;
    var width = game.config.width;

    //get center of the canvas
    var x = width/2 ;
    var y = height/2;

    //Variables de reinicio de Juego
		game.loaded=false;
		game.onfase=-0;
		game.fasebefore=null;
		game.FinNivelloaded=false;
    game.SubMainMenuloaded=false;

    game.scene.add("Nickname", new Nickname);
    game.scene.start("Nickname");

  }

}
