// create a variable to hold our world object
var world;
var markerHiro;

// image variables
var butterflyImage;
var netImage;

// this array will hold our randomly moving butterflies
var butterflies = [];

// load in artwork
function preload() {
  butterflyImage = loadImage('images/butterfly.png');
  netImage = loadImage('images/net.png');
}

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');
  
  // configure Perlin noise
  noiseDetail(24);

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');
  
  imageMode(CENTER);
  
  // insert 20 butterflies into the array
  for(var i = 0; i < 25; i++) {
    butterflies.push(new Butterfly());
  }
}


function draw() {
  // erase the background
  world.clearDrawingCanvas();
  
  // get the marker's screen position
  var markerPosition = markerHiro.getScreenPosition();
  
  // draw the net on the player's position
  image(netImage, markerPosition.x, markerPosition.y, 150, 150);
  
  // for every butterfly, update and show it
  for (var i = 0; i < butterflies.length; i++) {
    butterflies[i].show();
    butterflies[i].move();
    
    // detect if the butterfly should be caught
    if(dist(markerPosition.x, markerPosition.y, butterflies[i].x, butterflies[i].y) < 100) {
      // if the distance is small, mark the butterfly as captured
      butterflies[i].captured = true;
    }
  }
}

class Butterfly {
  constructor() {
    // position the butterfly randomly on the screen
    this.x = random(width);
    this.y = random(height);
    // keep track of whether the butterfly has been captured yet
    this.captured = false;
    
    // create perlin noise offsets
    this.xNoiseOffset = random(0,1000);
    this.yNoiseOffset = random(1000,2000);
  }
  
  show() {
    // only draw the butterfly if it hasn't been captured yet
    if (this.captured == false) {
      image(butterflyImage, this.x, this.y, 50, 50);
    }
  }
  
  move() {
    // get noise for x and y, using the map function
    // it takes the noise value from 0 to 1, and maps it from -3 to 3
    var xNoise = map(noise(this.xNoiseOffset), 0, 1, -3, 3);
    var yNoise = map(noise(this.yNoiseOffset), 0, 1, -3, 3);
    
    // increment our position by our noise value
    this.x += xNoise;
    this.y += yNoise;
    
    // increment our noise offeset, to get new noise next frame
    this.xNoiseOffset += 0.01;
    this.yNoiseOffset += 0.01;
    
    // implement wraparound logic
    if (this.x < 0) {
      this.x = width;
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
    if (this.y > height) {
      this.y = 0;
    }
  }
}