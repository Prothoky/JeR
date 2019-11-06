class MenuPausa extends Phaser.Scene{

	constructor(){

		super ({key: "MenuPausa"});

	}

preload(){

	this.load.image('fondoPausa', 'assets/img/MenuPausa/fondoMPausa.png');
	this.load.image('menuPausa', 'assets/img/MenuPausa/menuPausa.png');

	this.load.spritesheet('reanudar', 'assets/img/MenuPausa/reanudar.png');
	this.load.spritesheet('opciones', 'assets/img/MenuPausa/opciones.png');
	this.load.spritesheet('controles', 'assets/img/MenuPausa/controles.png');
	this.load.spritesheet('abandonar', 'assets/img/MenuPausa/abandonar.png');

}
	create(){

		var height = game.config.height;
		var width = game.config.width;

		//get center of the canvas
		var x = width/2 ;
		var y = height/2;

		var fondoPausa = this.add.sprite (80, 40, 'fondoPausa');

		fondoPausa.displayWidth = width;
		fondoPausa.scaleX = fondoPausa.scaleY;

		this.titMenuPausa = this.add.image(x, y*4/8, 'menuPausa');

		//BOTONES DE OPCIONES
		this.botonReanudar = this.add.image(x*566.5/1600, y*252.87/720, 'reanudar');
		this.botonReanudar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.reanudar());

		this.botonOpciones = this.add.button(566.5, 352.87, 'opciones', this.opciones, this, 2, 0, 1);
		this.botonOpciones.input.useHandCursor = true;

		this.botonControles = this.add.button(566.5, 452.87, 'controles', this.controles, this, 2, 0, 1);
		this.botonControles.input.useHandCursor = true;

		//BOTON VOLVER
		this.botonAbandonar = this.add.button(566.5, 552.87, 'abandonar', this.abandonar, this, 2, 0, 1);
		this.botonAbandonar.input.useHandCursor = true;

	}

	reanudar() {

		//una vez hecho esto, vamo a las instrucciones
		this.game.state.start('Juego');
	}

	opciones(){

		this.game.state.start('OpcionesPaus');
	}

	controles(){

		this.game.state.start('ControlesPaus');
	}

	abandonar(){

			this.game.state.start('MenuPrincipal');

	}
}
