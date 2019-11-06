	class Juego extends Phaser.Scene{
		constructor(){
			super({key: "Juego"});
		}


		preload(){
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
			//this.load.spritesheet('SCOPE_DOWN','../assets/animations/APUNTAR_ABAJO.png',{frameHeight: 240, frameWidth:250})
			//this.load.spritesheet('SCOPE_UP','../assets/animations/APUNTAR_ARRIBA.png',{frameHeight: 240, frameWidth:250})
			this.load.spritesheet('RUN','../assets/animations/correr.png',{frameHeight: 240, frameWidth:250})
			this.load.spritesheet('HIT_UP','../assets/animations/GOLPE_ARRIBA.png',{frameHeight: 240, frameWidth:250})
			//this.load.spritesheet('HIT_DOWN','../assets/animations/golpe_abajo.png',{frameHeight: 240, frameWidth:250})
			this.load.spritesheet('IDLE','../assets/animations/PARADO.png',{frameHeight: 240, frameWidth:250})
			this.load.spritesheet('IDLE_SCOPE_UP','../assets/animations/PARADO_APUNTADO_ARRIBA.png',{frameHeight: 240, frameWidth:250})
			this.load.spritesheet('IDLE_SCOPE_DOWN','../assets/animations/PARADO_APUNTADO_ABAJO.png',{frameHeight: 240, frameWidth:250})
			//this.load.spritesheet('JUMP','../assets/animations/saltar.png',{frameHeight: 240, frameWidth:250})
		}

		create(){
			//Controles por teclado
			game.cursor = this.input.keyboard.createCursorKeys();
			game.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
			game.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
			game.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
			game.P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
			game.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
			game.L = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

			//Centro del canvas
			this.cW= this.sys.game.config.width/2;
			this.cH= 720/2;

			//Creacion de animaciones

			//Anim correr(funciona)
			this.anims.create({
				key: 'RUN',
				frames: this.anims.generateFrameNumbers('RUN',{
					frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
				}),
				repeat:-1,
				frameRate:24
			})
			//Anim parado (funciona)
			this.anims.create({
				key: 'IDLE',
				frames: this.anims.generateFrameNumbers('IDLE',{
					frames: [0,1,2,3,4,5,6,7,8,9]
				}),
				repeat:1,
				frameRate:24
			});
			//Anim apuntando arriba
			this.anims.create({
				key: 'SCOPE_DOWN',
				frames: this.anims.generateFrameNumbers('IDLE_SCOPE_DOWN',{
					frames: [0,1,2,3,4,5,6,7,8,9,10,11]
				}),
				repeat:1,
				frameRate:24
			});
			//Anim apuntando arriba
			this.anims.create({
				key: 'SCOPE_UP',
				frames: this.anims.generateFrameNumbers('IDLE_SCOPE_UP',{
					frames: [0,1,2,3,4,5,6,7,8,9,10,11]
				}),
				repeat:1,
				frameRate:24
			});
			//Anim golpe arriba (funciona)
			this.anims.create({
				key: 'HIT_UP',
				frames: this.anims.generateFrameNumbers('HIT_UP',{
					frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
				}),
				repeat:0,
				frameRate:24
			});
			//Anim salto (no funciona)
			// 	this.anims.create({
			// 		key: 'JUMP',
			// 		frames: this.anims.generateFrameNumbers('salto',{
			// 			frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
			// 		}),
			// 		repeat:1,
			// 		frameRate:6
			// });

			if(game.onfase==0){

				//Crear plataforma
				game.platforms = this.physics.add.staticGroup();
				game.platforms.create(0, 575, 'pltf').setScale(0.525,0.5).refreshBody();
				game.platforms.create(-1320, 575, 'pltf').setScale(4.525,0.5).refreshBody();
				game.platforms.create(1320, 575, 'pltf').setScale(4.525,0.5).refreshBody();

				//Creación del fondo del juego
				game.fondo = this.add.image(0,this.cH,"fondo");
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
				game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=false;
				game.player2.setCollideWorldBounds(false);
				game.player2.setBounce(0.3);
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

<<<<<<< HEAD
			if(game.onfase==-1){

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
				game.player1.flipX=true;
				game.player1.setCollideWorldBounds(false);
				game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=false;
				game.player2.setCollideWorldBounds(false);
				game.player2.setBounce(0.3);
				game.player2.setOrigin(0.5,1);
				game.player2.ownBandera=false;
				game.player2.setTint(0x4400ff);

				game.sobrefondo = this.add.image(0,this.cH,"sobrefondo1left");
				game.sobrefondo.displayHeigth = this.cH*2;
				game.sobrefondo.scaleX = game.sobrefondo.scaleY;

				if(game.fasebefore ==  0 ){

					//Crear bandera
					game.bandera.x = 2240;

					//Creacion de los jugadores

					//Jugador 1
					game.player1.x = 2240;

					//Jugador 2
					game.player2.x = 2000;

				}
				if(game.fasebefore == -2 ){


					//Crear bandera
					game.bandera.x = -2240;

					//Creacion de los jugadores

					//Jugador 1
					game.player1.x = -2000;

					//Jugador 2
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
				game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=false;
				game.player2.setCollideWorldBounds(false);
				game.player2.setBounce(0.3);
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

			if(game.onfase==1){
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
				game.player1.flipX=true;
				game.player1.setCollideWorldBounds(false);
				game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=false;
				game.player2.setCollideWorldBounds(false);
				game.player2.setBounce(0.3);
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
				game.player1.flipX=true;
				game.player1.setCollideWorldBounds(false);
				game.player1.setBounce(0.3);
				game.player1.setOrigin(0.5,1);
				game.player1.ownBandera=false;
=======
		if(this.p1posx != this.player1.x){
			//console.log("Player1 pos: " + this.player1.x);
			this.p1posx = this.player1.x;
		}
		if(this.p2posx != this.player2.x){
			//console.log("Player2 pos: " + this.player2.x);
>>>>>>> 5871cf3da14c9a8d04fe22f28d939db7bbb198d5

				//Jugador 2
				game.player2 = this.physics.add.sprite(420,450,'maniqui',2);
				game.player2.flipX=false;
				game.player2.setCollideWorldBounds(false);
				game.player2.setBounce(0.3);
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

			this.cameras.main.startFollow(game.bandera,false,1,1,0,200);

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
			else{
				if(this.p1posx != game.player1.x){
					//console.log("Player1 pos: " + game.player1.x);
					this.p1posx = game.player1.x;
				}
				if(this.p2posx != game.player2.x){
					//console.log("Player1 pos: " + game.player1.x);
					this.p2posx = game.player2.x;
				}


				//Para calcular la distancia entre los jugadores
				var dis = Math.abs(game.player2.x - game.player1.x);

				//Movimiento J1

				if (game.cursor.up.isDown && game.player1.body.touching.down)
				{
					game.player1.setVelocityY(-350);
					//game.player1.anims.play('JUMP',true);
				}
				else if(game.cursor.left.isDown){
					game.player1.setVelocityX(-550)
					game.player1.flipX=false;
					game.player1.anims.play('RUN',true);
				}else if(game.cursor.right.isDown){
					game.player1.setVelocityX(550)
					game.player1.flipX=true;
					game.player1.anims.play('RUN',true);
				}else
				{
					game.player1.setVelocityX(0);
					if(game.P.isDown){
						console.log("Apuntar abajo");
						game.player1.anims.play('SCOPE_DOWN',true);
					}else if(game.O.isDown){
						console.log("Apuntar abajo");
						game.player1.anims.play('SCOPE_UP',true);
					}else if(game.L.isDown){
						console.log("Golpe arriba");
						game.player1.anims.play('HIT_UP',true);
					}else
					game.player1.anims.play('IDLE',true);
				}
				if(!game.player1.body.touching.down && game.player1.y > 800){
					respawn(game.player1);
				}

				//Movimiento J2 (faltan movimientos de apuntar)

				if (game.W.isDown && game.player2.body.touching.down)
				{
					game.player2.setVelocityY(-350);
					//game.player2.anims.play('JUMP',true);
				}
				else if(game.A.isDown){
					game.player2.setVelocityX(-550);
					game.player2.flipX=false;
					game.player2.anims.play('RUN',true);
				}else if(game.D.isDown){
					game.player2.setVelocityX(550);
					game.player2.flipX=true;
					game.player2.anims.play('RUN',true);
				}else
				{
					game.player2.setVelocityX(0);
					game.player2.anims.play('IDLE',true);
				}

				//Condicionantes del ataque (prueba)
				if(game.P.isDown && dis<50 || game.O.isDown && dis<50 ){
					game.player2.x=game.player2.x+100;
				}
				if(!game.player2.body.touching.down && game.player2.y > 800){
					respawn(game.player2);
				}

				//Personaje coje la bandera
				this.physics.add.overlap([game.player1,game.player2], game.bandera, collectBandera, null, this);

				//Camara sigue a la bandera
				if(hasTheFlag(game.player1)){
					this.cameras.main.startFollow(game.player1,false,1,1,0,200);
					if(game.player1.x < -2040){
						game.loaded=false;
						cHangeFaseLeft();
						this.scene.restart();
					}
				}
				else if(hasTheFlag(game.player2)){
					this.cameras.main.startFollow(game.player2,false,1,1,0,200);
					if(game.player2.x > 2040){
						game.loaded=false;
						cHangeFaseRight();
						this.scene.restart();
					}

				}
				else{
					this.cameras.main.startFollow(game.bandera,false,1,1,0,200);
				}
			}
		}
	}

	function collectBandera (player, bandera)
	{
		bandera.disableBody(true, true);
		player.ownBandera = true;
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

	function respawn(player){
		player.y = 150;
		player.setVelocityY(120);
	}


	function crearplataformas(){

	}
