console.log("working");

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update });
var score = 0;

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude','assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32); //always tell how tall and wide each frame is for spritesheets
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE); // Physics= things like gravity and bounce that you would see in an arcade game
	// Sky
	game.add.sprite(0, 0, 'sky');

	//Group of Platforms
	platforms = game.add.physicsGroup(); //variable the same thing as puttin it on top
	platforms.enableBody = true; // makes the platform movable

	//Ground
	var ground = platforms.create(0, game.world.height - 50, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	//ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(500, 250, 'ground');
	ledge.body.immovable = true;

	//Player 
	player = game.add.sprite(32, 400, 'dude');
		// animate sprite
		player.animations.add('left', [0,1,2,3], 10, true);
		player.animations.add('right', [5,6,7,8], 10, true);
		//add Physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	// Enemies
	enemy1 = game.add.sprite(760, 20, 'baddie'); // highlight something and press command d to highlight everything after
		// animate sprite
		enemy1.animations.add('left', [0,1], 10, true);
		enemy1.animations.add('right', [2,3], 10, true);
		//add Physics
		game.physics.arcade.enable(enemy1);
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(10, 20, 'baddie'); // highlight something and press command d to highlight everything after
		// animate sprite
		enemy2.animations.add('left', [0,1], 10, true);
		enemy2.animations.add('right', [2,3], 10, true);
		//add Physics
		game.physics.arcade.enable(enemy2);
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;

	enemy3 = game.add.sprite(200, 20, 'baddie'); // highlight something and press command d to highlight everything after
		// animate sprite
		enemy3.animations.add('left', [0,1], 10, true);
		enemy3.animations.add('right', [2,3], 10, true);
		//add Physics
		game.physics.arcade.enable(enemy3);
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 500;
		enemy3.body.collideWorldBounds = true;

		//create stars
		stars = game.add.physicsGroup();
		stars.enableBody = true; //allows it to interact
		// Loop to create 12 stars
		for(var i = 0; i < 12; i++){
			var star = stars.create(i * 70, 0, 'star');
			star.body.gravity.y = 200;
			star.body.bounce.y = 0.2 + Math.random() * 0.7;
		}

		//Set up text
		var style = { font: "bold 23px Arial", fill: "#fff", boundsAlignH: "center", boundsAllignV: "middle"};
		// Create and position text
		scorelabel = game.add.text(-60, 0, "Your Score is: ", style);
		scoretext = game.add.text(70, 0, score, style);
		scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
		scoretext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
		scorelabel.setTextBounds(0, 520, 800, 100);
		scoretext.setTextBounds(0, 520, 800, 100);
	//Set up keyboard events
		cursors = game.input.keyboard.createCursorKeys();

	}


function update() {
	// Collision for player or the enemy and the platforms
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(enemy1,platforms);
	game.physics.arcade.collide(enemy2,platforms);
	game.physics.arcade.collide(enemy3,platforms);
	// Resets player sprite peed
	player.body.velocity.x = 0;

	//If key pressed
	if (cursors.left.isDown) {
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		// When player sprite stops
		player.animations.stop();
		player.frame = 4;
	}

	//Adding Jump 
	if (cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y = -300;
	}

	// enemy AI
	if (enemy1.x > 759){
		enemy1.body.velocity.x = -120;
		enemy1.animations.play('left');
	} else if (enemy1.x < 405) {
		enemy1.body.velocity.x = 120;
		enemy1.animations.play('right');
	}

	if (enemy2.x > 200){
		enemy2.body.velocity.x = -80;
		enemy2.animations.play('left');
	} else if (enemy2.x < 20) {
		enemy2.body.velocity.x = 80;
		enemy2.animations.play('right');
	}

	if (enemy3.x > 759){
		enemy3.body.velocity.x = -150;
		enemy3.animations.play('left');
	} else if (enemy3.x < 200) {
		enemy3.body.velocity.x = 150;
		enemy3.animations.play('right');
	}
	// Collide stars
	game.physics.arcade.collide(stars, platforms);
	// Define what happens when collision occurs - overlap
	game.physics.arcade.overlap(player, stars, collectStar, null, this);
	game.physics.arcade.overlap(player, enemy1, losePoint, null, this);
	game.physics.arcade.overlap(player, enemy2, losePointLeft, null, this);
	game.physics.arcade.overlap(player, enemy3, losePoint, null, this);
}

// Define collectStar
function collectStar (player, star){
	star.kill();
	score + 1; //score++
	scoretext.setText(score);
	// create new star
	star = stars.create(Math.floor(Math.random() * 750), 0, 'star');
	star.body.gravity.y = 200;
	star.body.bounce.y = 0.2 + Math.random() * 0.7;
}

// Define losePoint
function losePoint (player, enemy) {
	enemy.kill();
	score = score - 5;
	scoretext.setText(score);
	enemy.reset(760, 20);
}
function losePointLeft (player, enemy) {
	enemy.kill();
	score = score - 5;
	scoretext.setText(score);
	enemy.reset(10, 20);
}

















