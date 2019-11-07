	class Juego extends Phaser.Scene{
		constructor(){
			super({key: "Juego"});
		}

		preload(){
			game.loaded=false;
			game.exit=false;
			game.paused=false;
			if(game.onfase==0){
				//Sprite del fondo
				this.load.image("fondo","../assets/map/Centro/Fondo0.jpg");
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
				this.load.image("fondo1right","../assets/map/Derecha1/Fondo1.jpg");
				this.load.image("sobrefondo1right","../assets/map/Derecha1/SobreFondo1.png");
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
			this.load.image("bandera","../assets/icons/bandera.png")

			//sprites de movimientos
			//this.load.spritesheet('J1SCOPE_DOWN','../assets/animations/JRAniamtions/APUNTAR_ABAJO_ROJO.png',{frameHeight: 240, frameWidth:250});
			//this.load.spritesheet('J1SCOPE_UP','../assets/animations/JRAniamtions/APUNTAR_ARRIBA_ROJO.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J1RUN','../assets/animations/JRAnimations/CORRER_ROJO.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J1HIT_UP','../assets/animations/JRAnimations/GOLPE_ARRIBA_ROJO.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J1HIT_DOWN','../assets/animations/JRAnimations/GOLPE_ABAJO_ROJO.png',{frameHeight: 240, frameWidth:250});
			//this.load.spritesheet('J1HIT_DOWN','../assets/animations/JRAniamtions/GOLPE_ABAJO_ROJO.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J1IDLE','../assets/animations/JRAnimations/PARADO_ROJO.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J1IDLE_SCOPE_UP','../assets/animations/JRAnimations/PARADO_APUNTADO_ARRIBA_ROJO.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J1IDLE_SCOPE_DOWN','../assets/animations/JRAnimations/PARADO_APUNTADO_ABAJO_ROJO.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J1JUMP','../assets/animations/JRAnimations/SALTO_ROJO.png',{frameHeight: 240, frameWidth:250});

			//this.load.spritesheet('J2SCOPE_DOWN','../assets/animations/JAAnimations/APUNTAR_ABAJO_AZUL.png',{frameHeight: 240, frameWidth:250});
			//this.load.spritesheet('J2SCOPE_UP','../assets/animations/JAAnimations/APUNTAR_ARRIBA_AZUL.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J2RUN','../assets/animations/JAAnimations/CORRER_AZUL.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J2HIT_UP','../assets/animations/JAAnimations/GOLPE_ARRIBA_AZUL.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J2HIT_DOWN','../assets/animations/JAAnimations/GOLPE_ABAJO_AZUL.png',{frameHeight: 240, frameWidth:250});
			//this.load.spritesheet('J2HIT_DOWN','../assets/animations/JAAnimations/GOLPE_ABAJO_AZUL.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J2IDLE','../assets/animations/JAAnimations/PARADO_AZUL.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J2IDLE_SCOPE_UP','../assets/animations/JAAnimations/PARADO_APUNTADO_ARRIBA_AZUL.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J2IDLE_SCOPE_DOWN','../assets/animations/JAAnimations/PARADO_APUNTADO_ABAJO_AZUL.png',{frameHeight: 240, frameWidth:250});
			this.load.spritesheet('J2JUMP','../assets/animations/JAAnimations/SALTO_AZUL.png',{frameHeight: 240, frameWidth:250});

			//Musica del juego
			this.load.audio('musica', '../assets/music/Spread the Wings (Rock Howard) - Garou Mark of the Wolves - OST.mp3');

		}

		create(){
			game.loaded=false;
			this.cameras.main.setBackgroundColor(0x000000);

			//MENU de PAUSA
			if(!this.sceneload){
				this.scene.add('MenuPausa', new MenuPausa);
				this.sceneload=true;
			}
			this.scene.sendToBack('MenuPausa');
			this.scene.stop('MenuPausa');

			//Musica
			this.sound.pauseOnBlur=false;
			this.mj = this.sound.add('musica',{loop: true});
			if(!game.playing){
				this.mj.play();
				game.sound.mute=false;
				game.playing=true;
			}
			this.M = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);


			//Controles por teclado
			//Controles menu PAUSA
			this.ESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
			//Controles J1(Rojo)
			this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
			this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
			this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
			//Defensa y ataque J1
			this.T = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
			this.Y = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
			this.G = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
			this.H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

			//Controles J2(Azul)
			this.cursor = this.input.keyboard.createCursorKeys();
			//Defensa y ataque J2
			this.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
			this.P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
			this.L = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
			this.K = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

			//Centro del canvas
			this.cW= this.sys.game.config.width/2;
			this.cH= 720/2;

			//Creacion de animaciones

			//Anim correr(funciona)
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

			//Anim parado (funciona)
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


			//Anim apuntando arriba
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

			//Anim apuntando arriba
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

			//Anim golpe arriba (funciona)
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

			//Anim golpe abajo (funciona)
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

			//Anim salto (no funciona)
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

			if(game.onfase == 0){

				//Crear plataforma
				game.platforms = this.physics.add.staticGroup();
				game.platforms.create(0, 575, 'pltf').setScale(0.5,0.5).refreshBody();
				game.platforms.create(-1320, 575, 'pltf').setScale(4.525,0.5).refreshBody();
				game.platforms.create(1320, 575, 'pltf').setScale(4.525,0.5).refreshBody();

				//Creación del fondo del juego
				game.fondo = this.add.image(0,this.cH,"fondo");
				//set the width of the sprite
				game.fondo.displayHeigth = this.cH*2;
				//scale evenly
				game.fondo.scaleX = game.fondo.scaleY;

				//Crear bandera

				game.bandera = this.physics.add.image(0,450,'bandera');
				//game.bandera = this.physics.add.sprite(0, 450, 'bandera');
				game.bandera.setBounce(0.2);
				game.bandera.setCollideWorldBounds(false);
				game.bandera.setScale(0.75,0.75);

				//Creacion de los jugadores

				//Jugador 1
				game.player1 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player1.flipX=false;
				game.player1.setCollideWorldBounds(false);
				game.player1.setBounce(-0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(-420,450,'maniqui',2);
				game.player2.flipX=true;
				game.player2.setCollideWorldBounds(false);
				game.player2.setBounce(-0.3);
				game.player2.setOrigin(0.5,1);
				game.player2.ownBandera=false;
				game.player2.setTint(0x4400ff);

				game.sobrefondo = this.add.image(0,this.cH,"sobrefondo");
				game.sobrefondo.displayHeigth = this.cH*2;
				game.sobrefondo.scaleX = game.sobrefondo.scaleY;

				if(game.fasebefore==-1){
					game.bandera.x = -2240;
					game.player2.x = -2240;
					game.player1.x = -2000;
				}
				if(game.fasebefore == 1){
					game.bandera.x = 2240;
					game.player1.x = 2240;
					game.player2.x = 2000;

				}
			}

			if(game.onfase == -1){

				//Crear plataforma

				game.platforms = this.physics.add.staticGroup();
				game.platforms.create(1500, 575, 'pltf').setScale(3.5,0.5).refreshBody();
				game.platforms.create(475, 440, 'pltf').setScale(0.25,0.5).refreshBody();
				game.platforms.create(105, 335, 'pltf').setScale(0.25,0.5).refreshBody();
				game.platforms.create(-275, 270, 'pltf').setScale(0.45,0.5).refreshBody();
				game.platforms.create(-850, 325, 'pltf').setScale(1.05,0.5).refreshBody();
				game.platforms.create(-1325, 260, 'pltf').setScale(0.001,0.5).refreshBody();
				game.platforms.create(-1900, 375, 'pltf').setScale(1.35,0.5).refreshBody();

				//Creación del fondo del juego

				game.fondo = this.add.image(0,this.cH,"fondo1left");
				//set the width of the sprite
				game.fondo.displayHeigth = this.cH*2;
				//scale evenly
				game.fondo.scaleX = game.fondo.scaleY;

				//Crear bandera

				game.bandera = this.physics.add.image();
				game.bandera = this.physics.add.sprite(0, 450, 'bandera');
				game.bandera.setBounce(0.2);
				game.bandera.setCollideWorldBounds(false);
				game.bandera.setScale(0.75,0.75);

				//Creacion de los jugadores

				//Jugador 1
				game.player1 = this.physics.add.sprite(-420,450,'maniqui',2);
				game.player1.flipX=false;
				game.player1.setCollideWorldBounds(false);
				//game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=true;
				game.player2.setCollideWorldBounds(false);
				//game.player2.setBounce(0.3);
				game.player2.setOrigin(0.5,1);
				game.player2.ownBandera=false;
				game.player2.setTint(0x4400ff);

				game.sobrefondo = this.add.image(0,this.cH,"sobrefondo1left");
				game.sobrefondo.displayHeigth = this.cH*2;
				game.sobrefondo.scaleX = game.sobrefondo.scaleY;

				if(game.fasebefore ==  0 ){
					game.bandera.x = 2240;
					game.player1.x = 2240;
					game.player2.x = 1800;
				}
				if(game.fasebefore == -2 ){
					game.bandera.x = -2240;
					game.player1.x = -1800;
					game.player2.x=-2240;
				}
			}

			if(game.onfase == -2){

				//Crear plataforma

				game.platforms = this.physics.add.staticGroup();
				game.platforms.create(1120, 385, 'pltf').setScale(5.27,0.5).refreshBody();
				game.platforms.create(-300, 450, 'pltf').setScale(0.05,0.5).refreshBody();
				game.platforms.create(-1470, 600, 'pltf').setScale(4,0.5).refreshBody();

				//Creación del fondo del juego

				game.fondo = this.add.image(0,this.cH,"fondo2left");
				//set the width of the sprite
				game.fondo.displayHeigth = this.cH*2;
				//scale evenly
				game.fondo.scaleX = game.fondo.scaleY;

				//Crear bandera

				game.bandera = this.physics.add.image();
				game.bandera = this.physics.add.sprite(0, 450, 'bandera');
				game.bandera.setBounce(0.2);
				game.bandera.setCollideWorldBounds(false);
				game.bandera.setScale(0.75,0.75);

				//Creacion de los jugadores

				//Jugador 1
				game.player1 = this.physics.add.sprite(-420,450,'maniqui',2);
				game.player1.flipX=true;
				game.player1.setCollideWorldBounds(false);
				//game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=false;
				game.player2.setCollideWorldBounds(false);
				//game.player2.setBounce(0.3);
				game.player2.setOrigin(0.5,1);
				game.player2.ownBandera=false;
				game.player2.setTint(0x4400ff);

				game.sobrefondo = this.add.image(0,this.cH,"sobrefondo2left");
				game.sobrefondo.displayHeigth = this.cH*2;
				game.sobrefondo.scaleX = game.sobrefondo.scaleY;

				game.bandera.x = 2240;
				game.bandera.y = 350;

				game.player1.x = 2240;
				game.player1.y = 350;

				game.player2.x = 2000;
				game.player2.y = 350;

			}

			if(game.onfase == 1){

				//Crear plataforma

				game.platforms = this.physics.add.staticGroup();
				game.platforms.create(1900, 375, 'pltf').setScale(1.35,0.5).refreshBody();
				game.platforms.create(1325, 260, 'pltf').setScale(0.001,0.5).refreshBody();
				game.platforms.create(850, 325, 'pltf').setScale(1.05,0.5).refreshBody();
				game.platforms.create(275, 270, 'pltf').setScale(0.45,0.5).refreshBody();
				game.platforms.create(-105, 335, 'pltf').setScale(0.25,0.5).refreshBody();
				game.platforms.create(-475, 440, 'pltf').setScale(0.25,0.5).refreshBody();
				game.platforms.create(-1500, 575, 'pltf').setScale(3.5,0.5).refreshBody();

				//Creación del fondo del juego

				game.fondo = this.add.image(0,this.cH,"fondo1right");
				//set the width of the sprite
				game.fondo.displayHeigth = this.cH*2;
				//scale evenly
				game.fondo.scaleX = game.fondo.scaleY;

				//Crear bandera

				game.bandera = this.physics.add.image();
				game.bandera = this.physics.add.sprite(0, 450, 'bandera');
				game.bandera.setBounce(0.2);
				game.bandera.setCollideWorldBounds(false);
				game.bandera.setScale(0.75,0.75);

				//Creacion de los jugadores

				//Jugador 1
				game.player1 = this.physics.add.sprite(-420,450,'maniqui',2);
				game.player1.flipX=false;
				game.player1.setCollideWorldBounds(false);
				//game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=true;
				game.player2.setCollideWorldBounds(false);
				//game.player2.setBounce(0.3);
				game.player2.setOrigin(0.5,1);
				game.player2.ownBandera=false;
				game.player2.setTint(0x4400ff);

				game.sobrefondo = this.add.image(0,this.cH,"sobrefondo1right");
				game.sobrefondo.displayHeigth = this.cH*2;
				game.sobrefondo.scaleX = game.sobrefondo.scaleY;

				if(game.fasebefore ==  0 ){
					game.bandera.x = -2240;
					game.player2.x = -2240;
					game.player1.x = -2000;

				}
				if(game.fasebefore == 2 ){
					game.bandera.x = 2240;
					game.player1.x = 2240;
					game.player2.x = 2000;
				}

			}

			if(game.onfase == 2){

				//Crear plataforma

				game.platforms = this.physics.add.staticGroup();
				game.platforms.create(1470, 600, 'pltf').setScale(4,0.5).refreshBody();
				game.platforms.create(300, 450, 'pltf').setScale(0.05,0.5).refreshBody();
				game.platforms.create(-1120, 385, 'pltf').setScale(5.27,0.5).refreshBody();

				//Creación del fondo del juego

				game.fondo = this.add.image(0,this.cH,"fondo2right");
				//set the width of the sprite
				game.fondo.displayHeigth = this.cH*2;
				//scale evenly
				game.fondo.scaleX = game.fondo.scaleY;

				//Crear bandera

				game.bandera = this.physics.add.image();
				game.bandera = this.physics.add.sprite(0, 450, 'bandera');
				game.bandera.setBounce(0.2);
				game.bandera.setCollideWorldBounds(false);
				game.bandera.setScale(0.75,0.75);

				//Creacion de los jugadores

				//Jugador 1
				game.player1 = this.physics.add.sprite(-420,450,'maniqui',2);
				game.player1.flipX=false;
				game.player1.setCollideWorldBounds(false);
				//game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=true;
				game.player2.setCollideWorldBounds(false);
				//game.player2.setBounce(0.3);
				game.player2.setOrigin(0.5,1);
				game.player2.ownBandera=false;
				game.player2.setTint(0x4400ff);

				game.sobrefondo = this.add.image(0,this.cH,"sobrefondo2right");
				game.sobrefondo.displayHeigth = this.cH*2;
				game.sobrefondo.scaleX = game.sobrefondo.scaleY;

				game.bandera.x = -2240;
				game.bandera.y = 350;

				game.player2.x = -2240;
				game.player2.y = 350;

				game.player1.x = -2000;
				game.player1.y = 350;

			}

			game.HUDbandera = this.physics.add.image();
			game.HUDbandera = this.physics.add.sprite(0, 0, 'bandera');
			game.HUDbandera.setCollideWorldBounds(false);
			game.HUDbandera.setScale(0.5,0.5);


			this.cameras.main.startFollow(game.bandera,true,0,0,0,200);

			//Colision con plataforma

			this.physics.add.collider(game.player1, game.platforms);
			this.physics.add.collider(game.player2, game.platforms);
			this.physics.add.collider(game.bandera, game.platforms);

			console.log("Fase " + game.onfase + " CREATE");

			game.loaded=true;
		}

		update(time, delta){

			if(!game.loaded){

			}
			if(game.exit){
				this.scene.sendToBack('Juego');
				this.scene.stop('Juego');
				this.scene.resume('MenuPrincipal');
				this.mj.stop();
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
					this.scene.run('MenuPausa');
					this.scene.bringToTop('MenuPausa');
					this.scene.pause('MenuPrincipal');
					game.paused=true;
				}

				//Para calcular la distancia entre los jugadores
				game.dis = Math.abs(game.player2.x - game.player1.x);

				//Movimiento J1
				if(game.player1.body.touching.down){
					if (this.cursor.up.isDown)
					{
						game.player1.setVelocityY(-450);
					}
					else if(this.cursor.left.isDown){
						game.player1.setVelocityX(-550);
						game.player1.flipX=false;
						game.player1.anims.play('RUN',true);
						game.player1.status = "RUN";
					}else if(this.cursor.right.isDown){
						game.player1.setVelocityX(550);
						game.player1.flipX=true;
						game.player1.anims.play('RUN',true);
						game.player1.status = "RUN";
					}else
					{
						game.player1.setVelocityX(0);
						if(this.L.isDown){
							console.log("Apuntar abajo");
							game.player1.anims.play('SCOPE_DOWN',true);
							game.player1.status = "SCOPE_DOWN";
						}else if(this.P.isDown){
							console.log("Apuntar arriba");
							game.player1.anims.play('SCOPE_UP',true);
							game.player1.status = "SCOPE_UP";
						}else if(this.O.isDown){
							console.log("Golpe arriba");
							game.player1.anims.play('HIT_UP',true);
							game.player1.status = "HIT_UP";
						}else if(this.K.isDown){
							console.log("Golpe abajo");
							game.player1.anims.play('HIT_DOWN',true);
							game.player1.status = "HIT_DOWN";
						}else
						game.player1.anims.play('IDLE',true);
							game.player1.status = "IDLE";
					}
				}else{
					if(this.cursor.left.isDown){
						game.player1.setVelocityX(-550);
						game.player1.flipX=false;
						game.player1.anims.play('JUMP',true);
							game.player1.status = "JUMP";
					}else if(this.cursor.right.isDown){
						game.player1.setVelocityX(550);
						game.player1.flipX=true;
						game.player1.anims.play('JUMP',true);
							game.player1.status = "JUMP";
					}else{
						game.player1.anims.play('JUMP',true);
							game.player1.status = "JUMP";
					}
				}

				//Movimiento J2
				if(game.player2.body.touching.down){
					if (this.W.isDown )
					{
						game.player2.setVelocityY(-450);
					}
					else if(this.A.isDown){
						game.player2.setVelocityX(-550)
						game.player2.flipX=false;
						game.player2.anims.play('RUN2',true);
						game.player2.status="RUN";
					}else if(this.D.isDown){
						game.player2.setVelocityX(550)
						game.player2.flipX=true;
						game.player2.anims.play('RUN2',true);
						game.player2.status="RUN";
					}else
					{
						game.player2.setVelocityX(0);
						if(this.G.isDown){
							console.log("Apuntar abajo");
							game.player2.anims.play('SCOPE_DOWN2',true);
							game.player2.status="SCOPE_DOWN";
						}else if(this.T.isDown){
							console.log("Apuntar arriba");
							game.player2.anims.play('SCOPE_UP2',true);
							game.player2.status="SCOPE_UP";
						}else if(this.Y.isDown){
							console.log("Golpe arriba");
							game.player2.anims.play('HIT_UP2',true);
							game.player2.status="HIT_UP";
						}else if(this.H.isDown){
							console.log("Golpe abajo");
							game.player2.anims.play('HIT_DOWN2',true);
							game.player2.status="HIT_DOWN";
						}else
						game.player2.anims.play('IDLE2',true);
						game.player2.status="IDLE";
					}
				}else{

					if(this.A.isDown){
						game.player2.setVelocityX(-550);
						game.player2.flipX=false;
						game.player2.anims.play('JUMP2',true);
						game.player2.status="JUMP";
					}else if(this.D.isDown){
						game.player2.setVelocityX(550);
						game.player2.flipX=true;
						game.player2.anims.play('JUMP2',true);
						game.player2.status="JUMP";
					}else{
						game.player2.anims.play('JUMP2',true);
						game.player2.status="JUMP";
					}

				}

				if(game.bandera.y > 720){
					game.bandera.y = 150;
					game.bandera.x += 100;
				}
				if(game.player1.y < 200){
					game.player1.y = 250;
				}
				if(game.player2.y < 200){
					game.player2.y = 250;
				}

				if(game.player2.x< -2040){
					game.player2.x = -2000;
				}
				if(game.player2.x> 2040){
					game.player2.x = 2000;
				}
				if(game.player1.x> 2040){
					game.player1.x = 2000;
				}
				if(game.player1.x< -2040){
					game.player1.x = -2000;
				}

				if(!game.player1.body.touching.down && game.player1.y > 800){
					respawn(game.player1);
				}
				if(!game.player2.body.touching.down && game.player2.y > 800){
					respawn(game.player2);
				}

				//Personaje coje la bandera
				this.physics.add.overlap([game.player1,game.player2], game.bandera, collectBandera, null, this);

				this.physics.add.overlap(game.player1, game.player2, checkatacks, null, this);

				//Camara sigue a la bandera
				if(hasTheFlag(game.player1)){

					this.cameras.main.startFollow(game.player1,true,1,1,0,200);
					game.HUDbandera.enableBody(true,game.player1.x+350,100,true,true);
					if(game.player1.x < -2000){
						if(game.onfase==-2){
							this.scene.add('FinNivelW1',FinNivelW1);
							this.scene.sendToBack('Juego');
							this.scene.stop('Juego');
							this.scene.start('FinNivelW2');
						}
						game.loaded=false;
						cHangeFaseLeft();
						this.scene.restart();
					}
				}
				else if(hasTheFlag(game.player2)){

					this.cameras.main.startFollow(game.player2,true,1,1,0,200);
					game.HUDbandera.enableBody(true,game.player2.x-350,100,true,true);
					if(game.player2.x > 2000){
						game.loaded=false;
						if(game.onfase==2){
							this.scene.add('FinNivelW2',FinNivelW2);
							this.scene.sendToBack('Juego');
							this.scene.stop('Juego');
							this.scene.start('FinNivelW2');
						}
						cHangeFaseRight();
						this.scene.restart();
					}

				}

				else{

					this.cameras.main.startFollow(game.bandera,true,1,1,0,200);
					game.HUDbandera.disableBody(true,true);
				}
			}
			if(game.player1.x < (this.cameras.main.scrollX-this.cW+600)){
				reenter(game.player1,this.cameras.main.scrollX+this.cW*2);
			}
			if(game.player1.x > (this.cameras.main.scrollX+this.cW+600)){
				reenter(game.player1,this.cameras.main.scrollX+50);
			}
			if(game.player2.x < (this.cameras.main.scrollX-this.cW+600)){
				reenter(game.player2,this.cameras.main.scrollX+this.cW*2);
			}
			if(game.player2.x > (this.cameras.main.scrollX+this.cW+600)){
				reenter(game.player2,this.cameras.main.scrollX+50);
			}
		}

	}

	function collectBandera (player)
	{
		game.bandera.disableBody(true,true);
		player.ownBandera = true;
	}

	function respawn(player){
		player.y = 250;
		player.x += 100;
		player.setVelocityY(0);
		if(player.ownBandera){
			player.ownBandera = false;
			game.bandera.enableBody(player.x+-500,250,true,true);
			game.bandera.visible=true;
		}
	}

	function reenter(player,x){
		player.x = x;
	}

	function hasTheFlag(player){
		return player.ownBandera;
	}

	function cHangeFaseRight(){
		game.player1.destroy(true);
		game.player2.destroy(true);
		game.bandera.destroy(true);
		game.fasebefore=game.onfase;
		game.onfase++;
	}

	function cHangeFaseLeft(){
		game.player1.destroy(true);
		game.player2.destroy(true);
		game.bandera.destroy(true);
		game.fasebefore=game.onfase;
		game.onfase--;
	}

function checkpulsed(key){
	if(key.isDown)key.pulsed=true;
	if(key.isUp)key.pulsed=false;
}

function checkatacks(){
	if(this.L.isDown && !(this.T.isDown|| this.H.isDown) && game.dis <30){
		respawn(game.player2,game.player1.x);
	}
	else if(this.H.isDown && !(this.O.isDown|| this.L.isDown)&& game.dis <30){
		respawn(game.player1,game.player2.x);
	}
	else if(this.K.isDown&& !(this.Y.isDown || this.G.isDown)&& game.dis <30){
		respawn(game.player2,game.player1.x);
	}
	else if(this.G.isDown && !(this.P.isDown || this.K.isDown)&& game.dis <30){
		respawn(game.player1,game.player2.x);
	}
}
