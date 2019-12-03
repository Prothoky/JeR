class Nickname extends Phaser.Scene{

  constructor(){
    super({key: 'Nickname'})

			this.chars = [
            [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
            [ 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' ],
            [ 'U', 'V', 'W', 'X', 'Y', 'Z', '.', '-', '<', '>' ]
        	];

        this.cursor = new Phaser.Math.Vector2();

        this.text;

        this.name = '';
        this.charLimit = 10;

        //scene: [Highscore, Nickname ]

		this.playerText;

  }

preload(){

	this.load.image('botonMP', 'assets/img/MenuPrincipal/botonJugar.png');//BOTON JUGAR
	this.load.bitmapFont('arcade', 'assets/fonts/bitmap/arcade.png', 'assets/fonts/bitmap/arcade.xml');

}
  create(){

	  this.M = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

	  if(!this.nicknameMenu){
			game.scene.add('MenuPrincipal', new MenuPrincipal);
			game.scene.sendToBack('MenuPrincipal');
			game.scene.stop('MenuPrincipal');
			this.nicknameMenu=true;
		}


	var height = game.config.height;
    var width = game.config.width;

    var x = width/2 ;
    var y = height/2;

    //var fondoMenu = this.add.sprite(x, y, "fondoMenu");
    //fondoMenuPrinc.displayWidth = width;

	//fondoMenuPrinc.scaleX = fondoMenuPrinc.scaleY;

	//BOTON JUGAR
	this.botonMP = this.add.image(x, y*(12/8), 'botonMP');
	this.botonMP.setInteractive({ useHandCursor: true  } )
	.on('pointerdown', () => this.irAMenu());


	let text = this.add.bitmapText(x*6.3/8, y*2/8, 'arcade', 'Nickname\n\n');

//VAIABLE QUE CONTIENE EL NICKNAME
	this.nicknamePlayer = this.add.bitmapText(x*6.7/8, y*5/8, 'arcade', '').setTint(0xffcc00);

        text.setLetterSpacing(20);
        text.setInteractive();

        this.text = text;

        this.input.keyboard.on('keyup', this.anyKey, this);


        let panel = this.scene.get('Nickname');

        panel.events.on('updateName', this.updateName, this);


  }


  update (time, delta){

  }

	updateName (name)
    {
        this.nicknamePlayer.setText(name);
    }

  irAMenu(){

	  game.scene.bringToTop('MenuPrincipal');
		game.scene.start('MenuPrincipal');
		game.scene.stop('Nickname');

  }

  anyKey (event)
    {
        //  Only allow A-Z . and -

        let code = event.keyCode;


        if (code === Phaser.Input.Keyboard.KeyCodes.BACKSPACE || code === Phaser.Input.Keyboard.KeyCodes.DELETE)
        {
            this.cursor.set(8, 2);
            this.pressKey();
        }
        else if (code >= Phaser.Input.Keyboard.KeyCodes.A && code <= Phaser.Input.Keyboard.KeyCodes.Z)
        {
            code -= 65;

            let y = Math.floor(code / 10);
            let x = code - (y * 10);

            this.cursor.set(x, y);
            this.pressKey();
        }
    }

    pressKey ()
    {
        let x = this.cursor.x;
        let y = this.cursor.y;
        let nameLength = this.name.length;

        if (x === 9 && y === 2 && nameLength > 0)
        {
            //  Submit
            this.events.emit('submitName', this.name);
        }
        else if (x === 8 && y === 2 && nameLength > 0)
        {
            //  Rub
            this.name = this.name.substr(0, nameLength - 1);

            this.events.emit('updateName', this.name);
        }
        else if (this.name.length < this.charLimit)
        {
            //  Add
            this.name = this.name.concat(this.chars[y][x]);

            this.events.emit('updateName', this.name);
        }
    }
}
