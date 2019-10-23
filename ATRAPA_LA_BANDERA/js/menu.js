class Menu extends Phaser.Scene{

  constructor(){
    super({ key:"Menu"});
  }

  preload()
  {
      this.load.image('logo', 'C:\Users\Proth\Documents\Juegos en Red\ATRAPA LA BANDERA\ATRAPA_LA_BANDERA\assets\img\Asus01.png');
  }

  create ()
  {
    console.log(5);
    var image = this.add.image(50,50,'logo');
  }
  update(){

  }
}
