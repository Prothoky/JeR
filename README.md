# Juegos-en-Red
Práctica para la asignatura Juegos en Red

**Título:** Atrapa la Bandera

**Temática:** Scroll 2D de lucha en el que gana el que llegue a su base con la bandera.

**Integrantes grupo A:**

Paula Calzada Toledo      p.calzada.2017@alumnos.urjc.es  paulacalzada014@gmail.com        
Eusebiu Costinel Delcea   ec.delcea.2017@alumnos.urjc.es  deusebiu98@yahoo.es  
Rodrigo Martínez Sánchez  r.martinezsa.2016@alumnos.urjc.es prothoky@gmail.com                     
Diego Pérez Pérez         d.perezp.2017@alumnos.urjc.es   diegoperezp2@gmail.com  

**Game Design Document**  

# ATRAPA LA BANDERA  
    
    
##### 3 de octubre de 2019  
  
  
    
##### Revisión 1  
  
    
      
## Índice  
  
1. Cambios  
2. Introducción  
      1. Concepto del juego  
      2. Características principales   
      3. Género  
      4. Propósito y público objetivo  
      5. Jugabilidad   
      6. Estilo visual   
      7. Alcance   
3. Mecánicas de juego   
       1. Flujo de juego   
       2. Personajes   
                 2.1 Guerrero  
       3. Movimiento y físicas   
                 3.1 Interacción entre elementos   
                 3.2 Controles  
4. Interfaz   
5. Diagrama de flujo   
       1. Menú principal   
       2. Selección de nivel   
       3. Nivel   
       4. Fin de nivel   
6. Arte   
      1. Arte 2D   
      2. Audio 
7. Referencias  

## 1. Cambios  
Cambios con respecto a versiones anteriores del documento.  
* __Revisión 0:__ Versión 0 del documento; sin cambios.
* __Revisión 1:__ Versión 1 del documento, fase 2. 
Hemos realizado varios cambios al hacer la implementación del código, como por ejemplo hemos cambiado algunos controles de teclas y hemos añadido nuevas funcionalidades para que los menús a parte de funcionar con el cursor funcionen con el teclado. También hemos decidido simplificar los mapas a uno con varios niveles, ya que era lo más asequible debido al tiempo. Por último, lospersonajes en lugar de hacerlos tipo stickman, como habíamos pensado en un principio, los hemos evolucionado a personajes más humanoides y con animaciones como personas reales, para darle más verosimilitud.

Los nuevos controles son: 

__JUGADOR 1__
* __tecla izq:__ Mover Jugador 1 a la izquierda.
* __tecla dcha:__ Mover Jugador 1 a la derecha.
* __tecla arriba:__ Salto Jugador 1.
* __P:__ Jugador 1 apunta abajo.
* __O:__ Jugador 1 apunta arriba.
* __L:__ Jugador 1 golpe abajo.
* __K:__ Jugador 1 golpe arriba.

__JUGADOR 2__
* __A:__ Mover Jugador 2 a la izquierda.
* __D:__ Mover Jugador 2 a la derecha.
* __W:__ Salto Jugador 2.
* __T:__ Jugador 2 apunta abajo.
* __Y:__ Jugador 2 apunta arriba.
* __G:__ Jugador 2 golpe abajo.
* __H:__ Jugador 2 golpe arriba.

__MENÚ PRINCIPAL__
* __O:__ Opciones
* __J:__ Jugar
* __C:__ Controles

__MENÚ PAUSA__
* __1:__ Volver
* __2:__ Opciones
* __3:__ Controles
* __3:__ Abadonar

__JUEGO__
* __M:__ Mutar música
* __ESC:__ Menú de Pausa

__CONTROLES y OPCIONES__
* __0:__ Volver





