class MenuPrincipal extends Phaser.Scene{

	constructor(){
		super ({key: "MenuPrincipal"});
	}

	Pantalla.MenuPrincipal = function(game) {};

	preload(){
		//añadimos el tipo de letra atari-smooth
		this.load.bitmapFont('atari-smooth', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');

	}

	create(){
		this.add.sprite (0, 0, 'fondoMenuPrinc');

		//añadimos el sprite del titulo
		this.logoJuego = this.add.sprite(400, 80, 'logo');
		//coloca el punto de ancla respecto del centro de la imagen
		//en plan, en un inicio el punto de ancla esta en el (0,0) pues ahora estaría en el (0.5, 0)
		//this.logoJuego.anchor.set(-1.7,-0.7);



		//NICKNAMES
		//BitmapText(game, x, y, font, text, size, align)

		//añadimos el texto donde pone el nickname 1 con atari smoth
		this.nickName1 = this.add.bitmapText(400, 320, 'atari-smooth', 'JUGADOR 1:', 21);
		//aqui deberiamos poner el cuadro a rellenar con el nickname

		//añadimos el texto donde pone el nickname 1 con atari smoth
		this.nickName2 = this.add.bitmapText(1000, 320, 'atari-smooth', 'JUGADOR 2:', 21);
		//aqui deberiamos poner el cuadro a rellenar con el nickname


		//BOTON JUGAR
		//add.button(pos abs sup, pos abs izq, nombre imagen, funcion que se ejecutara, contexto de ejecucion, cuadro cuando se situa el raton, cuadro para dentro/fuera del boton, cuadro para el click)
		this.botonJugar = this.add.button(712.5, 510, 'botonJugar', this.iniciarJuego, this, 2, 0, 1);
		//coloca el punto de ancla del bton con el que se hacen los calculos
		//this.botonJugar.anchor.set(-2.5,-3);
		//usa el hand cursor
		this.botonJugar.input.useHandCursor = true;

		//BOTON CONTROLES
		this.botonControles = this.add.button(530, 610, 'botonControles', this.verControles, this, 2, 0, 1);
		//this.botonControles.anchor.set(-1.7, -10);
		this.botonControles.input.useHandCursor = true;

		//BOTON OPCIONES

		this.botonOpciones = this.add.button(730, 610, 'botonOpciones', this.verOpciones, this, 2, 0, 1);
		//this.botonOpciones.anchor.set(-3, -10);
		this.botonOpciones.input.useHandCursor = true;

		//BOTON SALIR
		this.botonSalir = this.add.button(930, 610, 'botonSalir', this.salir, this, 2, 0, 1);
		//this.botonSalir.anchor.set(-4.3, -10);
		this.botonSalir.input.useHandCursor = true;
	}

	iniciarJuego(){
		this.game.state.start('Juego');
	}

	verControles(){
		this.game.state.start('ControlesPrinc');
	}

	verOpciones(){
		this.game.state.start('OpcionesPrinc');
	}

	salir(){

	}
}
