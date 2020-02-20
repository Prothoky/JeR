'use strict'
class ControlesPrinc extends Phaser.Scene {
	constructor(){
		super ({key: "ControlesPrinc"});
	}

	preload(){
		//MENU CONTROLES
		this.load.image('fondoControles', 'assets/img/MenuControles/fondoMC.png'); //FONDO
		this.load.image('volverControles', 'assets/img/MenuControles/volver.png');//, {frameHeight:347,frameWidth: 295}); //BOTON VOLVER
	}
	create(){

		var fondoControlesPaus = this.add.sprite(game.centerX, game.centerY, "fondoControles");
		//set the width of the sprite
		fondoControlesPaus.displayWidth = game.centerX;
		//scale evenly
		fondoControlesPaus.scaleX = fondoControlesPaus.scaleY;

		//var tituloControles = this.tituloControles = this.add.image(x, y*2/8, 'opciones').setScale(0.5);
		//var cuadroVolumen = this.tituloVolumen = this.add.image(x, y, 'cuadroVolumen').setScale(0.5);
		//var tituloVolumen = this.tituloVolumen = this.add.image(x, y*6/8, 'volumen').setScale(0.5);


		//BOTON VOLVER
		this.volverControles = this.add.image(game.centerX, game.centerY*13/8, 'volverControles');
		this.volverControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.volver());

	}

	update(time, delta){

	}

	volver() {
		game.scene.sendToBack('ControlesPrinc');
		game.scene.stop('ControlesPrinc');
		game.scene.resume('MenuPrincipal');
	}
}
