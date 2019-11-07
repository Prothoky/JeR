class OpcionesPaus extends Phaser.Scene {

	constructor(){

		super({key: "OpcionesPaus", active: true});

	}

	preload(){
		//MENU OPCIONES
		this.load.image('fondoOpciones', 'assets/img/MenuOpciones/fondoOpciones.png'); //FONDO
		this.load.image('cuadroVolumen', 'assets/img/MenuOpciones/cuadroVolumen.png');//CUADRO VOLUMEN
		this.load.image('options', 'assets/img/MenuOpciones/options.png'); //titulo opciones
		this.load.image('volumen', 'assets/img/MenuOpciones/volumen.png'); //titulo volumen

		this.load.image('bajarVolumen', 'assets/img/MenuOpciones/bajarVolumen.png');
		this.load.image('subirVolumen', 'assets/img/MenuOpciones/subirVolumen.png');
		this.load.image('quitarVolumen', 'assets/img/MenuOpciones/quitarVolumen.png');
		this.load.image('volverOpciones', 'assets/img/MenuOpciones/volver.png');
	}

	create(){

		/*if (this.MPrincCreado == undefined){

			this.MPrincCreado = this.scene.add('MenuPrincipal', new MenuPrincipal, false);

		}*/

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

		var tituloOpciones = this.tituloOpciones = this.add.image(x, y*3/8, 'options').setScale(0.5);
		var cuadroVolumen = this.tituloVolumen = this.add.image(x, y, 'cuadroVolumen');
		var tituloVolumen = this.tituloVolumen = this.add.image(x, y*6/8, 'volumen').setScale(0.8);

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

	volver() {
		this.scene.sendToBack('OpcionesPaus');
		this.scene.stop('OpcionesPaus');
		this.scene.resume('MenuPausa');

	}

	subir(){

	}

	bajar(){

	}

	quitar(){

	}

}