## 2. Introducción
Este es el documento de diseño del juego titulado “Atrapa la bandera”. La wiki en español sobre el desarrollo de videojuegos en 3D utilizando ‘X’ como motor de renderizado.
Este escrito tiene como objetivo principal plasmar los elementos que debe incluir Atrapa la bandera y servir de carta de presentación en caso de buscar colaboradores en un futuro.

### 2.1. Concepto del juego
   Atrapa la bandera es un juego en el que controlaremos cada jugador a un guerrero con una espada. Ambos guerreros deberán coger la bandera situada en el centro del mapa y llevarla a su lado de la base. Si un guerrero coge la bandera, el contrario deberá matarlo para quitársela. El primero que entregue la bandera en su base gana.

### 2.2. Características principales
El juego se basa en los siguiente pilares:  
* __Planteamiento sencillo:__ la historia mencionada es muy simple, como el juego al que todo el mundo ha jugado de pequeño. Coger la bandera y llegar a la base.
* __Táctica:__ Puedes coger la bandera y salir corriendo o esperar a que el enemigo la coja para asestar un golpe mortal y robársela.
* __Dinamismo:__ Las partidas serán rápidas al igual que el juego original. Tocar y correr.

### 2.3. Género
Atrapa la bandera se basa en los siguientes pilares  
* __Scroll 2D:__ Un género conocido y caracterizado por tener que caminar, correr, saltar o escalar sobre una serie de plataformas y acantilados, para llegar al final del mapa y superar el nivel.  
* __Lucha:__ Género que se basa en manejar un luchador ya sea dando golpes, usando poderes mágicos o armas (incluyendo las de fuego), arrojando objetos o aplicando llaves. Este género se podría encuadrar en el super-género de arcade, es decir es más importante la acción que la estrategia, aunque haya mucho de esta última.  
* __Acción en tercera persona:__ El jugador verá cómo su “guerrero”, el componente de la acción, provoca todo el dinamismo del juego aunque la cámara se situará de forma que podamos ver gran parte de la escena.

### 2.4. Propósito y público objetivo
El principal objetivo de Atrapa la bandera y su interés es juego y sus mecánicas. Atrapa la bandera está dirigido a jugadores de todas las edades con tiempo limitado que dedicar a los videojuegos. Por ello, se apuesta por un sistema de partidas cortas y rápidas. La historia es simple y sencilla, lo que permite poder jugar de forma esporádica.

### 2.5. Jugabilidad
Tenemos que impedir que el enemigo llegue a su base y nosotros llevar la bandera a la nuestra. Para ello usaremos los siguientes elementos:  
* __Movilidad:__ Nos desplazaremos a lo largo del mapa para lograr llegar a nuestra base. Tendremos que ir esquivando los obstáculos y esquivando los ataques de nuestro enemigo para lograrlo.  
* __Apuntado:__ Podremos realizar dos tipos de ataque teniendo que apuntar antes de realizarlos. Subiremos o bajaremos la espada en función de donde queramos asestar o parar un golpe  
* __Ataque:__  Tras haber apuntado, podremos realizar una estocada o tirar el arma al enemigo para así intentar recuperar la bandera.

### 2.6. Estilo visual
Atrapa la bandera tendrá un estilo sencillo, no demasiado detallista para encajar con su carácter amigable y accesible. El estilo visual que más encaja con este concepto es el de dibujo animado o cómic con baja resolución como un stick-man . Esto ayudará a que el renderizado web vaya más fluido.

### 2.7. Alcance
El objetivo principal es desarrollar un sistema de juego sólido al que poder ir introduciendo contenidos sin dificultad. La primera versión contendrá el juego multijugador en local en su versión más simple.

## 3. Mecánicas de juego
### 3.1. Flujo de juego 
   Como la mecánica y la historia, el flujo de juego también es simple.   
  * __Modo de juego:__ El jugador deberá elegir si quiere jugar en modo online o en modo offline.   
  * __Mapa:__ Tras esto deberá elegir el mapa, la única diferencia que supondrá será de forma estética con algún que otro obstáculo colocado de forma diferente.  
  * __Gameplay:__ Por último se accede al mapa de juego, y con una simple cuenta atrás de 3 a 0, comienza la partida.
