'use strict'
class FinNivelW2 extends Phaser.Scene {
	constructor(){
		super ({key: "FinNivelW2"});
	}

	preload(){
		this.load.image('fondoFin','../assets/img/PantallaFinal/victoriaAzul.jpg')
		this.load.image('abandonar', 'assets/icons/BOTON_SALIR.png');
    	game.scene.backgroundColor = "#FFFFF";
	}

	create(){
		var height = game.config.height;
		var width = window.innerWidth-300;

		var x = width/2;
		var y = height/2;

		var fondoFin = this.add.sprite(x, y, "fondoFin");

		fondoFin.displayWidth = width;

		fondoFin.scaleX = fondoFin.scaleY;
		
		var puntuation = Phaser.Math.Between(200, 1000);
		
		this.textoWinner = this.add.text(x*7.2/8, y*5/8, 'Ganador: ',{fontFamily: "Maiandra GD",fontSize:45, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoLooser = this.add.text(x*7/8, y*7/8, 'Jugador Azul',{fontFamily: "Maiandra GD",fontSize:40, color: '#0066ff', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoScore = this.add.text(x*9.5/8, y*12/8, 'Puntuacion: ' + puntuation,{fontFamily: "Maiandra GD",fontSize:35, color: '#0066ff', stroke:'#000000', strokeThickness: 5,align:'center'});

		this.botonSalir = this.add.image(x, y*14/8, 'abandonar');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => salir());
	}
}

function salir(){
			game.onfase=0;
			game.fasebefore=0;
			game.scene.start('MenuPrincipal');
			game.scene.remove('FinNivelW2');
			game.scene.bringToTop('MenuPrincipal');
	}
function reload(){
	game.scene.restart();
}
