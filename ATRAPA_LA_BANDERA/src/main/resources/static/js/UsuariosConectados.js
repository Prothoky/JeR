'use strict'
class UsuariosConectados extends Phaser.Scene{

	constructor(){

		super ({key: "UsuariosConectados"});
	}

	preload(){

    ///Fondo y botón
    //this.load.image('fondoMenuPrinc', 'assets/img/MenuPrincipal/fondoMP.jpg'); //FONDO
    this.load.image('volverUsuarios', 'assets/img/MenuPrincipal/botonSalir.png'); //BOTON SALIR
	}

	create(){
		game.polling = this.time.addEvent({ delay: 1000, callback: Alive, loop: true});


		this.cameras.main.setBackgroundColor(0x000000);

		var height = game.config.height;
		var width = window.innerWidth-300;

		//get center of the canvas
		var x = width/2 ;
		var y = height/2;

		var totalUsuarios = 0;
		var usersconected = 0;

		//TEXTOS
		this.Titulo = this.add.text(x*4/8, y*2/8, 'USUARIOS CONECTADOS: ',{fontFamily: "Maiandra GD",fontSize:45, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.Total = this.add.text(x*7.5/8, y*4/8, 'Total: ',{fontFamily: "Maiandra GD",fontSize:20, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.NumTotal = this.add.text(x*8.5/8, y*4/8, totalUsuarios ,{fontFamily: "Maiandra GD",fontSize:20, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});


		//BOTON VOLVER
		this.volverUsuarios = this.add.image(x, y*13.5/8, 'volverUsuarios');
		this.volverUsuarios.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => this.volver());
	}

	update (time, delta){
		ActualizarUsuariosConectados();
	}

	volver() {

		game.scene.sendToBack('UsuariosConectados');
		game.scene.stop('UsuariosConectados');
		game.scene.resume('MenuPrincipal');

	}

	function ActualizarUsuariosConectados(){
		var url = game.url+'/'+game.name;
		var url = game.url;
		$.ajax({
			method: "GET",
			url:url,
			}).done(function(value){
					usersconected = getusersonline(value);
			}).fail(function (value) {
				if(value.status == 200){
					usersconected = getusersonline(value);
				}else{
				 console.log("ERROR");
			 }
			});
	}

	function string getusersonline(value){
		for(var i=0 ; i<value.length;i++){
			if(value[i].usersonline){
				return value[i].name;
			}
		}
	}

}
