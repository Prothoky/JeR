class OpcionesPrinc extends Phaser.Scene {

	constructor(){

		super({key: "OpcionesPrinc", active:true});

	}

	preload(){
		//MENU OPCIONES
		this.load.image('fondoOpciones', 'assets/img/MenuOpciones/fondoOpciones.png'); //FONDO

		this.load.image('bajarVolumen', 'assets/img/MenuOpciones/bajarVolumen.png');
		this.load.image('subirVolumen', 'assets/img/MenuOpciones/subirVolumen.png');
		this.load.image('quitarVolumen', 'assets/img/MenuOpciones/quitarVolumen.png');
		this.load.image('volverOpciones', 'assets/img/MenuOpciones/volver.png');

		this.load.audio('musica', './js/Juego.js');
	}

	create(){

		this.ZERO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);

		var height = game.config.height;
		var width = game.config.width;

		//get center of the canvas
		var x = width/2 ;
		var y = height/2;

		var fondoOpcionesPrinc = this.add.sprite(x, y, "fondoOpciones");

		//set the width of the sprite
		fondoOpcionesPrinc.displayWidth = width;
		//scale evenly
		fondoOpcionesPrinc.scaleX = fondoOpcionesPrinc.scaleY;

		this.volumenText = this.add.text(x, y*7/8, '0.5', { fontSize: '32px', fill: '#000' });


		//BOTONES DE VOLUMEN
		this.subirVolumen = this.add.image(x*6/8, y*9/8, 'subirVolumen').setScale(0.5);
		this.subirVolumen.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.subir());

		this.bajarVolumen = this.add.image(x*10/8, y*9/8, 'bajarVolumen').setScale(0.5);
		this.bajarVolumen.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.bajar());

		this.quitarVolumen = this.add.image(x, y*9/8, 'quitarVolumen').setScale(0.5);
		this.quitarVolumen.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.quitar());

				//BOTON VOLVER
		this.volverOpciones = this.add.image(x, y*14/8, 'volverOpciones').setScale(0.4);
		this.volverOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.volver());
	}

	update(time, delta){

		if(this.ZERO.isDown){
			this.volver();
		}

	}

	volver() {
		this.scene.sendToBack('OpcionesPrinc');
		this.scene.stop('OpcionesPrinc');
		this.scene.resume('MenuPrincipal');

	}

	subir(){

		game.sound.setVolume(1);
		this.volumenText.setText('1');

	}

	bajar(){

		game.sound.setVolume(0);
		this.volumenText.setText('0');

	}

	quitar(){

		game.sound.mute = true;
		game.sound.setVolume(0);
		this.volumenText.setText('0');

	}

}
