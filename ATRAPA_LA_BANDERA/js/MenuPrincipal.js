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
		//coloca el punto de ancla respecto del centro de la imagen
		//en plan, en un inicio el punto de ancla esta en el (0,0) pues ahora estaría en el (0.5, 0)
		//this.logoJuego.anchor.set(-1.7,-0.7);

		//BOTON JUGAR
		//add.button(pos abs sup, pos abs izq, nombre imagen, funcion que se ejecutara, contexto de ejecucion, cuadro cuando se situa el raton, cuadro para dentro/fuera del boton, cuadro para el click)
		this.botonJugar = this.add.image(x, y*7	/6, 'botonJugar');
		this.botonJugar.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.iniciarJuego());

		//BOTON CONTROLES
		this.botonControles = this.add.image(x*3/9, y*5/3, 'botonControles');
		this.botonControles.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verControles());

		//BOTON OPCIONES

		this.botonOpciones = this.add.image(x, y*5/3, 'botonOpciones');
		this.botonOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.verOpciones());

		//BOTON SALIR
		this.botonSalir = this.add.image(x*15/9, y*5/3, 'botonSalir');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.salir());
	}

	iniciarJuego(){
		this.scene.add('Juego',new Juego);
		this.scene.start('Juego');
	}

	verControles(){
		this.scene.add('ControlesPrinc',new ControlesPrinc);
		this.scene.start('ControlesPrinc');
	}

	verOpciones(){
		this.scene.add('OpcionesPrinc',new OpcionesPrinc);
		this.scene.start('OpcionesPrinc');
	}

	salir(){
		setTimeout("location.href='about.html#'", 0);
	}
}
