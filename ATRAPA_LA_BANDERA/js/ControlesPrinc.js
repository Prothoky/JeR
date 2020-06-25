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

		//BOTON VOLVER
		this.volverControles = this.add.image(game.centerX, game.centerY*13/8, 'volverControles');
		this.volverControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.volver());

	}

	volver() {
		game.scene.sendToBack('ControlesPrinc');
		game.scene.stop('ControlesPrinc');
		game.scene.resume('MenuPrincipal');
	}
}
