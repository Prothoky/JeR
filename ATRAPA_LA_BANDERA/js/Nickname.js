'use strict'
class Nickname extends Phaser.Scene{

  constructor(){
    super({key: 'Nickname'})
  }

 preload ()
{
    this.load.html('nameform', 'assets/text/loginform2.html');
    this.load.image('botonMP', 'assets/img/MenuPrincipal/botonJugar.png');//BOTON JUGAR
    this.load.image('fondo', 'assets/img/MenuPrincipal/fondoMP.jpg'); //FONDO
}

 create ()
{
    //Variables for center position
    game.centerY = game.config.height*0.5;
    game.centerX = game.config.width*0.5;

    //background imgae and rescale
    this.scene.background =this.add.image(game.centerX,game.centerY,"fondo");
    this.scene.background.displayHeight = game.height;
    this.scene.background.scaleY = this.scene.background.scaleX;

    //Font style for leters
    var style = {fontFamily: "Maiandra GD",fontSize:55, color: '#ffcc00', boundsAlignH: "center", boundsAlignV: "middle", stroke:'#000000', strokeThickness: 5};

    //+ to check center
    //game.scene.text = this.add.text(game.centerX,game.centerY,'+',style);

    game.scene.text = this.add.text(game.centerX*0.6, game.centerY*1.75, 'Introduzca su Nickname',style);

    //Animation for input name and loginButton
    this.element = this.add.dom(game.centerX, game.centerY+500).createFromCache('nameform');

    this.tweens.add({
        targets: this.element,
        y: game.centerY*0.8,
        duration: 3000,
        ease: 'Power3'
    });

    game.scene.add('MenuPrincipal', new MenuPrincipal);

    this.checking=false;
    console.log('CREATE FINISH');

  }

  update(){
      this.element.addListener('click');
      this.element.on('click', function (event) {
         if (event.target.name === 'loginButton')
         {
           if(!this.chekcing){
           console.log('CLICK EVENT ACTIVATE');
           this.chekcing=true;
           game.nick = document.getElementById('nickname');
             if (game.nick.value != '')
             {
            	 game.name = game.nick.value;
            	 goMenuPrincipal();
             }
             else
             {
            	 game.scene.text.setText("Tienes que introducir un nombre de usuario");
            	 game.scene.text.setFontSize(50);
            	 game.scene.text.setPosition(game.config.width*0.2,game.config.height*0.9);
            	 this.chekcing=false;
             }

           }
       }
     });

  }

}

function goMenuPrincipal(){
  game.scene.start('MenuPrincipal');
  game.scene.stop('Nickname');
}
