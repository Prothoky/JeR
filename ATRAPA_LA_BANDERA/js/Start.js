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

    //var fondoGenerico = this.add.sprite(x, y, "fondoGenerico");

    //set the width of the sprite
    //fondoGenerico.displayWidth = width;
    //fondoGenerico.displayHeigth = height;
    //scale evenly
    //fondoGenerico.scaleY = fondoGenerico.scaleX;

    //Variables de reinicio de Juego
		game.loaded=false;
		game.onfase=-0;
		game.fasebefore=null;
		game.FinNivelloaded=false;
    game.SubMainMenuloaded=false;

    game.scene.add("Nickname3", new Nickname3);
    game.scene.start("Nickname3");

    //game.scene.add("MenuPrincipal", new MenuPrincipal);
    //game.scene.start("MenuPrincipal");
    //game.scene.add("Juego", new Juego);
    //game.scene.start("Juego");


  }

}
