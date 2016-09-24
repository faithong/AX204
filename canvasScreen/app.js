console.log("working");
//Sprites Loading
var mario = new Image();
mario.src = "Mario.png"

var house = new Image();
house.src = "House.png"

var tree = new Image();
tree.src = "Tree.png"

var luigi = new Image();
luigi.src = "luigi.png"

// Draw our sprite
mario.onload = function(){
	ctx3.drawImage(mario,150,300,50,100);
}
house.onload = function(){
	ctx3.drawImage(house,400,100,400,350);
}

tree.onload = function(){
	ctx3.drawImage(tree,300,150,150,250);
}

luigi.onload = function(){
	ctx3.drawImage(luigi,200,300,50,100);
}

//** Scenary**
var c3 = document.getElementById("Scene");
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
