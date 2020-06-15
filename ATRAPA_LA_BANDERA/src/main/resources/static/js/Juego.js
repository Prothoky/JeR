'use strict'
class Juego extends Phaser.Scene{
	constructor(){
		super({key: "Juego"});
	}

	collectBandera(player)
	{
		this.bandera.disableBody(true,true);
		player.ownBandera = true;
	}
	respawn(player){
		player.y = 250;
		player.x += 100;
		player.setVelocityY(0);
		if(player.ownBandera){
			player.ownBandera = false;
			this.bandera.enableBody(player.x+-500,250,true,true);
			this.bandera.visible=true;
		}
	}

	respawnx(player,i){
		player.y = 250;
		player.x += i;
		player.setVelocityY(0);
		if(player.ownBandera){
			player.ownBandera = false;
			this.bandera.enableBody(player.x+-500,250,true,true);
			this.bandera.visible=true;
		}
	}

	respawny(player){
		player.y = 250;
		//player.x += i*100;
		player.setVelocityY(0);
		if(player.ownBandera){
			player.ownBandera = false;
			this.bandera.enableBody(player.x+-500,250,true,true);
			this.bandera.visible=true;
		}
	}

	changeFase(player,i){
		game.loaded=false;
		game.fasebefore=game.onfase;
		game.onfase+=i;
		if(game.onfase == 3){
			game.fasebefore=game.onfase;
			game.scene.start('FinNivelW2');
			game.scene.sendToBack('Juego');
			game.scene.sleep('Juego');
		}
		if(game.onfase == -3){
			game.fasebefore=game.onfase;
			game.scene.start('FinNivelW1');
			game.scene.sendToBack('Juego');
			game.scene.sleep('Juego');
		}else{
			this.scene.restart();
			game.scene.bringToTop('Juego');
		}
	}

	async reenter(player,x){
		await(500);
		player.x = x;
	}

	hasTheFlag(player){
		return player.ownBandera;
	}

	checkatacks(){
		if(this.O.isDown && !(this.T.isDown|| this.Y.isDown) && game.dis <75){
			this.respawn(this.player2,this.player1.x);
		}
		else if(this.K.isDown && !(this.G.isDown|| this.H.isDown)&& game.dis <75){
			this.respawn(this.player2,this.player1.x);
		}
		else if(this.Y.isDown&& !(this.T.isDown || this.O.isDown)&& game.dis <75){
			this.respawn(this.player1,this.player2.x);
		}
		else if(this.H.isDown && !(this.G.isDown || this.K.isDown)&& game.dis <75){
			this.respawn(this.player1,this.player2.x);
		}
	}

	preloadImages(){
		if(game.onfase==0){
			//Sprite del fondo
			this.load.image("fondocenter","../assets/map/Centro/Fondo0.jpg");
			this.load.image("sobrefondo","../assets/map/Centro/SobreFondo0.png");
		}
		if(game.onfase==-1){
			//Sprite del fondo1left
			this.load.image("fondo1left","../assets/map/Izquierda1/Fondo1.jpg");
			this.load.image("sobrefondo1left","../assets/map/Izquierda1/SobreFondo1.png");
		}
		if(game.onfase==-2){
			//Sprite del fondo2left
			this.load.image("fondo2left","../assets/map/Izquierda2/Fondo2.jpg");
			this.load.image("sobrefondo2left","../assets/map/Izquierda2/SobreFondo2.png");
		}
		if(game.onfase==1){
			//Sprite del fondo
			var f1r = this.load.image("fondo1right","../assets/map/Derecha1/Fondo1.jpg");
			var sf1r= this.load.image("sobrefondo1right","../assets/map/Derecha1/SobreFondo1.png");
		}
		if(game.onfase==2){
			//Sprite del fondo
			this.load.image("fondo2right","../assets/map/Derecha2/Fondo2.jpg");
			this.load.image("sobrefondo2right","../assets/map/Derecha2/SobreFondo2.png");
		}

		//Sprite del muñeco para pruebas
		this.load.image("maniqui","../assets/icons/Jugador-rojo.png");

		//Plataforma
		this.load.image("pltf","../assets/icons/plt.png"); 

		//Sprite de BANDERA
		this.load.image("bandera","../assets/icons/Bandera.png");
	}

