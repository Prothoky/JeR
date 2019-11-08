
class FinNivelW2 extends Phaser.Scene {
	constructor(){
		super ({key: "FinNivelW2"});
	}

	preload(){

    this.load.image('fondoFin','../assets/img/MenuPrincipal/fondoMP.jpg')
		this.load.image('abandonar', 'assets/icons/BOTON_SALIR.png');
    this.scene.backgroundColor = "#FFFFF";
		//this.texto = this.add.text(500, 500, 'Ganador: JUGADOR 2\nPerdedor: JUGADOR 1', { fontSize: '48px', fill: '#FF0000' });
	}

	create(){

		var height = game.config.height;
		var width = game.config.width;

		var x = width/2 ;
		var y = height/2;

		var fondoFin = this.add.sprite(x, y, "fondoFin");


		fondoFin.displayWidth = width;

		fondoFin.scaleX = fondoFin.scaleY;

		this.texto = this.add.text(x/2, 600, 'Ganador: JUGADOR 2\nPerdedor: JUGADOR 1', { fontSize: '48px', fill: '#FFFF00' });

		this.botonSalir = this.add.image(x, y*12/8, 'abandonar');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => salir());

		this.texto.setText('Ganador: JUGADOR 2\nPerdedor: JUGADOR 1');

	}

}

function salir(){
			game.scene.remove('Juego');
			game.scene.start('MenuPrincipal');
			game.scene.bringToTop('MenuPrincipal');
	}

function reload(){
	this.scene.restart();
}
