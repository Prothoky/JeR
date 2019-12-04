
class FinNivelW1 extends Phaser.Scene {
	constructor(){
		super ({key: "FinNivelW1"});
	}

	preload(){
		//game.scene.add("MenuPrincipal")
        this.load.image('fondoFin','../assets/img/MenuPrincipal/fondoMP.jpg')
		this.load.image('abandonar', 'assets/icons/BOTON_SALIR.png');
        game.scene.backgroundColor = "#FFFFF";
		//this.texto = this.add.text(500, 500, 'Ganador: JUGADOR 1\nPerdedor: JUGADOR 2', { fontSize: '48px', fill: '#FF0000' });
	}

	create(){

		var height = game.config.height;
		var width = game.config.width;

		var x = width/2 ;
		var y = height/2;

		var fondoFin = this.add.sprite(x, y, "fondoFin");


		fondoFin.displayWidth = width;

		fondoFin.scaleX = fondoFin.scaleY;

		this.texto = this.add.text(x/2, 600, 'Ganador: '+ game.inputNickname1 + ' 2\nPerdedor:'+ game.inputNickname2, { fontSize: '48px', fill: '#FFFF00' });

		this.botonSalir = this.add.image(x, y*12/8, 'abandonar');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => salir());

		this.texto.setText('Ganador: '+ game.inputNickname1.value+ '\nPerdedor: Guest');

	}

}

function salir(){
			game.scene.start('MenuPrincipal');
			game.scene.remove('FinNivelW1');
			game.scene.bringToTop('MenuPrincipal');

	}
