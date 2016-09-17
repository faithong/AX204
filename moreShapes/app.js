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
ctx3,moveTo(300,500);
ctx3.lineTo(350,350);
ctx3.lineTo(400,350);
ctx3.lineTo(450,500);
ctx3.fillStyle ="grey";
ctx3.fill();
ctx3.stroke();
ctx3.closePath();

ctx3.moveTo(375,500);
ctx3.strokeStyle();
ctx3.lineTo(375,350);
ctx3.stroke();
















