/*
Code by Dawn C. Hayes March, 2017
Edited by Ashleigh Nichols May 2017
Defining functions. Points are drawn across x axis of the canvas. Functions to move and display are 
created and called.
*/

//assigning multiple variables at different x,y, points and assigned an x axis speed
var blip = { //assigning a variable into a function
    x: 0, //x axis point
    y: 100, //y axis point
    xspeed: 4, //x axis speed value
  } //closes the function

var blip2 = {
  x: 0,
  y: 200, // the y position is the same as blip3 so that they intersect.
  xspeed: 4,
}

var blip3 = {
  x: 600,
  y: 200,
  xspeed: 4,
}

var blip4 = {
  x: 600,
  y: 300,
  xspeed: 4,
}

function setup() { //begins setup function
  createCanvas(600, 400); //creates canvas that is 600w 400h
  background(0); //black background
} //ends the setup function

function draw() { //begins draw function
  move(); // calling the move function.
  display(); // calling the display function.
} //ends draw function

//defining the move function
function move() { //begins move function
  blip.x = blip.x + blip.xspeed; //the blip will move across the x axis positively
  blip2.x = blip2.x + blip2.xspeed; //the blip will move across the x axis positively
  blip3.x = blip3.x - blip3.xspeed; //the blip will move across the x axis negatively
  blip4.x = blip4.x - blip4.xspeed; //the blip will move across the x axis negatively
} //ends move function

// defining the display function
function display() { //begins display function
  strokeWeight(2); //2 pt outline
  stroke(255, 0, 255); //sets the color to a purple hue.

  //the starting points
  point(blip.x, blip.y); //by writing blip.x, i'm calling the blip's x value to create the x axis argument to create a point
  point(blip2.x, blip2.y);
  point(blip3.x, blip3.y);
  point(blip4.x, blip4.y);
} //ends display function