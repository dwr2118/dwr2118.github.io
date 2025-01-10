let prevMinute = -1; 

function setup() {
  // Create the canvas
  createCanvas(400, 400);
  
  frameRate(1); // change the frame rate to be updating one frame per second

  // Set angle mode to degrees
  angleMode(DEGREES);

  // Set text color, size, and alignment
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);

  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);
  
}

function draw() {
  // Clear the background
  background(255);
   
  let hr = hour(); 
  let min = minute();
  let sec = second();
  let radius = 150; 
  
  // Check if the minute has changed 
  if (prevMinute != min){
    console.log(minute());
    prevMinute = min; 
  }

  // Move origin to the middle of screen 
  translate(width/2, height/2);
  
  // draw the outer circle 
  noFill(); 
  stroke('black');
  strokeWeight(2); // line weight of objects 
  circle(0, 0, radius*2);
  
  strokeWeight(1);
  // rotate our shapes every second 
  rotate(((sec+1)/60)*360);
  
  // draw the clock hand 
  let handWidth = ((hr+1)/24)*radius;
  stroke('grey');
  fill('grey');
  circle(0, 0, handWidth*2);
  rect(0, 0, handWidth, 2);
  
  // fill the hand given how minutes are in the hour 
  stroke('red');
  fill('red');
  rect(0,0, (((min+1)/60)*handWidth)-5, 3);
  
  triangle(((min+1)/60)*handWidth,2, (((min+1)/60)*handWidth)-5,7, (((min+1)/60)*handWidth)-5, -5);
  
}