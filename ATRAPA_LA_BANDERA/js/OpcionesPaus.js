class OpcionesPaus extends Phaser.Scene {

	constructor(){

		super({key: "OpcionesPaus"});

	}

	preload(){

		//MENU PAUSA
		this.load.image('fondoPausa', 'assets/img/MenuPausa/fondoMPausa.png');
		this.load.image('menuPausa', 'assets/img/MenuPausa/menuPausa.png');
		this.load.image('opciones', 'assets/img/MenuOpciones/opciones.png'); //titulo opciones
		this.load.image('volumen', 'assets/img/MenuOpciones/volumen.png');

		this.load.image('reanudar', 'assets/img/MenuPausa/reanudar.png');
		this.load.image('opetions', 'assets/img/MenuPausa/opciones.png');
		this.load.image('controles', 'assets/img/MenuPausa/controles.png');
		this.load.image('abandonar', 'assets/img/MenuPausa/abandonar.png');

	}

	create(){

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

		var tituloOpciones = this.tituloOpciones = this.add.image(x, y*2/8, 'opciones').setScale(0.5);
		var cuadroVolumen = this.tituloVolumen = this.add.image(x, y, 'cuadroVolumen').setScale(0.5);
		var tituloVolumen = this.tituloVolumen = this.add.image(x, y*6/8, 'volumen').setScale(0.5);


		//BOTONES DE VOLUMEN
		this.subirVolumen = this.add.image(x*4/8, y*9/8, 'subirVolumen').setScale(0.5);
		this.subirVolumen.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.subir());

		this.bajarVolumen = this.add.image(x*12/8, y*9/8, 'bajarVolumen').setScale(0.5);
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

	volver() {

		//una vez hecho esto, vamo a las instrucciones
		this.game.state.start('MenuPausa');
	}

	subir(){

	}

	bajar(){

	}

	quitar(){

	}

}
