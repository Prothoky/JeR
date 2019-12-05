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
		game.polling = this.time.addEvent({ delay: 1000, callback: Alive, loop: true});
		//declaramos las variables para controlar los botones por teclado
		this.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
		this.C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
		this.J = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);

		this.cameras.main.setBackgroundColor(0x000000);

		if(!game.SubMainMenuloaded){
			game.scene.add('ControlesPrinc', new ControlesPrinc);
			game.scene.add('OpcionesPrinc',new OpcionesPrinc);
			game.scene.add('Juego',new Juego);
			game.SubMainMenuloaded=true;
		}
		game.scene.sendToBack('ControlesPrinc');
		game.scene.stop('ControlesPrinc');

		game.scene.sendToBack('OpcionesPrinc');
		game.scene.stop('OpcionesPrinc');

		game.scene.sendToBack('Juego');
		game.scene.stop('Juego');

		var height = game.config.height;
		var width = window.innerWidth-300;

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
		if(game.fasebefore==3 || game.fasebefore==-3){
			game.loaded=false;
			game.onfase = 0;
		}
			game.scene.start('Juego');
			game.scene.bringToTop('Juego');
			game.scene.stop('MenuPrincipal');
	}

	verControles(){
		game.scene.run('ControlesPrinc');
		game.scene.bringToTop('ControlesPrinc');
	}

	verOpciones(){
			game.scene.run('OpcionesPrinc');
			game.scene.bringToTop('OpcionesPrinc');
	}


}
