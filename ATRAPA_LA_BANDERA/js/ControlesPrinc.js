Pantalla.ControlesPrinc = function (game){};

Pantalla.ControlesPrinc.prototype = {

	create: function(){

		this.add.sprite (80, 40, 'fondoControles');

		//BOTON VOLVER
		this.botonVolver = this.add.button(612.5, 510, 'volverControles', this.volver, this, 2, 0, 1);
		//this.botonVolver.anchor.set(-2.5,-3);
		this.botonVolver.input.useHandCursor = true;

	},

	volver: function() {

		//una vez hecho esto, vamo a las instrucciones
		this.game.state.start('MenuPrincipal');
	}

};