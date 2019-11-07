class MenuPrincipal extends Phaser.Scene{
	constructor(){
		super ({key: "MenuPrincipal"});
	}

	preload(){

    //MENU PRINCIPAL
    this.load.image('fondoMenuPrinc', 'assets/img/MenuPrincipal/fondoMP.jpg'); //FONDO
    this.load.image('logo', 'assets/img/MenuPrincipal/logo.png');

    this.load.image('botonJugar', 'assets/img/MenuPrincipal/botonJugar.png');//BOTON JUGAR

    this.load.image('botonControles', 'assets/img/MenuPrincipal/botonControles.png'); //BOTON CONTROLES
    this.load.image('botonOpciones', 'assets/img/MenuPrincipal/botonOpciones.png'); //BOTON OPCIONES
    this.load.image('botonSalir', 'assets/img/MenuPrincipal/botonSalir.png'); //BOTON SALIR

		//this.load.script('ControlesPrinc', "./js/ControlesPrinc.js");
		//this.load.script('OpcionesPrinc', "./js/OpcionesPrinc.js");


	}

	create(){

		if (this.controlesCreados == undefined){

			this.controlesCreados = this.scene.add('ControlesPrinc', new ControlesPrinc, false);

		}

		if (this.opcionesCreadas == undefined){

			this.opcionesCreadas = this.scene.add('OpcionesPrinc',new OpcionesPrinc, false);

		}

		if (this.juegoCreado == undefined){

			this.juegoCreado = this.scene.add('Juego',new Juego, false);

		}


		var height = game.config.height;
		var width = game.config.width;

		//get center of the canvas
		var x = width/2 ;
		var y = height/2;

		var fondoMenuPrinc = this.add.sprite(x, y, "fondoMenuPrinc");

		//set the width of the sprite
		fondoMenuPrinc.displayWidth = width;
		//scale evenly
		fondoMenuPrinc.scaleX = fondoMenuPrinc.scaleY;

		//añadimos el sprite del titulo

		this.MenuPrincipal_Layout = this.add.image(x, y*4/8, 'logo');

		//BOTON JUGAR
		this.botonJugar = this.add.image(x, y*7	/6, 'botonJugar');
		this.botonJugar.setInteractive({ useHandCursor: true  } )
		//on CLICK
		.on('pointerdown', () => this.iniciarJuego());
		//on HOVER
		//.on('pointerover', () => this.enterButtonHoverState() )
		//on RELEASE
		//.on('pointerout', () => this.enterButtonRestState() );

		//BOTON CONTROLES
		this.botonControles = this.add.image(x*6/9, y*5/3, 'botonControles');
		this.botonControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verControles());

		//BOTON OPCIONES

		this.botonOpciones = this.add.image(x*12/9, y*5/3, 'botonOpciones');
		this.botonOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verOpciones());


	}

	iniciarJuego(){
		this.scene.start('Juego');
	}

	verControles(){
		this.scene.start('ControlesPrinc');
	}

	verOpciones(){
		this.scene.start('OpcionesPrinc');
	}


}