### 3.2. Personajes 
Nuestro juego contará con tan solo un personaje a elegir, el guerrero, de tal forma que todos los jugadores estén en igualdad de condiciones.  
   * __Guerrero :__  
    Será el personaje a controlar por el jugador. Contará con una espada con la cual poder atacar al contrincante ya sea a través de una estocada (distancia corta) o lanzando la misma (larga distancia). De esta forma si un jugador sale corriendo podremos lanzar el arma para interceptar y evitar que llegue a su base. 
El único contra que tiene arrojar la espada es que después el jugador tendrá que pasar por encima para recogerla y así poder volver a usarla.
### 3.3. Movimiento y físicas 
  
  __1. Interacción entre elementos__  
    El único elemento del mapa con el que se podrá interactuar será la bandera. Al comienzo y cada vez que uno de los jugadores muera (si la había recogido previamente), aparecerá una bandera que al pasar sobre ella será recogida.
Por otro lado, la espada será otro elemento con el que interactuar si esta ha sido arrojada anteriormente. Al igual que con la bandera, si la espada está en el suelo, el jugador podrá pasar sobre ella para recogerla.
  
  __2. Controles__  
  * __Movilidad:__ Nos desplazaremos utilizando las teclas ’A’ y ‘D’ y saltaremos con ‘Espacio’ y, si jugamos en local, el otro jugador se desplazará mediante las teclas de dirección izq. y der. y saltará con ‘Ctrl’.  
  * __Apuntado:__ Mediante ‘W’ y ‘S’ subiremos o bajaremos la espada y, si jugamos en local, el otro jugador lo hará mediante las teclas de dirección arriba y abajo.  
  * __Ataque:__ A través de los botones ‘’ y ‘H’ realizaremos el ataque y, si jugamos en local, el otro jugador lo hará mediante las teclas ‘Ñ’ y ‘L’.



## 4. Interfaz
   La interfaz tendrá un estilo minimalista. Esto quiere decir que una vez los controles se hayan mostrados, no tendrás más referencia de equipamiento y movimiento que lo visual.


## 5. Diagrama de flujo 

* __Menú principal__  
Pantalla simple con una pequeña animación de fondo en la que se elegirá el modo de juego. (OFFLINE / ONLINE)  
* __Selección de mapa__  
Pantalla con el mismo fondo que el menú principal el cual cambiará de color en función del mapa que se vaya a seleccionar.  
* __Nivel__   
El nivel tendrá un fondo ¿estático? para dar mayor importancia a los personajes de los jugadores.  
* __Fin de nivel__  
El final de nivel se marcará con la palabra YOU WIN / YOU LOSE en función de si el jugador es el ganador o el perdedor. Tras aceptar dicha pantalla volverás al menú principal.


## 6. Arte 

### 6.1. Arte 2D 
El arte será muy simple.  
El fondo será estático pero muy largo para tener recorrido a lo largo.  
Los personajes tendrán una complexión del estilo de stick-man lo suficiente para estar definido y observar qué movimiento van a realizar, pero sin entrar en muchos detalles.  
Por otra parte los obstáculos del mapa irán ambientado en función del fondo, teniendo una textura similar a la del suelo.

### 6.2. Audio  
El audio lo separaremos en dos ámbitos  
* __Menús:__ Esta música ambiental no muy enérgica y con un loop corto ya que el jugador no pasará mucho tiempo.   
* __In-Game:__ Esta música por el contrario tendrá un énfasis más elevado y con mayor ritmo. Tendrá pequeñas variaciones en función del mapa que se elija pero con un trasfondo común.




## 7. Referencias  
https://es.wikipedia.org/wiki/Videojuego_de_plataformas   
https://es.wikipedia.org/wiki/Videojuego_de_lucha