	preloadSprites(){
		//J1 Sprites
		//Sin bandera
		this.load.spritesheet('J1RUN','../assets/animations/JRAnimations/CORRER_ROJO.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1HIT_UP','../assets/animations/JRAnimations/GOLPE_ARRIBA_ROJO.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1HIT_DOWN','../assets/animations/JRAnimations/GOLPE_ABAJO_ROJO.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1IDLE','../assets/animations/JRAnimations/PARADO_ROJO.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1IDLE_SCOPE_UP','../assets/animations/JRAnimations/PARADO_APUNTADO_ARRIBA_ROJO.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1IDLE_SCOPE_DOWN','../assets/animations/JRAnimations/PARADO_APUNTADO_ABAJO_ROJO.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1JUMP','../assets/animations/JRAnimations/SALTO_ROJO.png',{frameHeight: 240, frameWidth:250});
		//Con bandera
		this.load.spritesheet('J1RUNB','../assets/animations/JRAnimations/CORRER_ROJO_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1HIT_UPB','../assets/animations/JRAnimations/GOLPE_ARRIBA_ROJO_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1HIT_DOWNB','../assets/animations/JRAnimations/GOLPE_ABAJO_ROJO_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1IDLEB','../assets/animations/JRAnimations/PARADO_ROJO_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1IDLE_SCOPE_UPB','../assets/animations/JRAnimations/PARADO_APUNTADO_ARRIBA_ROJO_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1IDLE_SCOPE_DOWNB','../assets/animations/JRAnimations/PARADO_APUNTADO_ABAJO_ROJO_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J1JUMPB','../assets/animations/JRAnimations/SALTO_ROJO_BANDERA.png',{frameHeight: 240, frameWidth:250});

		//J2 Sprites
		//Sin bandera
		this.load.spritesheet('J2RUN','../assets/animations/JAAnimations/CORRER_AZUL.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2HIT_UP','../assets/animations/JAAnimations/GOLPE_ARRIBA_AZUL.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2HIT_DOWN','../assets/animations/JAAnimations/GOLPE_ABAJO_AZUL.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2IDLE','../assets/animations/JAAnimations/PARADO_AZUL.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2IDLE_SCOPE_UP','../assets/animations/JAAnimations/PARADO_APUNTADO_ARRIBA_AZUL.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2IDLE_SCOPE_DOWN','../assets/animations/JAAnimations/PARADO_APUNTADO_ABAJO_AZUL.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2JUMP','../assets/animations/JAAnimations/SALTO_AZUL.png',{frameHeight: 240, frameWidth:250});
		//Con bandera
		this.load.spritesheet('J2RUNB','../assets/animations/JAAnimations/CORRER_AZUL_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2HIT_UPB','../assets/animations/JAAnimations/GOLPE_ARRIBA_AZUL_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2HIT_DOWNB','../assets/animations/JAAnimations/GOLPE_ABAJO_AZUL_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2IDLEB','../assets/animations/JAAnimations/PARADO_AZUL_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2IDLE_SCOPE_UPB','../assets/animations/JAAnimations/PARADO_APUNTADO_ARRIBA_AZUL_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2IDLE_SCOPE_DOWNB','../assets/animations/JAAnimations/PARADO_APUNTADO_ABAJO_AZUL_BANDERA.png',{frameHeight: 240, frameWidth:250});
		this.load.spritesheet('J2JUMPB','../assets/animations/JAAnimations/SALTO_AZUL_BANDERA.png',{frameHeight: 240, frameWidth:250});
	}

	preloadAudios(){
		//Musica del juego
		this.load.audio('musica', '../assets/music/Spread the Wings (Rock Howard) - Garou Mark of the Wolves - OST.mp3');
	}

