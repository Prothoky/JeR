'use strict'

class Nickname3 extends Phaser.Scene{

  constructor(){
    super({key: 'Nickname3'})
  }

 preload ()
{
    this.load.html('nameform', 'assets/text/loginform.html');
    this.load.image('botonMP', 'assets/img/MenuPrincipal/botonJugar.png');//BOTON JUGAR
    this.load.image('fondo', 'assets/img/MenuPrincipal/fondoMP.jpg'); //FONDO
}

 create ()
{
    var height = game.config.height;
    var width = game.config.width;

    var x = width/2 ;
    var y = height/2;

    this.scene.background =this.add.image(x,720/2,"fondo");
    this.scene.background.displayHeigth = 720;
    this.scene.background.scaleX = this.scene.background.scaleY;

    if(!this.nicknameMenu3){
      game.scene.add('MenuPrincipal', new MenuPrincipal);
      game.scene.sendToBack('MenuPrincipal');
      game.scene.stop('MenuPrincipal');
      this.nicknameMenu3=true;
    }

    var text = this.add.text(x*5.5/8, y*4.5/8, 'Introduzca su Nickname',{fontSize:33, color: '#ff0000', backgroundColor:'#FFFFFF',align:'center',fontStyle:'bold'});

    var element = this.add.dom(x, y).createFromCache('nameform');

    element.addListener('click');

    element.on('click', function (event) {

       if (event.target.name === 'loginButton')
       {
           game.inputNickname1 = this.getChildByName('nickname1');

           if (game.inputNickname1.value !== '' && game.inputNickname1.value !== 'Guest')
           {
             let data = {ip: '', name: game.inputNickname1.value, score:0, online:false, lastconection : Date.now()};

             $.ajax({
               method: "POST",
               url:game.url,
               data: JSON.stringify(data),
               processData: false,
               dataType: 'json',
               contentType: 'application/json',
             }).done(function (){
               console.log("Register success");
               game.name = game.inputNickname1.value;
               game.scene.bringToTop('MenuPrincipal');
               game.scene.start('MenuPrincipal');
               game.scene.stop('Nickname3');
           }).fail(function (value) {
               if(value.status == 201){
                 console.log("Register success");
                 game.name=game.inputNickname1.value;
                   game.scene.bringToTop('MenuPrincipal');
                   game.scene.start('MenuPrincipal');
                   game.scene.stop('Nickname3');
               }
               else{
                 //text.text = "El usuario ya existe";
                 var url = game.url+'/'+game.inputNickname1.value;
                 $.ajax({
                 method: "GET",
                 url:url,
                 }).done(function(value){
                   console.log("Login");
                   game.name = game.inputNickname1.value;
                   game.scene.bringToTop('MenuPrincipal');
                   game.scene.start('MenuPrincipal');
                   game.scene.stop('Nickname3');
                 }).fail(function (value) {
                   if(value.status == 200){
                     console.log("Login");
                     game.name = game.inputNickname1.value;
                     game.scene.bringToTop('MenuPrincipal');
                     game.scene.start('MenuPrincipal');
                     game.scene.stop('Nickname3');
                   }else if(value.status == 0){
                    console.log("Servidor caido");
                  }else{
                    console.log("Fallo no contemplado");
                  }
                 });

               }
           });
       }
       else
       {
         text.text = "Tienes que introducir un nombre de usuario";
       }
     }

   });


    this.tweens.add({
        targets: element,
        y: 300,
        duration: 3000,
        ease: 'Power3'
    });
  }



  irAMenu(){

    game.scene.bringToTop('MenuPrincipal');
    game.scene.start('MenuPrincipal');
    game.scene.stop('Nickname');

  }

}

function register(url, data){
  var j;
  $.ajax({
     method: "POST",
     url:url,
     data: JSON.stringify(data),
     processData: false,
     dataType: 'json',
     contentType: 'application/json',
    }).done(function () {
        j = true;
    }).fail(function () {
        j = false;
    });
    console.log(j);
    return j;
}
