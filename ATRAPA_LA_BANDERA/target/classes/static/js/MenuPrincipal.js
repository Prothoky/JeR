'use strict'
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

		this.load.image('botonUsuarios', 'assets/img/MenuPrincipal/botonOpciones.png');//provisional
	}

	create(){
		game.polling = this.time.addEvent({ delay: 1000, callback: Alive, loop: true});
		//declaramos las variables para controlar los botones por teclado
		this.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
		this.C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
		this.J = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);

		this.cameras.main.setBackgroundColor(0x000000);

		if(!game.MainMenuloaded){
			game.scene.add('ControlesPrinc', new ControlesPrinc);
			game.scene.add('OpcionesPrinc',new OpcionesPrinc);
			//game.scene.add('UsuariosConectados',new UsuariosConectados);
			game.scene.add('Juego',new Juego);
			game.MainMenuloaded=true;
		}
		game.scene.sendToBack('ControlesPrinc');
		game.scene.stop('ControlesPrinc');

		game.scene.sendToBack('OpcionesPrinc');
		game.scene.stop('OpcionesPrinc');

		//game.scene.sendToBack('UsuariosConectados');
		//game.scene.stop('UsuariosConectados');

		game.scene.sendToBack('Juego');
		game.scene.stop('Juego');

		var fondoMenuPrinc = this.add.image(game.centerX,game.centerY, "fondoMenuPrinc");
		fondoMenuPrinc.displayWidth = game.centerX*2;
    fondoMenuPrinc.scaleY = fondoMenuPrinc.scaleX;

		//BOTON JUGAR
		this.botonJugar = this.add.image(game.centerX, game.centerY*0.85, 'botonJugar');
		this.botonJugar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.iniciarJuego());

		//BOTON CONTROLES
		this.botonControles = this.add.image(game.centerX, game.centerY*1.05 , 'botonControles');
		this.botonControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verControles());

		//BOTON OPCIONES
		this.botonOpciones = this.add.image(game.centerX, game.centerY*1.2, 'botonOpciones');
		this.botonOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verOpciones());

		//BOTON USUARIOS
		this.botonUsuarios = this.add.image(game.centerX, game.centerY*1.35, 'botonUsuarios');
		this.botonUsuarios.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verUsuarios());

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

	verUsuarios(){
			//game.scene.run('UsuariosConectados');
			//game.scene.bringToTop('UsuariosConectados');
	}


}
