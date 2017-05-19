/*
Code by Dawn C. Hayes March, 2017
Edited by Ashleigh Nichols May 2017
Demonstrates defining functions. Points are drawn across the canvas. Functions to move, bounce and display are 
created and called.
*/

//creating a variable that has assigned values for the direction and speed of an object
var blip = { //contains blip var assignments
    x: 300, //x axis value
    y: 200, //y axis value
    xspeed: 4, //x speed value
    yspeed: -3, //y speed value
  } //ends blip variable assignments

function setup() { //begins the setup function
  createCanvas(600, 400); //creates a canvas that is 600w 400h
  background(0); //background will be black
} //ends the setup function

function draw() { //begins the draw function
  move(); //calls the defined move function
  bounce(); //"" bounce function
  display(); //"" display function
} //ends draw function

//this is where we define the bounce function in the program
function bounce() { //begins the bounce function
  if (blip.x > width || blip.x < 0) { // if the blip variable's x axis is heading outside of these bounds,
    blip.xspeed = blip.xspeed * -1; // reverse the x axis direction
    background(random(255), random(255), random(255)); //and change the color randomly
  } //ends the if conditional statement that controls the x axis movements

  if (blip.y > height || blip.y < 0) { //if the blip variable is heading outside of these bounds,
    blip.yspeed = blip.yspeed * -1; //reverse the y axis direction and
    background(random(255), random(255), random(255)); // randomly change the background colors
  } //ends the if con. statement that controls the y axis movements
} //ends the bounce function

function move() { // defines the move function
  blip.x = blip.x + blip.xspeed; //this will have the x axis point moving at the variable's defined speed
  blip.y = blip.y + blip.yspeed; //this will have the y axis point ""
} //closes the move function

//this part displays the dots until they reverse direction, then restarts
function display() { //begins the display function
  strokeWeight(2); //has a stroke weight of 2 
  stroke(255); //points will be white
  point(blip.x, blip.y);
} //ends the display function