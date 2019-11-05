class Juego extends Phaser.Scene{
	constructor(){
		super({key: "Juego"});
    var player1;
    var player2;
    var bandera;
	}

  preload(){

      //Sprite del fondo
      this.load.image("fondo","assets/img/Fondo.jpg");

      //Sprite del muñeco para pruebas
      this.load.image("quieto","../assets/icons/Jugador-rojo.png");

      //Plataforma
      this.load.image("pltf","assets/icons/plt.png");

      //Sprite de BANDERA
      this.load.image("bandera","assets/icons/bandera_temporal.png")

      //sprites de movimientos
      this.load.spritesheet('cizq','assets/animations/animacion_correr.png',{frameHeight: 250, frameWidth:250});
      this.load.spritesheet('ap_ab','assets/animations/ap_ab.png',{frameHeight: 192, frameWidth:140});
      this.load.spritesheet('ap_arr','assets/animations/ap_arr.png',{frameHeight: 192, frameWidth:155});
      this.load.spritesheet('quieto','assets/icons/Jugador-rojo.png',{frameHeight: 250, frameWidth:250});
      this.load.spritesheet('salto','assets/animations/salto.png',{frameHeight: 192, frameWidth:140});

//investiga a ver y si no, las quitamos y a ver si con eso funciona
}

  create(){

    // load the map
    map = this.make.tilemap({key: 'map'});

    // tiles for the ground layer
    var groundTiles = map.addTilesetImage('tiles');
    // create the ground layer
    groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0);

    // set the boundaries of our game world
    this.physics.world.bounds.width = groundLayer.width;
    this.physics.world.bounds.height = groundLayer.height;

      this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      // make the camera follow the player
      this.cameras.main.startFollow(player1);

      // set background color, so the sky is not black
      this.cameras.main.setBackgroundColor('#ccccff');

      //Centro del canvas
      const cW= this.sys.game.config.width/2;
      const cH= this.sys.game.config.height/2;

      //Creación del fondo del juego
      fondo = this.add.image(cW,cH,"fondo");
      fondo.setScale(0.5);
      fondo.setOrigin(0.5,0.5)

      //Crear plataforma
      var platforms = this.physics.add.staticGroup();
      platforms.create(450, 400, 'pltf').setScale(2,1).refreshBody();

      //Crear bandera
      bandera = this.physics.add.image();
      bandera = this.physics.add.sprite(350, 150, 'bandera');
      bandera.setBounce(0.2);
      bandera.setCollideWorldBounds(true);

      //Creacion de los jugadores

      //Jugador 1
      player1 = this.physics.add.sprite(250,150,'cizq',2);
      player1.flipX=true;
      player1.setCollideWorldBounds(true);
      player1.setBounce(0.3);
      player1.setOrigin(0.5,1)

      //Jugador 2
      player2 = this.physics.add.sprite(450,150,'cizq',2);
      player2.flipX=false;
      player2.setCollideWorldBounds(true);
      player2.setBounce(0.3);
      player2.setOrigin(0.5,1)

      //Creacion de animaciones

      //Anim correr
      this.anims.create({
          key: 'correr_izq',
          frames: this.anims.generateFrameNumbers('cizq',{
              frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
          }),
          repeat:-1,
          frameRate:24
      })
      //Anim parado
      this.anims.create({
          key: 'quieto',
          frames: this.anims.generateFrameNumbers('quieto',{
              frames: [0]
          }),
          repeat:1,
          frameRate:24
      });
      //Anim apuntando arriba
      this.anims.create({
          key: 'ap_ab',
          frames: this.anims.generateFrameNumbers('ap_ab',{
              frames: [0,1,2,3,4,5,6,7,8,9,10,11]
          }),
          repeat:1,
          frameRate:24
      });
      //Anim apuntando arriba
      this.anims.create({
          key: 'ap_arr',
          frames: this.anims.generateFrameNumbers('ap_arr',{
              frames: [0,1,2,3,4,5,6,7,8,9,10,11]
          }),
          repeat:1,
          frameRate:24
      });
      //Anim salto (no funciona)
      this.anims.create({
          key: 'salto',
          frames: this.anims.generateFrameNumbers('salto',{
              frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
          }),
          repeat:1,
          frameRate:6
      });


      console.log('Se cargó game.js')

      //Colision con plataforma
      this.physics.add.collider(player1, platforms);
      this.physics.add.collider(player2, platforms);
      this.physics.add.collider(bandera, platforms);

      this.physics.add.overlap(player1, bandera, collectBandera, null, this);
      this.physics.add.overlap(player2, bandera, collectBandera, null, this);

      //Controles por teclado
      cursor=this.input.keyboard.createCursorKeys()
      A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      P = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
      O = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

      game.camera.follow(player1);

  },
  update: function (time, delta){

      //Para calcular la distancia entre los jugadores
      var dis = Math.abs(player2.x - player1.x);
      console.log(dis);

      //Movimiento J1
      if(cursor.right.isDown){
          player1.setVelocityX(350)
          player1.flipX=true;
          player1.anims.play('correr_izq',true);
      }else if(cursor.left.isDown){
          player1.setVelocityX(-350)
          //player1.x=player1.x-8;
          player1.flipX=false;
          player1.anims.play('correr_izq',true);
          //player1.body.velocity.x=-120
      }else if (cursor.up.isDown && player1.body.touching.down)
      {
          player1.setVelocityY(-330);
          player1.anims.play('salto',true);
      }
      else
      {
          player1.setVelocityX(0);
          if(P.isDown){
              player1.anims.play('ap_ab',true);
          }else if(O.isDown){
              player1.anims.play('ap_arr',true);
          }else
          player1.anims.play('quieto',true);
      }


      //Movimiento J2 (faltan movimientos de apuntar)

      if (W.isDownif && player2.body.touching.down)
      {
          player2.setVelocityY(-330);
          player2.anims.play('salto',true);
      }
      else if(A.isDown){
          player2.setVelocityX(-350)
          player2.flipX=false;
          player2.anims.play('correr_izq',true);
      }else if(D.isDown){
          player2.setVelocityX(350)
          //player1.x=player1.x-8;
          player2.flipX=true;
          player2.anims.play('correr_izq',true);
          //player1.body.velocity.x=-120
      }else
      {
          player2.setVelocityX(0);
          player2.anims.play('quieto',true);
      }

      //Condicionantes del ataque (prueba)
      if(P.isDown && dis<50 || O.isDown && dis<50 ){
          player2.x=player2.x+100
      }

  },

  render: function() {

      game.debug.cameraInfo(game.camera, 32, 32);
      game.debug.spriteCoords(player1, 32, 500);
      game.camera.follow(player1);

  }

}

function colletBandera (player, bandera)
{
    bandera.disableBody(true, true);
    player.ownBandera = true;
}
