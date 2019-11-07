class MenuPausa extends Phaser.Scene{
	constructor(){
		super ({key: "MenuPausa"});
	}

	preload(){

	this.load.image('fondoPausa', 'assets/img/MenuPausa/fondoMPausa.png');
	this.load.image('menuPausa', 'assets/img/MenuPausa/menuPausa.png');

	this.load.image('reanudar', 'assets/img/MenuPausa/reanudar.png');
	this.load.image('opciones', 'assets/img/MenuPausa/opciones.png');
	this.load.image('controles', 'assets/img/MenuPausa/controles.png');
	this.load.image('abandonar', 'assets/img/MenuPausa/abandonar.png');

}

	create(){

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
		if(!this.controlpaus){
			this.scene.add('ControlesPaus', new ControlesPaus);
			this.scene.add('OpcionesPaus',new OpcionesPaus);
			this.scene.sendToBack('ControlesPaus');
			this.scene.stop('ControlesPaus');
			this.scene.sendToBack('OpcionesPaus');
			this.scene.stop('OpcionesPaus');
			this.controlpaus=true;
		}
	}

	reanudar() {
		this.scene.sendToBack('MenuPausa');
		this.scene.stop('MenuPausa');
		this.scene.resume('Juego');
		game.paused=false;
	}

	opciones(){
		this.scene.run('OpcionesPaus');
		this.scene.bringToTop('OpcionesPaus');
		this.scene.pause('MenuPausa');
	}

	controles(){
			this.scene.run('ControlesPaus');
			this.scene.bringToTop('ControlesPaus');
			this.scene.pause('MenuPausa');
	}

	abandonar(){
		this.scene.bringToTop('MenuPrincipal');
		this.scene.resume('MenuPrincipal');
		game.exit=true;
	}
}
