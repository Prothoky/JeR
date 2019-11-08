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

    game.scene.add("MenuPrincipal", new MenuPrincipal);
    game.scene.start("MenuPrincipal");
    //this.scene.add("Juego", new Juego);
    //this.scene.start("Juego");


  }

}
