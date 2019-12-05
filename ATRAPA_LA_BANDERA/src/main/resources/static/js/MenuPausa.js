class MenuPausa extends Phaser.Scene{
	constructor(){
		super ({key: "MenuPausa"});
	}

	preload(){

	this.load.image('fondoPausa', 'assets/img/MenuPausa/MENÚ PAUSA.png');

	this.load.image('reanudar', 'assets/img/MenuPausa/reanudar.png');
	this.load.image('opciones', 'assets/img/MenuPausa/opciones.png');
	this.load.image('controles', 'assets/img/MenuPausa/controles.png');
	this.load.image('abandonar', 'assets/img/MenuPausa/abandonar.png');

}

	create(){

		this.ONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
		this.TWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
		this.THREE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
		this.FOUR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);

		var height = game.config.height;
		var width = window.innerWidth-300;

		var x = width/2 ;
		var y = height/2;

		var fondoPausa = this.add.sprite (x, y, 'fondoPausa');

		fondoPausa.displayWidth = width;
		fondoPausa.scaleX = fondoPausa.scaleY;


		//BOTONES DE OPCIONES
		this.botonReanudar = this.add.image(x, y*7/8, 'reanudar');
		this.botonReanudar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.reanudar());

		this.botonOpciones = this.add.image(x, y*9/8, 'opciones');
		this.botonOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.opciones());


		this.botonControles = this.add.image(x, y*11/8, 'controles');
		this.botonControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.controles());

		//BOTON VOLVER
		this.botonAbandonar = this.add.image(x, y*13/8, 'abandonar');
		this.botonAbandonar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.abandonar());

		if(!this.controlpaus){
			game.scene.add('ControlesPaus', new ControlesPaus);
			game.scene.add('OpcionesPaus',new OpcionesPaus);
			game.scene.sendToBack('ControlesPaus');
			game.scene.stop('ControlesPaus');
			game.scene.sendToBack('OpcionesPaus');
			game.scene.stop('OpcionesPaus');
			this.controlpaus=true;
		}
	}

	update (time, delta){

		if(this.ONE.isDown){
			this.reanudar();
		}
		if(this.TWO.isDown){
			this.opciones();
		}
		if(this.THREE.isDown){
			this.controles();
		}
		if(this.FOUR.isDown){
			this.abandonar();
		}

	}

	reanudar() {
		game.scene.sendToBack('MenuPausa');
		game.scene.stop('MenuPausa');
		game.scene.resume('Juego');
		game.paused=false;
	}

	opciones(){
		game.scene.run('OpcionesPaus');
		game.scene.bringToTop('OpcionesPaus');
		//game.scene.pause('MenuPausa');
	}

	controles(){
			game.scene.run('ControlesPaus');
			game.scene.bringToTop('ControlesPaus');
			//game.scene.pause('MenuPausa');
	}

	abandonar(){
		game.scene.bringToTop('MenuPrincipal');
		game.scene.start('MenuPrincipal');
		game.scene.stop('Juego');
		game.exit=true;
	}
}
