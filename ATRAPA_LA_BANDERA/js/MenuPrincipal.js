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
	}

	create(){

		//declaramos las variables para controlar los botones por teclado
		this.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
		this.C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
		this.J = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);

		this.cameras.main.setBackgroundColor(0x000000);

		this.scene.add('ControlesPrinc', new ControlesPrinc);
		this.scene.sendToBack('ControlesPrinc');
		this.scene.stop('ControlesPrinc');

		this.scene.add('OpcionesPrinc',new OpcionesPrinc);
		this.scene.sendToBack('OpcionesPrinc');
		this.scene.stop('OpcionesPrinc');

		this.scene.add('Juego',new Juego);
		this.scene.sendToBack('Juego');
		this.scene.stop('Juego');

		var height = game.config.height;
		var width = game.config.width;

		//get center of the canvas
		var x = width/2 ;
		var y = height/2;

		var fondoMenuPrinc = this.add.sprite(x, y, "fondoMenuPrinc");


		fondoMenuPrinc.displayWidth = width;

		fondoMenuPrinc.scaleX = fondoMenuPrinc.scaleY;

		//BOTON JUGAR
		this.botonJugar = this.add.image(x, y, 'botonJugar');
		this.botonJugar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.iniciarJuego());

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
			this.scene.run('Juego');
			this.scene.bringToTop('Juego');
			this.scene.pause('MenuPrincipal');
	}

	verControles(){
		this.scene.run('ControlesPrinc');
		this.scene.bringToTop('ControlesPrinc');
	}

	verOpciones(){
			this.scene.run('OpcionesPrinc');
			this.scene.bringToTop('OpcionesPrinc');
	}


}
