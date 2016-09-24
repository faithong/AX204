console.log("Everything is working");

var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle= "blue" ;
ctx.moveTo(0,0);
ctx.lineTo(300,300);
ctx.lineTo(300,150);
ctx.lineTo(0,150);
ctx.closePath();
ctx.moveTo(0,300);
ctx.lineTo(300,0);
ctx.lineTo(150,0);
ctx.lineTo(150,300);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');

ctx2.beginPath();
ctx2.arc(100,100,50,0,6.28);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "linen";
ctx2.fill();

var c3 = document.getElementById("Scenery");
var ctx3 = c3.getContext('2d');

ctx3.beginPath(0,0);
ctx3.lineTo(0,350);
ctx3.lineTo(800,350);
ctx3.lineTo(800,800);
ctx3.lineTo(0,800);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "green";
ctx3.fill();

ctx3.beginPath(0,0);
ctx3.lineTo(0,350);
ctx3.lineTo(800,350);
ctx3.lineTo(800,0);
ctx3.lineTo(0,0);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "cyan";
ctx3.fill();

ctx3.beginPath(0,0);
ctx3.arc(100,100,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "yellow";
ctx3.fill();


ctx3.beginPath()
ctx3.moveTo(552,200);
ctx3.lineTo(545,200);
ctx3.lineTo(500,250);
ctx3.lineTo(600,250);
ctx3.fillStyle ="grey";
ctx3.fill();
ctx3.stroke();
ctx3.closePath();

ctx3.fillRect(500,250,100,100)
ctx3.clearRect(515,270,20,20)
ctx3.clearRect(560,270,20,20)
ctx3.clearRect(538,320,20,30)
ctx3.fillStyle ="red";
ctx3.fill()
ctx3.stroke()
ctx3.closePath()

ctx3.beginPath()
ctx3.moveTo(538,320)
ctx3.lineTo(538,538)
ctx3.lineTo(538,538)
ctx3.stroke()
ctx3.closePath()














