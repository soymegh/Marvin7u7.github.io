var configTeclado = { prevent_repeat : true };
var eventoTeclado = new window.onkeypress

function pulsaA(){
    console.log('Has pulsado A');
}

eventoTeclado.simple_combo('a',pulsaA);


var miCanvas 
/* Recoger datos del Raton */
function inicializar() {
    miCanvas = document.getElementById('canvas');

    miCanvas.addEventListener('mousedown', clickRaton,false);
    miCanvas.addEventListener('mouseup', sueltaRaton, false);
    miCanvas.addEventListener('mousemove', posicionRaton, false);
}

function clickRaton(e){
    console.log('pusadoRaton');
}

function sueltaRaton(e){
    console.log('Raton Liberado');
}

function posicionRaton(e){
    var x = e.pageX;
    var y = e.pageY;
    console.log('X: ' + x + ' Y: ' + y)
}


/* Objetos*/ 

var personaje = function(){
    this.x = 0;
    this.y = 0;
    this.nombre = new personaje();

    //Mover abajo 
    this.abajo = function(){
        this.y += 10;
    }


}

var personaje1 = new personaje(10,100,'fordo');
var personaje2 = new personaje(220, 280,'sam');


/* Canvas*/ 