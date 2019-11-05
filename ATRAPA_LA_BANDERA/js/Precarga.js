class Precarga extends Phaser.Scene{

	constructor(){
		super({key: "Precarga"});

	}

		preload(){

			//cargamos el fondo generico
			this.load.image('fondoTotal', 'assets/img/fondoMenus.png');

			//MENU PRINCIPAL
			this.load.image('fondoMenuPrinc', 'assets/img/MenuPrincipal/fondoMP.jpg'); //FONDO
			this.load.image('logo', 'assets/img/MenuPrincipal/logo.png');

			this.load.spritesheet('botonJugar', 'assets/img/MenuPrincipal/botonJugar.png', {frameHeight: 175, frameWidth:60});//BOTON JUGAR

			this.load.spritesheet('botonControles', 'assets/img/MenuPrincipal/botonControles.png', {frameHeight:145, frameWidth:30}); //BOTON CONTROLES
			this.load.spritesheet('botonOpciones', 'assets/img/MenuPrincipal/botonOpciones.png', {frameHeight:145, frameWidth:30}); //BOTON OPCIONES
			this.load.spritesheet('botonSalir', 'assets/img/MenuPrincipal/botonSalir.png', {frameHeight:145, frameWidth:30}); //BOTON SALIR

			//MENU CONTROLES
			this.load.image('fondoControles', 'assets/img/MenuControles/fondoControles.png'); //FONDO
			this.load.spritesheet('volverControles', 'assets/img/MenuControles/volver.png', {frameHeight:347,frameWidth: 295}); //BOTON VOLVER

			//MENU OPCIONES
			this.load.image('fondoOpciones', 'assets/img/MenuOpciones/fondoOpciones.png'); //FONDO
			this.load.image('cuadroVolumen', 'assets/img/MenuOpciones/cuadroVolumen.png');//CUADRO VOLUMEN
			this.load.image('opciones', 'assets/img/MenuOpciones/opciones.png'); //titulo opciones
			this.load.image('volumen', 'assets/img/MenuOpciones/volumen.png'); //titulo volumen

			this.load.spritesheet('bajarVolumen', 'assets/img/MenuOpciones/bajarVolumen.png', {frameHeight:181,frameWidth: 145});
			this.load.spritesheet('subirVolumen', 'assets/img/MenuOpciones/subirVolumen.png', {frameHeight:181, frameWidth:145});
			this.load.spritesheet('quitarVolumen', 'assets/img/MenuOpciones/quitarVolumen.png', {frameHeight:181, frameWidth:145});
			this.load.spritesheet('volverOpciones', 'assets/img/MenuOpciones/volver.png', {frameHeight:347, frameWidth:83});

			//MENU PAUSA
			this.load.image('fondoPausa', 'assets/img/MenuPausa/fondoMPausa.png');
			this.load.image('menuPausa', 'assets/img/MenuPausa/menuPausa.png');

			this.load.spritesheet('reanudar', 'assets/img/MenuPausa/reanudar.png');
			this.load.spritesheet('opciones', 'assets/img/MenuPausa/opciones.png');
			this.load.spritesheet('controles', 'assets/img/MenuPausa/controles.png');
			this.load.spritesheet('abandonar', 'assets/img/MenuPausa/abandonar.png');
		}

		create(){
			//Cuando se haya cargado todo, iremos al Menu Principal
			this.scene.add('MenuPrincipal');
		}
}
