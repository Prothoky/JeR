class ControlesPaus extends Phaser.Scene {
	constructor(){
		super ({key: "ControlesPaus"});
	}

	preload(){
		//MENU CONTROLES
		this.load.image('fondoControles', 'assets/img/MenuControles/FONDO MENÚ CONTROLES.png'); //FONDO
		this.load.image('volverControles', 'assets/img/MenuControles/volver.png');//, {frameHeight:347,frameWidth: 295}); //BOTON VOLVER
	}
	create(){

		this.ZERO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);

		var height = game.config.height;
    var width = window.innerWidth-300;

		//get center of the canvas
		var x = width/2 ;
		var y = height/2;

		var fondoControlesPaus = this.add.sprite(x, y, "fondoControles");

		//set the width of the sprite
		fondoControlesPaus.displayWidth = width;
		//scale evenly
		fondoControlesPaus.scaleX = fondoControlesPaus.scaleY;

		//BOTON VOLVER
		this.volverControles = this.add.image(x, y*13/8, 'volverControles');
		this.volverControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.volver());

	}

	update(time, delta){

		if(this.ZERO.isDown){
			this.volver();
		}

	}

	volver() {
		game.scene.sendToBack('ControlesPaus');
		game.scene.stop('ControlesPaus');
		game.scene.resume('MenuPausa');
	}
}
