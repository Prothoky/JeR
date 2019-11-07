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
	}

	create(){
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
