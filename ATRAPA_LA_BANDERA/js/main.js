"use strict"

var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 9.8 }
        }
    },
    //Orden de las escenas
    scenes: [Menu]
    //scenes:{
      //preload: preload,
      //create: create
    //}
};

var game = new Phaser.Game(config);

function preload ()
{

  this.load.image('logo', 'C:\Users\Proth\Documents\Juegos en Red\ATRAPA LA BANDERA\ATRAPA_LA_BANDERA\assets\img\Asus01.png');
}

function create ()
{
  this.add.image(500,500,'logo');
}

function update(){
  this.add.image(500,500,'logo');
}
