class OpcionesPaus extends Phaser.Scene {

	constructor(){

		super({key: "OpcionesPaus"});

	}

	create(){
		this.add.sprite (80, 40, 'fondoOpciones');
		this.add.sprite(566, 77, 'opciones');
		this.add.sprite (312, 212.5, 'cuadroVolumen');
		this.add.sprite(710, 232.5, 'volumen');

		//BOTONES DE VOLUMEN
		this.botonSubir = this.add.button(417.665, 307.5, 'subirVolumen', this.subir, this, 2, 0, 1);
		this.botonSubir.input.useHandCursor = true;

		this.botonBajar = this.add.button(700.325, 307.5, 'bajarVolumen', this.bajar, this, 2, 0, 1);
		this.botonBajar.input.useHandCursor = true;

		this.botonQuitar = this.add.button(982.985, 307.5, 'quitarVolumen', this.quitar, this, 2, 0, 1);
		this.botonQuitar.input.useHandCursor = true;

		//BOTON VOLVER
		this.botonVolver = this.add.button(612.5, 540, 'volverOpciones', this.volver, this, 2, 0, 1);
		//this.botonVolver.anchor.set(-2.5,-3);
		this.botonVolver.input.useHandCursor = true;
	}

	volver() {

		//una vez hecho esto, vamo a las instrucciones
		this.game.state.start('MenuPausa');
	}

	subir(){

	}

	bajar(){

	}

	quitar(){

	}

}
