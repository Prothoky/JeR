class MenuPausa extends Phaser.Scene{

	constructor(){

		super ({key: "MenuPausa"});

	}

	preload(){

	//console.log("estamos en el kitkat");

	this.load.image('fondoPausa', 'assets/img/MenuPausa/fondoMPausa.png');
	this.load.image('menuPausa', 'assets/img/MenuPausa/menuPausa.png');

	this.load.image('reanudar', 'assets/img/MenuPausa/reanudar.png');
	this.load.image('opciones', 'assets/img/MenuPausa/opciones.png');
	this.load.image('controles', 'assets/img/MenuPausa/controles.png');
	this.load.image('abandonar', 'assets/img/MenuPausa/abandonar.png');

	this.load.script('ControlesPaus', "./js/ControlesPaus.js");
	this.load.script('OpcionesPaus', "./js/OpcionesPaus.js");
	//this.load.script('MenuPrincipal', "./js/MenuPrincipal.js");

}


	create(){

		if (this.controlesCreados == undefined){

			this.controlesCreados = this.scene.add('ControlesPaus', new ControlesPaus, false);

		}

		if (this.opcionesCreadas == undefined){

			this.opcionesCreadas = this.scene.add('OpcionesPaus',new OpcionesPaus, false);

		}

		if (this.juegoCreado == undefined){

			this.juegoCreado = this.scene.add('Juego',new Juego, false);

		}
		if (this.MenuPrincipalCreado == undefined){

			this.MenuPrincipalCreado = this.scene.add('MenuPrincipal',new MenuPrincipal, false);

		}

		var height = game.config.height;
		var width = game.config.width;

		var x = width/2 ;
		var y = height/2;

		var fondoPausa = this.add.sprite (x, y, 'fondoPausa');

		fondoPausa.displayWidth = width;
		fondoPausa.scaleX = fondoPausa.scaleY;

		this.titMenuPausa = this.add.image(x, y*4/8, 'menuPausa');

		//BOTONES DE OPCIONES
		this.botonReanudar = this.add.image(x, y*6/8, 'reanudar');
		this.botonReanudar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.reanudar());

		this.botonOpciones = this.add.image(x, y, 'opciones');
		this.botonOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.opciones());


		this.botonControles = this.add.image(x, y*10/8, 'controles');
		this.botonControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.controles());

		//BOTON VOLVER
		this.botonAbandonar = this.add.image(x, y*12/8, 'abandonar');
		this.botonAbandonar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.abandonar());

	}

	reanudar() {

		this.scene.start('Juego');
	}

	opciones(){

		this.scene.add('OpcionesPaus', new OpcionesPaus);
	}

	controles(){

		this.scene.start('ControlesPaus');

	}

	abandonar(){

			this.scene.start('MenuPrincipal');

	}
}
