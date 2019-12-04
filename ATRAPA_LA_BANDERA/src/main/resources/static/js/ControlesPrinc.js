class ControlesPrinc extends Phaser.Scene {
	constructor(){
		super ({key: "ControlesPrinc"});
	}

	preload(){
		//MENU CONTROLES
		this.load.image('fondoControles', 'assets/img/MenuControles/fondoControles.png'); //FONDO
		this.load.image('volverControles', 'assets/img/MenuControles/volver.png', {frameHeight:347,frameWidth: 295}); //BOTON VOLVER
	}
	create(){

		this.ZERO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);

		var height = game.config.height;
		var width = game.config.width;

		//get center of the canvas
		var x = width/2 ;
		var y = height/2;

		var fondoControlesPaus = this.add.sprite(x, y, "fondoControles");

		//set the width of the sprite
		fondoControlesPaus.displayWidth = width;
		//scale evenly
		fondoControlesPaus.scaleX = fondoControlesPaus.scaleY;

		var tituloControles = this.tituloControles = this.add.image(x, y*2/8, 'opciones').setScale(0.5);
		//var cuadroVolumen = this.tituloVolumen = this.add.image(x, y, 'cuadroVolumen').setScale(0.5);
		//var tituloVolumen = this.tituloVolumen = this.add.image(x, y*6/8, 'volumen').setScale(0.5);


		//BOTON VOLVER
		this.volverControles = this.add.image(x, y*14/8, 'volverControles').setScale(0.4);
		this.volverControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.volver());

	}

	update(time, delta){

		if(this.ZERO.isDown){
			this.volver();
		}

	}

	volver() {
		game.scene.sendToBack('ControlesPrinc');
		game.scene.stop('ControlesPrinc');
		game.scene.resume('MenuPrincipal');
	}
}
