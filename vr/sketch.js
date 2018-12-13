// variable to hold a reference to our A-Frame world
var world;

// this array will hold our coins
var coins = [];
// ship variable will hold the spaceship
var ship;

// create and load the sound that we'll play when a coin is collected
var coinSound;

function preload() {
	coinSound = loadSound('assets/tink.mp3');
}

function setup() {
	// no canvas needed
	noCanvas();
	world = new World('VRScene');

	// create a plane to serve as our "ground"
	var g = new Plane({
		x:0,
		y:0,
		z:0,
		width:40,
		height:40,
		red:0,
		green:102,
		blue:153,
		rotationX:-90,
		metalness:0.25
	});

	// add the plane to our world
	world.add(g);
	
	// create 40 coins to add to our array
	for(var i=0; i<40; i++) {
		// generate random values for x and z coordinates for each coinrandom(-20, 20
		var x = random(-20, 20);
		var z = random(-20, 20);
		// push the new coin onto the array
		coins.push(new Coin(x, z));
	}
	
	// import the spaceship object
	ship = new OBJ({
		asset: 'saucer-obj',
		mtl: 'saucer-mtl',
		x: 0,
		y: 3,
		z: 0,
		scaleX: 2,
		scaleY: 2,
		scaleZ: 2
	});
	// and add the spaceship to the world
	world.add(ship);
}

function draw() {
	// go through all the coins and update them every frame
	// (all this really does is spin them)
	for (var i = 0; i < coins.length; i++) {
		coins[i].update();
	}
	// spin the spaceship a little bit every frame!
	ship.spinY(-1);
}

class Coin {
	
	constructor(x, z) {
		// create a coinObject as part of this class
		// I'm using a cylinder, but you can do any primitive shape you want (or load in something like an OBJ file!)
		// notice that I give it the x and z coordinates that were passed in
		this.coinObject = new Cylinder({
			radius: 0.5,
			height: 0.1,
			x: x,
			y: 0.5,
			z: z,
			// I found this yellow color online!
			red: 255,
			green: 195,
			blue: 0,
			rotationX: 90,
			rotationY: random(360), // I'm giving each coin a random starting rotation value!
			// the clickFunction will run every time we click it
			clickFunction: function(e) {
				// the e in the clickFunction represents the object that's being clicked on, so we can use that to remove the object from the world
				coinSound.play();
				world.remove(e);
			}
		});
		
		// finally, now that we've constructed the coinObject, we add it to the world
		world.add(this.coinObject);
	}
	
	// the update function just spins the coin
	update() {
		// we call the aframep5 method spinY, to spin the object along its Y axis
		this.coinObject.spinY(0.5);
	}
}