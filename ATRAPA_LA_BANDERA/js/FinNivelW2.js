
class FinNivelW2 extends Phaser.Scene {
	constructor(){

		super ({key: "FinNivelW2"});

	}

	preload(){

		//el fondo del fin de nivel
		//this.load.image('fondoFin', 'assets/img/FinNivel/fondoFin.png');
		//cargamos el logo arriba
		//this.load.image('logo', 'assets/img/FinNivel/logo.png');g');
		//boton de salir
		//this.load.image('salir', 'assets/img/FinNivel/salir.png');

		var texto;

	}

	create(){

		var height = game.config.height;
		var width = game.config.width;

		var x = width/2 ;
		var y = height/2;

		var fondoFin = this.add.sprite (x, y, 'fondoFin');

		fondoFin.displayWidth = width;
		fondoFin.scaleX = fondoFin.scaleY;

		texto = this.add.text(16, 16, 'Ganador: \n Perdedor:', { fontSize: '32px', fill: '#000' });

/*
		this.botonSalir = this.add.image(x, y*12/8, 'abandonar');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.salir());
*/

		/*if(j1 == winner){
			texto.setText('Ganador: JUGADOR 1\n Perdedor:JUGADOR 2');
		}else{
			texto.setText('Ganador: JUGADOR 2\n Perdedor:JUGADOR 1');
		}*/
	}

	salir (){
		this.scene.sendToBack('FinNivelW2');
		this.scene.stop('FinNivelW2');
		this.scene.resume('MenuPrincipal');
	}

}
