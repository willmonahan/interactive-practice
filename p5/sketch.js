// gravity is what lets our balls bounce realistically
var gravity = 0.5;
// this array will store all the balls
var balls = [];

function setup() {
  // standard setup function...
  createCanvas(500,500);
  background(0);
  noStroke();
}

function draw() {
  // erase the background every frame
  background(0);
  
  // if the mouse is held down, then we add a new ball to the array
  if (mouseIsPressed) {
    // we create a new ball at the mouse's position, and give it a random size between 10 and 50
    balls.push(new Ball(mouseX, mouseY, random(10,50)));
  }
  
  for(var i=0; i < balls.length; i++) {
    balls[i].show();
    balls[i].update();
    
    // now, check to see if we need to remove the ball from the array
    if(balls[i].size <= 0) {
      balls.splice(i, 1);
      i--; // this prevents the array from doing funky stuff
    }
  }
}

class Ball {
  
  constructor(x, y, size) {
    // keep the starting x, y position and size
    this.x = x;
    this.y = y;
    this.size = size;
    
    // make a random color value for the ball
    this.color = [int(random(255)),int(random(255)),int(random(255))];
    
    // set the x speed random, and set the y speed random-negative (so it looks like they're kind of "exploding" out of the cursor)
    this.xSpeed = random(-5,5);
    this.ySpeed = random(-4,-1);
  }
  
  show() {
    // this function just draws the ball each frame
    // in the correct position, with the correct color
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
  
  update() {
    // increment the position by the x and y speed
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    // use gravity to accelerate downward
    this.ySpeed += gravity;
    
    // if it bounces off the sides, reverse the x speed by multiplying it by -1
    // notice that I take into account the radius of the ball when I do this!
    if(this.x < this.size || this.x > (width - this.size)) {
      this.xSpeed *= -1;
    }
    
    // if it bounces off the bottom of the screen, bounce the y speed by -1
    // actually, I bounce it by -0.9 so that it bounces more realistically
    // instead of bouncing back to its original height, it gets lower each time
    if(this.y > (height - this.ySpeed)) {
      this.ySpeed *= -0.9;
    }
    
    // at the end of each frame, make the ball slightly smaller
    this.size -= 0.1;
  }
}