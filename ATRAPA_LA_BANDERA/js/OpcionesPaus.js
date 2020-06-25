'use strict'
class OpcionesPaus extends Phaser.Scene {

	constructor(){

		super({key: "OpcionesPaus", active: true});

	}

	preload(){
		//MENU OPCIONES
		this.load.image('fondoOpciones', 'assets/img/MenuOpciones/fondoMO.png'); //FONDO

		this.load.image('bajarVolumen', 'assets/img/MenuOpciones/bajarVolumen.png');
		this.load.image('subirVolumen', 'assets/img/MenuOpciones/subirVolumen.png');
		this.load.image('quitarVolumen', 'assets/img/MenuOpciones/quitarVolumen.png');
		this.load.image('volverOpciones', 'assets/img/MenuOpciones/volver.png');

		this.load.bitmapFont('arcade', 'assets/fonts/bitmap/arcade.png', 'assets/fonts/bitmap/arcade.xml');

		this.load.audio('musica', './js/Juego.js');
	}

	create(){

		this.ZERO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
		this.SEVEN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
		this.EIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
		this.NINE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);

		var fondoOpcionesPaus = this.add.sprite(game.centerX, game.centerY, "fondoOpciones");

		//set the width of the sprite
		fondoOpcionesPaus.displayWidth = game.centerX; //En el inspector no se pq no se cambia pero me come un webo
		//scale evenly
		fondoOpcionesPaus.scaleX = fondoOpcionesPaus.scaleY;

		//this.volumenText = this.add.text(game.centerX game.centerY*7/8, '0.5', { fontSize: '32px', fill: '#000' });
		this.volumenText = this.add.bitmapText(game.centerX*7.9/8, game.centerY*7.1/8, 'arcade', '0.5: ').setTint(0xffcc00);
		this.volumenText.setScale(0.7);
		var level = Math.round((game.sound.volume)*10)/10;
		this.volumenText.setText(level*10);

		//BOTONES DE VOLUMEN
		this.subirVolumen = this.add.image(game.centerX*6/8, game.centerY*9/8, 'subirVolumen').setScale(0.5);
		this.subirVolumen.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.subir());

		this.bajarVolumen = this.add.image(game.centerX*10/8, game.centerY*9/8, 'bajarVolumen').setScale(0.5);
		this.bajarVolumen.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.bajar());

		this.quitarVolumen = this.add.image(game.centerX, game.centerY*9/8, 'quitarVolumen').setScale(0.5);
		this.quitarVolumen.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.quitar());

				//BOTON VOLVER
		this.volverOpciones = this.add.image(game.centerX, game.centerY*13.5/8, 'volverOpciones');
		this.volverOpciones.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.volver());
	}

	update(time, delta){

		if(this.ZERO.isDown){
			this.volver();
		}

		if(this.SEVEN.isDown){
			this.subir();
		}

		if(this.EIGHT.isDown){
			this.quitar();
		}

		if(this.NINE.isDown){
			this.bajar();
		}

		if(game.sound.mute){
			this.volumenText.setText(0);
		}
		else{
			this.volumenText.setText(game.prev_sound_volume);
		}
	}

	volver() {

		game.scene.sendToBack('OpcionesPaus');
		game.scene.stop('OpcionesPaus');
		game.scene.resume('MenuPausa');

	}

	subir(){
		if(!	game.sound.mute){
			if(game.sound.volume<1){
				var level = Math.round((game.sound.volume+0.1)*10)/10;
				game.sound.setVolume(level);
				game.prev_sound_volume=level*10;
				this.volumenText.setText(game.prev_sound_volume);
			}
			else{
				game.sound.setVolume(1);
				game.prev_sound_volume=10;
				this.volumenText.setText(game.prev_sound_volume);
			}
		}
	}

	bajar(){
		if(!game.sound.mute){
			if(game.sound.volume>0){
				var level = Math.round((game.sound.volume-0.1)*10)/10;
				game.sound.setVolume(level);
				game.prev_sound_volume=level*10;
				this.volumenText.setText(game.prev_sound_volume);
			}
			else{
				game.sound.setVolume(0);
				game.prev_sound_volume=0;
				this.volumenText.setText(0);
			}
		}
	}

	quitar(){
		if (game.sound.mute){
			game.sound.mute = false;
			this.volumenText.setText(game.prev_sound_volume);
		}else{
			game.sound.mute = true;
			this.volumenText.setText('0');
		}
	}

}
