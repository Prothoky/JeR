'use strict'
class FinNivelW1 extends Phaser.Scene {
	constructor(){
		super ({key: "FinNivelW1"});
	}

	preload(){
    this.load.image('fondoFin','../assets/img/PantallaFinal/victoriaRojo.jpg')
		this.load.image('abandonar', 'assets/icons/BOTON_SALIR.png');
    game.scene.backgroundColor = "#FFFFF";
	}

	create(){
		game.polling = this.time.addEvent({ delay: 1000, callback: Alive, loop: true});

		var fondoFin = this.add.sprite(game.centerX,game.centerY, "fondoFin");
		fondoFin.displayWidth = game.centerX*2;
		fondoFin.scaleY = fondoFin.scaleX;

		jQuery.ajaxSetup({async:false});

		var user=null;
		var newscore;
		var url = game.url+'/'+game.name;
		$.ajax({
			method: "GET",
			url:url,
		}).done(function(value){
			user=value;
		}).fail(function (value) {
			if(value.status == 200){
				user=value;
			}else if(value.status == 0){
				console.log("Servidor caido");
			}else{
				console.log("Fallo de conexion con el servidor");
			}
		});
		console.log(user);
		if(user!=null){
			newscore = Math.floor((Math.random()*(2000+user.score)+100)+1);
			user.lastconection = Date.now();

				$.ajax({
					method: "PUT",
					url:url,
					data: JSON.stringify(user),
					processData: false,
					dataType: 'json',
					contentType: 'application/json',
				}).done(function(value){
					console.log("Score Update");
				}).fail(function (value) {
					if(value.status == 200){
						console.log("Score Update");
					}else if(value.status == 0){
						console.log("Servidor caido");
					}else{
						console.log("Fallo de conexion con el servidor");
					}
				});

		}
		else{
			console.log("Algo ha fallado");
		}
		jQuery.ajaxSetup({async:true});

		this.textoWinner = this.add.text(game.centerX*7.2/8, game.centerY*5/8, 'Ganador: ',{fontFamily: "Maiandra GD",fontSize:45, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoLooser = this.add.text(game.centerX*7/8, game.centerY*7/8, 'Jugador Rojo',{fontFamily: "Maiandra GD",fontSize:40, color: '#ff0000', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoScore = this.add.text(game.centerX*3.7/8, game.centerY*12/8, 'Puntuacion: ' + newscore,{fontFamily: "Maiandra GD",fontSize:35, color: '#ff0000', stroke:'#000000', strokeThickness: 5,align:'center'});

		this.botonSalir = this.add.image(game.centerX, game.centerY*14/8, 'abandonar');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => salir());
	}
}
function salir(){
			game.fase=0;
			game.fasebefore=0;
			game.scene.start('MenuPrincipal');
			game.scene.remove('FinNivelW1');
			game.scene.bringToTop('MenuPrincipal');
	}
	function reload(){
		game.scene.restart();
	}
