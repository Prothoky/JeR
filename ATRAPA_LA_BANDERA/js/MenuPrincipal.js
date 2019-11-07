class MenuPrincipal extends Phaser.Scene{
	constructor(){
		super ({key: "MenuPrincipal"});
	}

	preload(){

    //MENU PRINCIPAL
    this.load.image('fondoMenuPrinc', 'assets/img/MenuPrincipal/fondoMP.jpg'); //FONDO


    this.load.image('botonJugar', 'assets/img/MenuPrincipal/botonJugar.png');//BOTON JUGAR

    this.load.image('botonControles', 'assets/img/MenuPrincipal/botonControles.png'); //BOTON CONTROLES
    this.load.image('botonOpciones', 'assets/img/MenuPrincipal/botonOpciones.png'); //BOTON OPCIONES
    this.load.image('botonSalir', 'assets/img/MenuPrincipal/botonSalir.png'); //BOTON SALIR

		//this.load.script('ControlesPrinc', "./js/ControlesPrinc.js");
		//this.load.script('OpcionesPrinc', "./js/OpcionesPrinc.js");


	}

	create(){

		//CONTROLES POR TECLADO
		this.C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
		this.J = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
		this.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

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


		//BOTON JUGAR
		this.botonJugar = this.add.image(x, y, 'botonJugar');
		this.botonJugar.setInteractive({ useHandCursor: true  } )
		//on CLICK
		.on('pointerdown', () => this.iniciarJuego());
		//on HOVER
		//.on('pointerover', () => this.enterButtonHoverState() )
		//on RELEASE
		//.on('pointerout', () => this.enterButtonRestState() );

		//BOTON CONTROLES
		this.botonControles = this.add.image(x, y*10/8, 'botonControles');
		this.botonControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verControles());

		//BOTON OPCIONES

		this.botonOpciones = this.add.image(x, y*11/8, 'botonOpciones');
		this.botonOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verOpciones());


	}

	update (time, delta){

		if(this.O.isDown){
			this.verOpciones();
		}
		if(this.C.isDown){
			this.verControles();
		}
		if(this.J.isDown){
			this.iniciarJuego();
		}

	}

	iniciarJuego(){

		this.scene.sleep('MenuPrincipal');
		this.scene.start('Juego');
	}

	verControles(){
		this.scene.start('ControlesPrinc');
	}

	verOpciones(){
		this.scene.start('OpcionesPrinc');
	}


}
