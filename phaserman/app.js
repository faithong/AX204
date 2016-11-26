console.log("working");

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var score = 0
var life = 3;

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/ground.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude','assets/dude.png', 32, 48);
	game.load.spritesheet('assets/baddie.png', 32, 32); //always tell how tall and wide each frame is for spritesheets
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
	ledge = platforms.create(150, 250, 'ground');
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
	//Set up keyboard events
		cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	// Collision for player or the enemy and the platforms
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(enemy1,platforms);
	// Resets player sprite peed
	player.body.velocity.x = 0;

	//If key pressed
	if (cursors.left.isDown) {
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		// When player sprite stops
		player.animations.stop();
		player.frame = 4;
	}

	// enemy AI
	if (enemy1.x > 759){
		enemy1.body.velocity.x = -120
		enemy1.animations.play('left');
	} else if (enemy1.x < 405) {
		enemy1.body.velocity.x = 120
		enemy1.animations.play('right');
	}
}












