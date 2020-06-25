'use strict'
class FinNivelW1 extends Phaser.Scene {
	constructor(){
		super ({key: "FinNivelW1"});
	}

	preload(){
		this.load.image('fondoFin','../assets/img/PantallaFinal/victoriaRojo.jpg')
		this.load.image('abandonar', 'assets/icons/BOTON_SALIR.png');
    	game.scene.backgroundColor = "#FFFFF";
	}

	create(){

		var fondoFin = this.add.sprite(game.centerX,game.centerY, "fondoFin");
		fondoFin.displayWidth = game.centerX*2;
		fondoFin.scaleY = fondoFin.scaleX;		

		var puntuation = Phaser.Math.Between(200, 1000);
		
		this.textoWinner = this.add.text(game.centerX*7.2/8, game.centerY*5/8, 'Ganador: ',{fontFamily: "Maiandra GD",fontSize:45, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoLooser = this.add.text(game.centerX*7/8, game.centerY*7/8, 'Jugador Rojo',{fontFamily: "Maiandra GD",fontSize:40, color: '#ff0000', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoScore = this.add.text(game.centerX*3.7/8, game.centerY*12/8, 'Puntuacion: ' + puntuation,{fontFamily: "Maiandra GD",fontSize:35, color: '#ff0000', stroke:'#000000', strokeThickness: 5,align:'center'});

		this.botonSalir = this.add.image(game.centerX, game.centerY*14/8, 'abandonar');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => salir());
	}
}

function salir(){
		game.fase=0;
		game.fasebefore=0;
		game.scene.start('MenuPrincipal');
		game.scene.remove('FinNivelW1');
		game.scene.bringToTop('MenuPrincipal');
}
	
function reload(){
	game.scene.restart();
}
