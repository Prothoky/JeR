
class FinNivelW2 extends Phaser.Scene {
	constructor(){
		super ({key: "FinNivelW2"});
	}

	preload(){

    this.load.image('fondoFin','../assets/img/PantallaFinal/VICTORIA_AZUL.jpg')
		this.load.image('abandonar', 'assets/icons/BOTON_SALIR.png');
    game.scene.backgroundColor = "#FFFFF";
		//game.scene.add('MenuPrincipal');
		//this.texto = this.add.text(500, 500, 'Ganador: JUGADOR 2\nPerdedor: JUGADOR 1', { fontSize: '48px', fill: '#FF0000' });
	}

	create(){
		game.polling = this.time.addEvent({ delay: 1000, callback: Alive, loop: true});

		var height = game.config.height;
    var width = window.innerWidth-300;

		var x = width/2 ;
		var y = height/2;

		var fondoFin = this.add.sprite(x, y, "fondoFin");

		fondoFin.displayWidth = width;

		fondoFin.scaleX = fondoFin.scaleY;

		//this.texto.setText('Ganador: Guest \nPerdedor: ' + game.inputNickname1.value);

		jQuery.ajaxSetup({async:false});

		var user=null;
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
			var newscore = Math.floor((Math.random()*(2000+user.score)+100)+1);
			user.lastconection = Date.now();
			if(user.score < newscore){
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
		}
		else{
			console.log("Algo ha fallado");
		}
		jQuery.ajaxSetup({async:true});

		this.textoWinner = this.add.text(x*7.2/8, y*5/8, 'Ganador: ',{fontFamily: "Maiandra GD",fontSize:45, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoLooser = this.add.text(x*7/8, y*7/8, 'Jugador Azul',{fontFamily: "Maiandra GD",fontSize:40, color: '#0066ff', stroke:'#000000', strokeThickness: 5,align:'center'});
		this.textoScore = this.add.text(x*9.5/8, y*12/8, 'Puntuacion: ' + newscore,{fontFamily: "Maiandra GD",fontSize:35, color: '#0066ff', stroke:'#000000', strokeThickness: 5,align:'center'});



		this.botonSalir = this.add.image(x, y*14/8, 'abandonar');
		this.botonSalir.setInteractive({ useHandCursor: true  } )
		.on('pointerdown', () => salir());

	}
}

function salir(){
			game.scene.start('MenuPrincipal');
			game.scene.remove('FinNivelW2');
			game.scene.bringToTop('MenuPrincipal');
	}

function reload(){
	game.scene.restart();
}
