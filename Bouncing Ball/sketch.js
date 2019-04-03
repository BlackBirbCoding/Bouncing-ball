/************************************************************|
| Created by BlackBirb Coding (using p5.js library)          |
|                                                            |
| [https://www.youtube.com/channel/UCCG5RqlSv7zOssHUPjQhcpA] |
|                                                            |
|Youtube video:|
|                                                            |
|************************************************************/

// Location and radius of ball.
let x;
let y;
let r;

// x and y speeds of ball.
let xspeed;
let yspeed;

function setup() {
  // Initialize the canvas.
  createCanvas(450, 450);
  // Initialize location and radius of ball.
  x = random(width - r);
  y = random(sheight - r);
  r = 10;
  // Random x and y speeds.
  xspeed = random(-3, 3);
  yspeed = random(-3, 3);
}

function draw() {
  // Dark grey bakground.
  background(51);
  
  // Drawing the ball.
  fill(100, 0, 200);
  stroke(255);
  strokeWeight(2);
  ellipse(x, y, r*2);
  
  // Check if the ball touches any edge and reverse speed.
  if (x < r || x > width - r) {
  	xspeed *= -1;
  }

  if (y < r || y > height - r) {
  	yspeed *= -1;
  }
  
  // Increment x and y by the respective speeds.
  x += xspeed;
  y += yspeed;
}