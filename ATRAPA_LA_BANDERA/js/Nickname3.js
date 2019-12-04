class Nickname3 extends Phaser.Scene{

  constructor(){
    super({key: 'Nickname3'})
  }

 preload ()
{
    this.load.html('nameform', 'assets/text/loginform.html');
    //this.load.image('botonMP', 'assets/img/MenuPrincipal/botonJugar.png');//BOTON JUGAR

    //this.load.image('pic', 'assets/pics/turkey-1985086.jpg'); //FONDO
}

 create ()
{
    //this.add.image(400, 300, 'pic'); //FONDO bru

    if(!this.nicknameMenu3){
      game.scene.add('MenuPrincipal', new MenuPrincipal);
      game.scene.sendToBack('MenuPrincipal');
      game.scene.stop('MenuPrincipal');
      this.nicknameMenu3=true;
    }

      var height = game.config.height;
      var width = game.config.width;

      var x = width/2 ;
      var y = height/2;


    var text = this.add.text(x*5.5/8, y*2/8, 'Introduzcan su Nickname');

    var element = this.add.dom(x, y).createFromCache('nameform');

    //element.setPerspective(0);

    element.addListener('click');

    element.on('click', function (event) {

        if (event.target.name === 'loginButton')
        {
            var inputNickname1 = this.getChildByName('nickname1');
            var inputNickname2 = this.getChildByName('nickname2');

            //  Have they entered anything?
            if (inputNickname1.value !== '' && inputNickname2.value !== '' && inputNickname1.value !==inputNickname2.value)
            {
                //  Turn off the click events
                this.removeListener('click');

                //  Tween the login form out
                this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

                this.scene.tweens.add({ targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                    onComplete: function ()
                    {
                        element.setVisible(false);
                    }
                });

                //  Populate the text with whatever they typed in as the username!
                text.setText('Bienvenidos ' + inputNickname1.value + ' y ' + inputNickname2.value);

              /*  this.botonMP = this.add.sprite(x, y*(12/8), 'botonMP');
              	this.botonMP.setInteractive({ useHandCursor: true  } )
              	.on('pointerdown', () => this.irAMenu());*/

                game.scene.bringToTop('MenuPrincipal');
                game.scene.start('MenuPrincipal');
                game.scene.stop('Nickname3');

            }
            else
            {
                //  Flash the prompt
                this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
            }
        }

    });

    this.tweens.add({
        targets: element,
        y: 300,
        duration: 3000,
        ease: 'Power3'
    });
}

irAMenu(){

  game.scene.bringToTop('MenuPrincipal');
  game.scene.start('MenuPrincipal');
  game.scene.stop('Nickname');

}

}
