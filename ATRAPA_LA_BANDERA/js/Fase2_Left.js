class Fase2_Left extends Phaser.Scene{
	constructor(){
		super({key: "Fase2_Left"});
	}

	preload(){
  	//Sprite del fondo
		this.load.image("fondo2letf","../assets/map/Izquierda2/Fondo2.jpg");
		this.load.image("sobrefondo2left","../assets/map/Izquierda2/SobreFondo2.png");

  	//Sprite del muñeco para pruebas
  	this.load.image("maniqui","../assets/icons/Jugador-rojo.png");

  	//orma
  	this.load.image("pltf","../assets/icons/plt.png");

  	//Sprite de BANDERA
  	this.load.image("bandera","../assets/icons/bandera.png")

  	//sprites de movimientos
		this.load.spritesheet('SCOPE_DOWN','../assets/animations/APUNTAR_ABAJO.png',{frameHeight: 240, frameWidth:250})
		this.load.spritesheet('SCOPE_UP','../assets/animations/APUNTAR_ARRIBA.png',{frameHeight: 240, frameWidth:250})
		this.load.spritesheet('RUN','../assets/animations/correr.png',{frameHeight: 240, frameWidth:250})
		this.load.spritesheet('HIT_UP','../assets/animations/GOLPE_ARRIBA.png',{frameHeight: 240, frameWidth:250})
		//this.load.spritesheet('HIT_DOWN','../assets/animations/golpe_abajo.png',{frameHeight: 240, frameWidth:250})
  	this.load.spritesheet('IDLE','../assets/animations/PARADO.png',{frameHeight: 240, frameWidth:250})
  	this.load.spritesheet('IDLE_SCOPE_UP','../assets/animations/PARADO_APUNTADO_ARRIBA.png',{frameHeight: 240, frameWidth:250})
		this.load.spritesheet('IDLE_SCOPE_DOWN','../assets/animations/PARADO_APUNTADO_ABAJO.png',{frameHeight: 240, frameWidth:250})
		//this.load.spritesheet('JUMP','../assets/animations/saltar.png',{frameHeight: 240, frameWidth:250})
		console.log("fase2 preloaded");
	}

  create(){

		//Controles por teclado
		this.cursor = this.input.keyboard.createCursorKeys();
		this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
		this.O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
		this.L = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

		//Centro del canvas
    const cW= this.sys.game.config.width/2;
    const cH= 720/2;

		//Crear plataforma
		var platforms = this.physics.add.staticGroup();
		platforms.create(1500, 385, 'pltf').setScale(3.5,0.5).refreshBody();

    //Creación del fondo del juego
		var fondo = this.add.image(0,cH,"fondo2letf");
		//set the width of the sprite
		fondo.displayHeigth = cH*2;
		//scale evenly
		fondo.scaleX = fondo.scaleY;

    //Crear bandera
    this.bandera = this.physics.add.image();
    this.bandera = this.physics.add.sprite(2240, 350, 'bandera');
    this.bandera.setBounce(0.2);
    this.bandera.setCollideWorldBounds(false);
		this.bandera.setScale(0.75,0.75);

    //Creacion de los jugadores

    //Jugador 1
    this.player1 = this.physics.add.sprite(2240,350,'maniqui',2);
    this.player1.flipX=true;
    this.player1.setCollideWorldBounds(false);
		this.player1.setBounce(0.3);
    this.player1.setOrigin(0.5,1);
		this.player1.ownBandera=false;

    //Jugador 2
    this.player2 = this.physics.add.sprite(2000,350,'maniqui',2);
    this.player2.flipX=false;
    this.player2.setCollideWorldBounds(false);
    this.player2.setBounce(0.3);
    this.player2.setOrigin(0.5,1);
		this.player2.ownBandera=false;
		this.player2.setTint(0x0000ff);


		var sobrefondo = this.add.image(0,cH,"sobrefondo2left");
		sobrefondo.displayHeigth = cH*2;
		sobrefondo.scaleX = fondo.scaleY;


		this.cameras.main.startFollow(this.bandera,false,1,1,0,200);

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
			frames: this.anims.generateFrameNumbers('SCOPE_DOWN',{
				frames: [0,1,2,3,4,5,6,7,8,9,10,11]
			}),
			repeat:1,
			frameRate:24
		});
		//Anim apuntando arriba
		this.anims.create({
			key: 'SCOPE_UP',
			frames: this.anims.generateFrameNumbers('SCOPE_UP',{
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

		//Colision con plataforma
		this.physics.add.collider(this.player1, platforms);
		this.physics.add.collider(this.player2, platforms);
		this.physics.add.collider(this.bandera, platforms);


	}

  update(time, delta){

		if(this.p1posx != this.player1.x){
			console.log("Player1 X pos: " + this.player1.x);
			this.p1posx = this.player1.x;
		}
		if(this.p1posy != this.player1.y){
			console.log("Player1 Y pos: " + this.player1.y);
			this.p1posy = this.player1.y;
		}
		if(this.p2posx != this.player2.x){
			console.log("Player2 pos: " + this.player2.x);

			this.p2posx = this.player2.x;

		}
      //Para calcular la distancia entre los jugadores
      var dis = Math.abs(this.player2.x - this.player1.x);

      //Movimiento J1

			if (this.cursor.up.isDown && this.player1.body.touching.down)
			{
					this.player1.setVelocityY(-450);
					//this.player1.anims.play('JUMP',true);
			}
			else if(this.cursor.left.isDown){
					this.player1.setVelocityX(-350)
					this.player1.flipX=false;
					this.player1.anims.play('RUN',true);
			}else if(this.cursor.right.isDown){
					this.player1.setVelocityX(350)
					this.player1.flipX=true;
					this.player1.anims.play('RUN',true);
			}else
			{
					this.player1.setVelocityX(0);
					if(this.P.isDown){
						console.log("Apuntar abajo");
						this.player1.anims.play('SCOPE_DOWN',true);
					}else if(this.O.isDown){
						console.log("Apuntar abajo");
						this.player1.anims.play('SCOPE_UP',true);
					}else if(this.L.isDown){
						console.log("Golpe arriba");
						this.player1.anims.play('HIT_UP',true);
					}else
						this.player1.anims.play('IDLE',true);
      }
			if(!this.player1.body.touching.down && this.player1.y > 800){
				respawn(this.player1);
			}

      //Movimiento J2 (faltan movimientos de apuntar)

      if (this.W.isDown && this.player2.body.touching.down)
      {
          this.player2.setVelocityY(-450);
          //this.player2.anims.play('JUMP',true);
      }
      else if(this.A.isDown){
          this.player2.setVelocityX(-350)
          this.player2.flipX=false;
          this.player2.anims.play('RUN',true);
      }else if(this.D.isDown){
          this.player2.setVelocityX(350)
          //this.player1.x=this.player1.x-8;
          this.player2.flipX=true;
          this.player2.anims.play('RUN',true);
          //this.player1.body.velocity.x=-120
      }else
      {
          this.player2.setVelocityX(0);
          this.player2.anims.play('IDLE',true);
      }

      //Condicionantes del ataque (prueba)
      if(this.P.isDown && dis<50 || this.O.isDown && dis<50 ){
          this.player2.x=this.player2.x+100
      }

			if(!this.player2.body.touching.down && this.player2.y > 800){
				respawn(this.player2);
			}

			//Personaje coje la bandera
				this.physics.add.overlap([this.player1,this.player2], this.bandera, collectBandera, null, this);

			//Camara sigue a la bandera
			if(hasTheFlag(this.player1)){
					this.cameras.main.startFollow(this.player1,false,1,1,0,200);
					if(this.player1.x < -2040){
						this.scene.start('Fase1_Left');
					}
				}
			else if(hasTheFlag(this.player2)){
				this.cameras.main.startFollow(this.player2,false,1,1,0,200);
				if(this.player2.x > 2040){
					this.scene.start('Fase1_Rigth');
				}

			}
			else{
					this.cameras.main.startFollow(this.bandera,false,1,1,0,200);
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

function changeFaseRigth(){

}
function changeFaseLeft(){

}

function respawn(player){
	player.y = 150;
	player.setVelocityY(120);
}
