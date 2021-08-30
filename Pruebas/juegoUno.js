
var canvas;
var ctx;
var FPS = 50;

var imgPor;

function inicializar(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    imgPor = new Image();
    imgPor.src = 'assets/portero.png';

    setInterval(function(){
        principal();
    },1000/FPS);
}


var protagonista = function(x,y){
    this.x = x;
    this.y = y;
    this.velocidad = 20;

    this.dibuja = function(){
        ctx.drawImage(imgPor, this.x, this.y)
    }

    this.arriba = function(){
        this.y -= this.velocidad;
    }
    this.abajo = function(){
        this.y += this.velocidad;
    }

    this.derecha = function(){
        this.x += this.velocidad;
    }
    this.izquierda = function(){
        this.x -= this.velocidad;
    }
}

var personaje = function(x,y){
    this.x = x;
    this.y = y;
    this.derecha = true;

    this.dibuja = function(){ 
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y,50,50);
    }

    this.mover = function(vel){

        if(this.derecha == true){
            if(this.x <400)
                this.x += vel;
            else{
                this.derecha = false;
            }
        }
        else{
            if(this.x > 50)
            this.x-=vel;
            else{
                this.derecha = true;
            }
        }  
    }
}

var per1 = new personaje (10,100);
var per2 = new personaje (10,200);
var per3 = new personaje (10,300);
var prota = new protagonista(300,300);

document.addEventListener('keydown', tecla);

function tecla(e) {
    console.log(e.keyCode);

    //arriba
    if(e.keyCode == 38){
        prota.arriba();
    }
    //abajo
    if(e.keyCode == 40){
        prota.abajo();
    }
    //derecha
    if(e.keyCode == 39){
        prota.derecha();
    }
    //izquierda
    if(e.keyCode == 37){
        prota.izquierda();
    }
}




function borrarCanvas(){
    canvas.width =  1000;
    canvas.height = 1000;
}

function principal(){
    borrarCanvas();
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();
    prota.dibuja();
    
    per1.mover(1);
    per2.mover(2);
    per3.mover(4);

}