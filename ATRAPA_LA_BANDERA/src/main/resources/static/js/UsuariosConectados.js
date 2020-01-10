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

		//var fondoMenuPrinc = this.add.sprite(x, y, "fondoMenuPrinc");
		//fondoMenuPrinc.displayWidth = width;
		//fondoMenuPrinc.scaleX = fondoMenuPrinc.scaleY;

		/*var nombre = '';
		  var alt = 5/8;
		  var url = game.url;
		  $.ajax({
			  method: "GET",
			  url:url,
			  }).done(function(value){
		      getonline(value);
			  }).fail(function (value) {
			    if(value.status == 200){
			      nombre = getonline(value);
			      this.add.text(x*8.5/8, y*alt, nombre ,{fontFamily: "Maiandra GD",fontSize:20, color: '#ffcc00', stroke:'#000000', strokeThickness: 5,align:'center'});
			      alt += (1/8);
			    }else{
			     console.log("ERROR");
			   }
			  });
		*/
		var totalUsuarios = 0;

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


	}

	volver() {

		game.scene.sendToBack('UsuariosConectados');
		game.scene.stop('UsuariosConectados');
		game.scene.resume('MenuPrincipal');

	}


}
/*
function getonline(value){
	  for(var i=0 ; i<value.length;i++){
	    if(value[i].online){
	      return value[i].name;
	    }
	  }
	}*/

      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }
  </script>

//areas de texto


</body>

<footer>

  <div id="contacts" class="creators">
    <em>Paula Calzada Toledo</em>
    <em>Eusebiu Costinel Delcea</em>
    <em>Rodrigo Martinez Sanchez</em>
    <em>Diego Perez Perez</em>
  </div>

</footer>

</html>