	createAnimations(){

		//ANIMATION RUN
		this.anims.create({
			key: 'RUN',
			frames: this.anims.generateFrameNumbers('J1RUN',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
			}),
			repeat:-1,
			frameRate:24
		})
		this.anims.create({
			key: 'RUN2',
			frames: this.anims.generateFrameNumbers('J2RUN',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
			}),
			repeat:-1,
			frameRate:24
		})
		this.anims.create({
			key: 'RUNB',
			frames: this.anims.generateFrameNumbers('J1RUNB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
			}),
			repeat:-1,
			frameRate:24
		})
		this.anims.create({
			key: 'RUN2B',
			frames: this.anims.generateFrameNumbers('J2RUNB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
			}),
			repeat:-1,
			frameRate:24
		})

		//ANIMATION IDLE
		this.anims.create({
			key: 'IDLE',
			frames: this.anims.generateFrameNumbers('J1IDLE',{
				frames: [0,1,2,3,4,5,6,7,8,9]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'IDLE2',
			frames: this.anims.generateFrameNumbers('J2IDLE',{
				frames: [0,1,2,3,4,5,6,7,8,9]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'IDLE2',
			frames: this.anims.generateFrameNumbers('J2IDLE',{
				frames: [0,1,2,3,4,5,6,7,8,9]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'IDLEB',
			frames: this.anims.generateFrameNumbers('J1IDLEB',{
				frames: [0,1,2,3,4,5,6,7,8,9]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'IDLE2B',
			frames: this.anims.generateFrameNumbers('J2IDLEB',{
				frames: [0,1,2,3,4,5,6,7,8,9]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'IDLE2B',
			frames: this.anims.generateFrameNumbers('J2IDLEB',{
				frames: [0,1,2,3,4,5,6,7,8,9]
			}),
			repeat:1,
			frameRate:24
		});

		//ANIMATION SCOPE DOWN
		this.anims.create({
			key: 'SCOPE_DOWN',
			frames: this.anims.generateFrameNumbers('J1IDLE_SCOPE_DOWN',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'SCOPE_DOWN2',
			frames: this.anims.generateFrameNumbers('J2IDLE_SCOPE_DOWN',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'SCOPE_DOWNB',
			frames: this.anims.generateFrameNumbers('J1IDLE_SCOPE_DOWNB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'SCOPE_DOWN2B',
			frames: this.anims.generateFrameNumbers('J2IDLE_SCOPE_DOWNB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});

		//ANIMATION SCOPE UP
		this.anims.create({
			key: 'SCOPE_UP',
			frames: this.anims.generateFrameNumbers('J1IDLE_SCOPE_UP',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'SCOPE_UP2',
			frames: this.anims.generateFrameNumbers('J2IDLE_SCOPE_UP',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'SCOPE_UPB',
			frames: this.anims.generateFrameNumbers('J1IDLE_SCOPE_UPB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});
		this.anims.create({
			key: 'SCOPE_UP2B',
			frames: this.anims.generateFrameNumbers('J2IDLE_SCOPE_UPB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});

		//ANIMATION HIT UP
		this.anims.create({
			key: 'HIT_UP',
			frames: this.anims.generateFrameNumbers('J1HIT_UP',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});
		this.anims.create({
			key: 'HIT_UP2',
			frames: this.anims.generateFrameNumbers('J2HIT_UP',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});
		this.anims.create({
			key: 'HIT_UPB',
			frames: this.anims.generateFrameNumbers('J1HIT_UPB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});
		this.anims.create({
			key: 'HIT_UP2B',
			frames: this.anims.generateFrameNumbers('J2HIT_UPB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});

		//ANIMATION HIT DOWN
		this.anims.create({
			key: 'HIT_DOWN',
			frames: this.anims.generateFrameNumbers('J1HIT_DOWN',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});
		this.anims.create({
			key: 'HIT_DOWN2',
			frames: this.anims.generateFrameNumbers('J2HIT_DOWN',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});
		this.anims.create({
			key: 'HIT_DOWNB',
			frames: this.anims.generateFrameNumbers('J1HIT_DOWNB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});
		this.anims.create({
			key: 'HIT_DOWN2B',
			frames: this.anims.generateFrameNumbers('J2HIT_DOWNB',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
			}),
			repeat:0,
			frameRate:24
		});

		//ANIMATION JUMP
		this.anims.create({
			key: 'JUMP',
			frames: this.anims.generateFrameNumbers('J1JUMP',{
				frames: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
			}),
			repeat:1,
			frameRate:11
		});
		this.anims.create({
			key: 'JUMP2',
			frames: this.anims.generateFrameNumbers('J2JUMP',{
				frames: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
			}),
			repeat:1,
			frameRate:11
		});
		this.anims.create({
			key: 'JUMPB',
			frames: this.anims.generateFrameNumbers('J1JUMPB',{
				frames: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
			}),
			repeat:1,
			frameRate:11
		});
		this.anims.create({
			key: 'JUMP2B',
			frames: this.anims.generateFrameNumbers('J2JUMPB',{
				frames: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
			}),
			repeat:1,
			frameRate:11
		});

	}

	checkmove(player){
		if(player.body.touching.down){
			if (this.cursor.up.isDown)
			{
				player.setVelocityY(-450);
			}
			else if(this.cursor.left.isDown){
				player.setVelocityX(-550);
				player.flipX=false;
				if(player.ownBandera)player.anims.play('RUNB',true);
				else player.anims.play('RUN',true);
				player.status = "RUN";
			}else if(this.cursor.right.isDown){
				player.setVelocityX(550);
				player.flipX=true;
				if(player.ownBandera)player.anims.play('RUNB',true);
				else player.anims.play('RUN',true);
				player.status = "RUN";
			}else{
				player.setVelocityX(0);
				if(this.L.isDown){
					console.log("Apuntar abajo");
					if(player.ownBandera)
					player.anims.play('SCOPE_DOWNB',true);
					else
					player.anims.play('SCOPE_DOWN',true);
					player.status = "SCOPE_DOWN";
				}else if(this.P.isDown){
					console.log("Apuntar arriba");
					if(player.ownBandera)
					player.anims.play('SCOPE_UPB',true);
					else player.anims.play('SCOPE_UP',true);
					player.status = "SCOPE_UP";
				}else if(this.O.isDown){
					console.log("Golpe arriba");
					if(player.ownBandera)
					player.anims.play('HIT_UPB',true);
					else player.anims.play('HIT_UP',true);
					player.status = "HIT_UP";
				}else if(this.K.isDown){
					console.log("Golpe abajo");
					if(player.ownBandera)
					player.anims.play('HIT_DOWNB',true);
					else player.anims.play('HIT_DOWN',true);
					player.status = "HIT_DOWN";
				}else
				if(player.ownBandera)
					player.anims.play('IDLEB',true);
					else player.anims.play('IDLE',true);
					player.status = "IDLE";
				}
			}else{
				if(this.cursor.left.isDown){
					player.setVelocityX(-550);
					player.flipX=false;
					if(player.ownBandera)
					player.anims.play('JUMPB',true);
					else player.anims.play('JUMP',true);
					player.status = "JUMP";
				}else if(this.cursor.right.isDown){
					player.setVelocityX(550);
					player.flipX=true;
					if(player.ownBandera)
					player.anims.play('JUMPB',true);
					else
					player.anims.play('JUMP',true);
					player.status = "JUMP";
				}else{
					if(player.ownBandera)
					player.anims.play('JUMPB',true);
					else
					player.anims.play('JUMP',true);
					player.status = "JUMP";
				}
			}
	}

	preload(){
		
		console.log("PRELOAD STARTED");

		game.loaded=false;
		game.exit=false;
		game.paused=false;

		this.preloadImages();
		this.preloadSprites();
		this.preloadAudios();

		if(!game.FinNivelloaded){
			game.scene.add('FinNivelW1', new FinNivelW1);
			game.scene.add('FinNivelW2',new FinNivelW2);
			game.FinNivelloaded=true;
		}

		console.log("PRELOAD FINISH");
	}

	create(){
		
		console.log("CREATE STARTED");

		game.polling = this.time.addEvent({ delay: 1000, callback: Alive, loop: true});
		game.loaded=false;

		//MENU de PAUSA
		if(!game.sceneload){
			game.scene.add('MenuPausa', new MenuPausa);
			game.sceneload=true;
		}
		game.scene.sendToBack('MenuPausa');
		game.scene.sleep('MenuPausa');

		//Musica
		this.sound.pauseOnBlur=false;
		this.music = this.sound.add('musica',{loop: true});
		if(!game.playing){
			this.music.play();
			////////////////////////////////////////////////////////////////////////////////////////////////////////////
			game.sound.mute=true;
			game.playing=true;
		}
		
		//CONTROLES TECLADO
		this.M = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
		//Controles menu PAUSA
		this.ESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
		//JUGADOR 1 (Rojo)
		//Movimiento
		this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		//Defensa y ataque
		this.T = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
		this.Y = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
		this.G = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
		this.H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

		//JUGADOR 2 (Azul)
		//Movimiento (flechas)
		this.cursor = this.input.keyboard.createCursorKeys();
		//Defensa y ataque J2
		this.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
		this.P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
		this.L = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
		this.K = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

		//Centro del canvas
		this.cW= this.sys.game.config.width/2;
		this.cH= 720/2;

		this.createAnimations();

		if(game.onfase == 0){

			//Crear plataforma
			this.platforms_0 = this.physics.add.staticGroup();
			this.platforms_0.create(-1, 562, 'pltf').setScale(0.8,0.5).refreshBody(); //Plataforma enmedio
			this.platforms_0.create(-1320, 562, 'pltf').setScale(5.015,0.5).refreshBody(); //Plataforma Izquierda
			this.platforms_0.create(1310, 562, 'pltf').setScale(5.15,0.5).refreshBody(); //Plataforma Derecha

			//Creación del fondo del juego
			this.fondo = this.add.image(0,this.cH,"fondocenter");
			this.fondo.displayHeight = this.cH*2;
			this.fondo.scaleX = this.fondo.scaleY;
			this.fondo.fixedToCamera = true;

			//Crear bandera
			this.bandera = this.physics.add.image(0,450,'bandera');
			this.bandera.setBounce(0.2);
			this.bandera.setCollideWorldBounds(false);
			this.bandera.setScale(0.75,0.75);

			//Creacion de los jugadores ARREGLAR CO

			//Jugador 1
			this.player1 = this.physics.add.sprite(420,450,'maniqui', 2);
			//this.player1.create(100, 100, 'pltf').refreshBody();
			//this.player1 = this.physics.add.staticGroup();
			//this.player1.create(1500, 563, 'pltf').setScale(3.5,0.5).refreshBody();
			//this.player1.setSize(100, 200, true);
			this.player1.flipX=false;		
			this.player1.setCollideWorldBounds(false);
			this.player1.setBounce(-0.3);
			this.player1.setOrigin(0.5,1);
			//this.player1.ownBandera = false;

			//Jugador 2
			this.player2 = this.physics.add.sprite(-420,450,'maniqui',2);
			this.player2.flipX=true;
			this.player2.setCollideWorldBounds(false);
			this.player2.setBounce(-0.3);
			this.player2.setOrigin(0.5,1);
			//this.player2.ownBandera=false;

			this.sobrefondo = this.add.image(0,this.cH,"sobrefondo");
			this.sobrefondo.displayHeight = this.cH*2;
			this.sobrefondo.scaleX = this.sobrefondo.scaleY;

			if(game.fasebefore==-1){
				this.bandera.x = -2000;
				this.player2.x = -2000;
				//this.player2.y = 561;
				this.player1.x = -1800;
				//this.player1.y = 561;
				//this.player2.ownBandera = true;
			}
			if(game.fasebefore == 1){
				this.bandera.x = 2000;
				this.player1.x = 2000;
				this.player2.x = 1800;
				//this.player1.ownBandera = true;
			}

			this.physics.add.collider(this.player1, this.platforms_0);
			this.physics.add.collider(this.player2, this.platforms_0);
			this.physics.add.collider(this.bandera, this.platforms_0);
		}

		if(game.onfase == -1){

			//Crear plataforma

			this.platforms_minus1 = this.physics.add.staticGroup();
			this.platforms_minus1.create(1500, 563, 'pltf').setScale(3.8,0.5).refreshBody(); //dcha del todo (1)
			this.platforms_minus1.create(475.1, 428.3, 'pltf').setScale(0.59,0.5).refreshBody(); //2
			this.platforms_minus1.create(105, 322.1, 'pltf').setScale(0.65,0.5).refreshBody(); //3
			this.platforms_minus1.create(-275.1, 257.1, 'pltf').setScale(0.85,0.5).refreshBody(); //4
			this.platforms_minus1.create(-862.4, 319, 'pltf').setScale(1.45,0.5).refreshBody(); //5
			this.platforms_minus1.create(-1326.9, 248.2, 'pltf').setScale(0.25,0.5).refreshBody(); //6
			this.platforms_minus1.create(-1900, 373, 'pltf').setScale(1.94,0.5).refreshBody(); //7

			//Creación del fondo del juego

			this.fondo = this.add.image(0,this.cH,"fondo1left");
			//set the width of the sprite
			this.fondo.displayHeight = this.cH*2;
			//scale evenly
			this.fondo.scaleX = this.fondo.scaleY;

			//Crear bandera
			this.bandera = this.physics.add.sprite(0, 450,'bandera');
			this.bandera.setBounce(0.2);
			this.bandera.setCollideWorldBounds(false);
			this.bandera.setScale(0.75,0.75);

			//Creacion de los jugadores

			//Jugador 1
			this.player1 = this.physics.add.sprite(-420,450,'maniqui',2);
			this.player1.flipX=false;
			this.player1.setCollideWorldBounds(false);
			//this.player1.setBounce(0.3);
			this.player1.setOrigin(0.5,1);
			//this.player1.ownBandera=false;

			//Jugador 2
			this.player2 = this.physics.add.sprite(420,450,'maniqui',2);
			this.player2.flipX=true;
			this.player2.setCollideWorldBounds(false);
			//this.player2.setBounce(0.3);
			this.player2.setOrigin(0.5,1);
			//this.player2.ownBandera=false;
			//this.player2.setTint(0x4400ff);

			this.sobrefondo = this.add.image(0,this.cH,"sobrefondo1left");
			this.sobrefondo.displayHeight = this.cH*2;
			this.sobrefondo.scaleX = this.sobrefondo.scaleY;

			if(game.fasebefore ==  0 ){
				this.bandera.x = 1800;
				this.player2.x = 2000;
				//this.player2.y = 564;
				this.player1.x = 1800;
				//this.player1.y = 564;
				//this.player1.ownBandera=true;
			}
			if(game.fasebefore == -2 ){
				this.bandera.x = -1800;
				this.player1.x = -2000;
				this.player2.x = -1800;
				//this.player2.ownBandera=true;
			}

			this.physics.add.collider(this.player1, this.platforms_minus1);
			this.physics.add.collider(this.player2, this.platforms_minus1);
			this.physics.add.collider(this.bandera, this.platforms_minus1);
		}

		if(game.onfase == -2){

			//Crear plataforma
			this.platforms_minus2 = this.physics.add.staticGroup();
			this.platforms_minus2.create(1120, 372.5, 'pltf').setScale(5.52,0.5).refreshBody();
			this.platforms_minus2.create(-296, 440, 'pltf').setScale(0.45,0.5).refreshBody();
			this.platforms_minus2.create(-1470, 595, 'pltf').setScale(4.6,0.5).refreshBody();

			//Creación del fondo del juego
			this.fondo = this.add.image(0,this.cH,"fondo2left");
			this.fondo.displayHeight = this.cH*2;
			this.fondo.scaleX = this.fondo.scaleY;

			//Crear bandera

			this.bandera = this.physics.add.sprite(0, 450,'bandera');
			this.bandera.setBounce(0.2);
			this.bandera.setCollideWorldBounds(false);
			this.bandera.setScale(0.75,0.75);

			//Creacion de los jugadores

			//Jugador 1
			this.player1 = this.physics.add.sprite(-420,450,'maniqui',2);
			this.player1.flipX=true;
			this.player1.setCollideWorldBounds(false);
			//this.player1.setBounce(0.3);
			this.player1.setOrigin(0.5,1);
			this.player1.ownBandera=true;

			//Jugador 2
			this.player2 = this.physics.add.sprite(420,450,'maniqui',2);
			this.player2.flipX=false;
			this.player2.setCollideWorldBounds(false);
			//this.player2.setBounce(0.3);
			this.player2.setOrigin(0.5,1);
			this.player2.ownBandera=false;
			//this.player2.setTint(0x4400ff);

			this.sobrefondo = this.add.image(0,this.cH,"sobrefondo2left");
			this.sobrefondo.displayHeight = this.cH*2;
			this.sobrefondo.scaleX = this.sobrefondo.scaleY;

			this.bandera.x = 2000;
			this.bandera.y = 350;

			this.player1.x = 2000;
			this.player1.y = 350;

			this.player2.x = 1800;
			this.player2.y = 350;

			this.physics.add.collider(this.player1, this.platforms_minus2);
			this.physics.add.collider(this.player2, this.platforms_minus2);
			this.physics.add.collider(this.bandera, this.platforms_minus2);
		}

		if(game.onfase == 1){

			//Crear plataforma

			this.platforms_plus1 = this.physics.add.staticGroup();
			this.platforms_plus1.create(1900, 373, 'pltf').setScale(1.94,0.5).refreshBody(); //1
			this.platforms_plus1.create(1325, 248, 'pltf').setScale(0.25,0.5).refreshBody(); //2
			this.platforms_plus1.create(850, 319, 'pltf').setScale(1.45,0.5).refreshBody(); //3
			this.platforms_plus1.create(274.9, 257.1, 'pltf').setScale(0.85,0.5).refreshBody(); //4
			this.platforms_plus1.create(-101, 319.1, 'pltf').setScale(0.65,0.5).refreshBody(); //5
			this.platforms_plus1.create(-475.1, 429, 'pltf').setScale(0.59,0.5).refreshBody(); //6
			this.platforms_plus1.create(-1500, 563, 'pltf').setScale(3.8,0.5).refreshBody(); //7

			//Creación del fondo del juego

			this.fondo = this.add.image(0,this.cH,"fondo1right");
			//set the width of the sprite
			this.fondo.displayHeight = this.cH*2;
			//scale evenly
			this.fondo.scaleX = this.fondo.scaleY;

			//Crear bandera


			this.bandera = this.physics.add.sprite(0, 450, 'bandera');
			this.bandera.setBounce(0.2);
			this.bandera.setCollideWorldBounds(false);
			this.bandera.setScale(0.75,0.75);

			//Creacion de los jugadores

			//Jugador 1
			this.player1 = this.physics.add.sprite(-400,450,'maniqui',2);
			this.player1.flipX=false;
			this.player1.setCollideWorldBounds(false);
			//this.player1.setBounce(0.3);
			this.player1.setOrigin(0.5,1);
			this.player1.ownBandera=false;

			//Jugador 2
			this.player2 = this.physics.add.sprite(400,450,'maniqui',2);
			this.player2.flipX=true;
			this.player2.setCollideWorldBounds(false);
			//this.player2.setBounce(0.3);
			this.player2.setOrigin(0.5,1);
			this.player2.ownBandera=false;
			//this.player2.setTint(0x4400ff);

			this.sobrefondo = this.add.image(0,this.cH,"sobrefondo1right");
			this.sobrefondo.displayHeight = this.cH*2;
			this.sobrefondo.scaleX = this.sobrefondo.scaleY;

			if(game.fasebefore ==  0 ){
				this.bandera.x = -2100;
				this.player2.x = -2100;
				this.player1.x = -1800;

			}
			if(game.fasebefore == 2 ){
				this.bandera.x = 2100;
				this.player1.x = 2100;
				this.player2.x = 1800;
			}
			this.physics.add.collider(this.player1, this.platforms_plus1);
			this.physics.add.collider(this.player2, this.platforms_plus1);
			this.physics.add.collider(this.bandera, this.platforms_plus1);
		}

		if(game.onfase == 2){

			//Crear plataforma

			this.platforms_plus2 = this.physics.add.staticGroup();
			this.platforms_plus2.create(-1120, 372.5, 'pltf').setScale(5.52,0.5).refreshBody();
			this.platforms_plus2.create(296, 440, 'pltf').setScale(0.45,0.5).refreshBody();
			this.platforms_plus2.create(1470, 595, 'pltf').setScale(4.6,0.5).refreshBody();

			//Creación del fondo del juego

			this.fondo = this.add.image(0,this.cH,"fondo2right");
			//set the width of the sprite
			this.fondo.displayHeight = this.cH*2;
			//scale evenly
			this.fondo.scaleX = this.fondo.scaleY;

			//Crear bandera

			this.bandera = this.physics.add.sprite(0, 450, 'bandera');
			this.bandera.setBounce(0.2);
			this.bandera.setCollideWorldBounds(false);
			this.bandera.setScale(0.75,0.75);

			//Creacion de los jugadores

			//Jugador 1
			this.player1 = this.physics.add.sprite(-420,450,'maniqui',2);
			this.player1.flipX=false;
			this.player1.setCollideWorldBounds(false);
			//this.player1.setBounce(0.3);
			this.player1.setOrigin(0.5,1);
			this.player1.ownBandera=false;

			//Jugador 2
			this.player2 = this.physics.add.sprite(420,450,'maniqui',2);
			this.player2.flipX=true;
			this.player2.setCollideWorldBounds(false);
			//this.player2.setBounce(0.3);
			this.player2.setOrigin(0.5,1);
			this.player2.ownBandera=false;
			//this.player2.setTint(0x4400ff);

			this.sobrefondo = this.add.image(0,this.cH,"sobrefondo2right");
			this.sobrefondo.displayHeight = this.cH*2;
			this.sobrefondo.scaleX = this.sobrefondo.scaleY;

			this.bandera.x = -2000;
			this.bandera.y = 350;

			this.player2.x = -2000;
			this.player2.y = 350;

			this.player1.x = -1800;
			this.player1.y = 350;

			this.physics.add.collider(this.player1, this.platforms_plus2);
			this.physics.add.collider(this.player2, this.platforms_plus2);
			this.physics.add.collider(this.bandera, this.platforms_plus2);

		}

		//fondo negro

		this.camera = this.cameras.main;
		this.camera.setBackgroundColor(0x000000);
		this.camera.scrollY=0;

		this.player1.body.setSize(125,225,true);
		this.player2.body.setSize(125,225,true);

		console.log("Fase " + game.onfase + " CREATE");

		game.loaded=true;
	}

	update(time, delta){
		if(!game.loaded || game.onfase ==3 || game.onfase ==-3){

		}else{
			if(game.exit){
				game.scene.sendToBack('Juego');
				game.scene.sleep('Juego');
				game.scene.resume('MenuPausa');
				this.music.sleep();
				game.playing=false;
			}
			else{

				//Musica
				if(this.M.isDown && !game.MPulsed){
					if(game.sound.mute){
						game.sound.mute=false;
						game.MPulsed=true;
					}
					else if(!game.sound.mute){
						game.sound.mute=true;
						game.MPulsed=true;
					}
				}
				if(this.M.isUp){
					game.MPulsed=false;
				}

				//Menu de Pausa
				if(this.ESC.isDown && !game.paused){
						game.scene.start('MenuPausa');
						game.scene.bringToTop('MenuPausa');
						game.paused=true;
				}

				//Para calcular la distancia entre los jugadores
				game.dis = Math.abs(this.player2.x - this.player1.x);
/*
				//Movimiento Js
				this.checkmove(this.player1);
				this.checkmove(this.player2);
*/
				//Movimiento J1
				if(this.player1.body.touching.down){
					if (this.cursor.up.isDown)
					{
						this.player1.setVelocityY(-450);
					}
					else if(this.cursor.left.isDown){
						this.player1.setVelocityX(-550);
						this.player1.flipX=false;
						if(this.player1.ownBandera)
						this.player1.anims.play('RUNB',true);
						else
						this.player1.anims.play('RUN',true);
						this.player1.status = "RUN";
					}else if(this.cursor.right.isDown){
						this.player1.setVelocityX(550);
						this.player1.flipX=true;
						if(this.player1.ownBandera)
						this.player1.anims.play('RUNB',true);
						else
						this.player1.anims.play('RUN',true);
						this.player1.status = "RUN";
					}else{
						this.player1.setVelocityX(0);
						if(this.L.isDown){
							console.log("Apuntar abajo");
							if(this.player1.ownBandera)this.player1.anims.play('SCOPE_DOWNB',true);
							else
							this.player1.anims.play('SCOPE_DOWN',true);
							this.player1.status = "SCOPE_DOWN";
						}else if(this.P.isDown){
							console.log("Apuntar arriba");
							if(this.player1.ownBandera)
							this.player1.anims.play('SCOPE_UPB',true);
							else
							this.player1.anims.play('SCOPE_UP',true);
							this.player1.status = "SCOPE_UP";
						}else if(this.O.isDown){
							console.log("Golpe arriba");
							if(this.player1.ownBandera) this.player1.anims.play('HIT_UPB',true);
							else
							this.player1.anims.play('HIT_UP',true);
							this.player1.status = "HIT_UP";
						}else if(this.K.isDown){
							console.log("Golpe abajo");
							if(this.player1.ownBandera) this.player1.anims.play('HIT_DOWNB',true);
							else
							this.player1.anims.play('HIT_DOWN',true);
							this.player1.status = "HIT_DOWN";
						}else
						if(this.player1.ownBandera)
						this.player1.anims.play('IDLEB',true);
						else
							this.player1.anims.play('IDLE',true);
							this.player1.status = "IDLE";
						}
					}else{

						if(this.cursor.left.isDown){
							this.player1.setVelocityX(-550);
							this.player1.flipX=false;
							if(this.player1.ownBandera)
							this.player1.anims.play('JUMPB',true);
							else
							this.player1.anims.play('JUMP',true);
							this.player1.status = "JUMP";
						}else if(this.cursor.right.isDown){
							this.player1.setVelocityX(550);
							this.player1.flipX=true;
							if(this.player1.ownBandera)
							this.player1.anims.play('JUMPB',true);
							else
							this.player1.anims.play('JUMP',true);
							this.player1.status = "JUMP";
						}else{
							if(this.player1.ownBandera)
							this.player1.anims.play('JUMPB',true);
							else
							this.player1.anims.play('JUMP',true);
							this.player1.status = "JUMP";
						}
					}


				//Movimiento J2
				if(this.player2.body.touching.down){

						if (this.W.isDown )
						{
							this.player2.setVelocityY(-450);
						}
						else if(this.A.isDown){
							this.player2.setVelocityX(-550)
							this.player2.flipX=false;
							if(this.player2.ownBandera)
							this.player2.anims.play('RUN2B',true);
							else
							this.player2.anims.play('RUN2',true);
							this.player2.status="RUN";
						}else if(this.D.isDown){
							this.player2.setVelocityX(550)
							this.player2.flipX=true;
							if(this.player2.ownBandera)
							this.player2.anims.play('RUN2B',true);
							else
							this.player2.anims.play('RUN2',true);
							this.player2.status="RUN";
						}else{
							this.player2.setVelocityX(0);
							if(this.G.isDown){
								console.log("Apuntar abajo");
								if(this.player2.ownBandera)
								this.player2.anims.play('SCOPE_DOWN2B',true);
								else
								this.player2.anims.play('SCOPE_DOWN2',true);
								this.player2.status="SCOPE_DOWN";
							}else if(this.T.isDown){
								console.log("Apuntar arriba");
								if(this.player2.ownBandera)
								this.player2.anims.play('SCOPE_UP2B',true);
								else
								this.player2.anims.play('SCOPE_UP2',true);
								this.player2.status="SCOPE_UP";
							}else if(this.Y.isDown){
								console.log("Golpe arriba");
								if(this.player2.ownBandera)
								this.player2.anims.play('HIT_UP2B',true);
								else
								this.player2.anims.play('HIT_UP2',true);
								this.player2.status="HIT_UP";
							}else if(this.H.isDown){
								console.log("Golpe abajo");
								if(this.player2.ownBandera)
								this.player2.anims.play('HIT_DOWN2B',true);
								else
								this.player2.anims.play('HIT_DOWN2',true);
								this.player2.status="HIT_DOWN";
							}else{
								if(this.player2.ownBandera)
								this.player2.anims.play('IDLE2B',true);
								else
								this.player2.anims.play('IDLE2',true);
								this.player2.status="IDLE";
							}
						}
					}else{
						if(this.A.isDown){
							this.player2.setVelocityX(-550);
							this.player2.flipX=false;
							this.player2.anims.play('JUMP2',true);
							this.player2.status="JUMP";
						}else if(this.D.isDown){
							this.player2.setVelocityX(550);
							this.player2.flipX=true;
							if(this.player2.ownBandera)
								this.player2.anims.play('JUMP2B',true);
							else this.player2.anims.play('JUMP2',true);
							this.player2.status="JUMP";
						}else{

							if(this.player2.ownBandera)
								this.player2.anims.play('JUMP2B',true);
							else this.player2.anims.play('JUMP2',true);
							this.player2.status="JUMP";
						}
					}

					if(this.bandera.y > 720){
						this.bandera.y = 150;
						this.bandera.x += 100;
					}
					if(this.player1.y < 200){
						this.player1.y = 250;
					}
					if(this.player2.y < 200){
						this.player2.y = 250;
					}
					if(this.player2.x< -2040){
						this.player2.x = -2000;
					}
					if(this.player2.x> 2040){
						this.player2.x = 2000;
					}
					if(this.player1.x< -2040){
						this.player1.x = -2000;
					}
					if(this.player1.x> 2040){
						this.player1.x = 2000;
					}

					if(!this.player1.body.touching.down && this.player1.y > 800){
						this.respawny(this.player1);
					}
					if(!this.player2.body.touching.down && this.player2.y > 800){
						this.respawny(this.player2);
					}

					//Personaje coge la bandera
					this.physics.add.overlap([this.player1,this.player2], this.bandera, this.collectBandera, null, this);
					//Personajes se pegan
					this.physics.add.overlap(this.player1, this.player2, this.checkatacks, null, this);

					if(this.player1.x < (this.camera.scrollX-this.cW+600)){
						this.respawnx(this.player1, 2*this.cW);
					}
					if(this.player1.x > (this.camera.scrollX+this.cW+600)){
						this.respawnx(this.player1,2*-this.cW);
					}
					if(this.player2.x < (this.camera.scrollX-this.cW+600)){
						this.respawnx(this.player2,2*this.cW);
					}
					if(this.player2.x > (this.camera.scrollX+this.cW+600)){
						this.respawnx(this.player2,2*-this.cW);
					}

				//Camara sigue a la bandera
					if(this.hasTheFlag(this.player1)){
						this.camera.scrollX =this.player1.x -game.centerX;
						if(this.player1.x < -2000){
							this.changeFase(this.player1,-1);
						}
					}
					else if(this.hasTheFlag(this.player2)){
						this.camera.scrollX=this.player2.x-game.centerX;
						if(this.player2.x > 2000)
							this.changeFase(this.player2,1);
					}else{
						this.camera.scrollX = this.bandera.x-game.centerX;
				}
			}
		}
	}
}
