Pantalla.MenuPausa = function (game){};

Pantalla.MenuPausa.prototype = {

	create: function(){

		this.add.sprite (80, 40, 'fondoPausa');
		this.add.sprite(387.5, 77, 'menuPausa');
		
				
		//BOTONES DE OPCIONES
		this.botonReanudar = this.add.button(566.5, 252.87, 'reanudar', this.reanudar, this, 2, 0, 1);
		this.botonReanudar.input.useHandCursor = true;

		this.botonOpciones = this.add.button(566.5, 352.87, 'opciones', this.opciones, this, 2, 0, 1);
		this.botonOpciones.input.useHandCursor = true;

		this.botonControles = this.add.button(566.5, 452.87, 'controles', this.controles, this, 2, 0, 1);
		this.botonControles.input.useHandCursor = true;

		//BOTON VOLVER
		this.botonAbandonar = this.add.button(566.5, 552.87, 'abandonar', this.abandonar, this, 2, 0, 1);
		this.botonAbandonar.input.useHandCursor = true;

	},

	reanudar: function() {

		//una vez hecho esto, vamo a las instrucciones
		this.game.state.start('Juego');
	}, 

	opciones: function(){

		this.game.state.start('OpcionesPaus');
	}, 

	controles: function(){

		this.game.state.start('ControlesPaus');
	},

	abandonar: function(){

			this.game.state.start('MenuPrincipal');

	}

};