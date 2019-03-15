var canvas = document.getElementById("canvs");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight-20;
canvas.width = window.innerWidth;
canvas.style.backgroundColor = "rgba(60, 2, 43, 0.9)";
var x = canvas.width*0.45;
var tid = 0;
var left = false;
var right = false;

function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.rect(x, canvas.height*0.9, 100, 10);
ctx.fillStyle = "rgba(229, 253, 255, 0.8)";
ctx.rect(-5,canvas.height*0.91,canvas.width,1);
ctx.fill();
}

window.onkeydown = function(event){
    var key = event.keyCode;
    if(key == 39){ right= true;}
    else if(key == 37){left = true;}
}
window.onkeyup = function(event){
    var key = event.keyCode;
    if(key == 39){ 
        right= false;
        console.log("right");
    }
    else if(key == 37){left = false;}
}

function move (){
    if(right){
        x++;
    }
    if(left){
        x--;
    }
}

function frame(){
    tid++;
    draw();
    move();
    //console.log(tid);
}
setInterval(frame,100);