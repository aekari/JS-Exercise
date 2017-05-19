/*
Code by Dawn C. Hayes March, 2017
Edited by Ashleigh Nichols May 2017
Example that uses mousePressed() to demonstrate event-driven programming. The background shape's color changes when the mouse is pressed.
*/

//setting up global variables
var diam = 200; //assigning the diameter variable
var bgCol = 255; //assigning the bg color variable
var bgSwitch = 0; // variable assigning the default bg to black

function setup() { //begins setup function
  createCanvas(400, 400); //creates a canvas that is 400w && 400h
  background(bgCol); //at the start of the program, the background is white
  noStroke(); // "" shapes will have no stroke
  fill(255, 0, 0); //"" shapes will be pure red
  ellipse(width / 2, height / 2, diam, diam); //the ellipse center point will be at half the width and height of the canvas and 200 w && h 

} //ends setup function

function draw() { //begins drawing function
  //no code is placed here so the event won't be repeatable without a browser refresh
} //ends drawing function

function mousePressed() { // begins the mousePressed function
  background(bgSwitch); //makes the background black
  noStroke(); //removes the stroke from any shapes after this point
  fill(0, 0, 255); //any shapes that follow will be blue (until fill is changed again)
  ellipse(width / 2, height / 2, diam, diam); // creates another ellipse in the same position and that's the same dimetions as the first ellipse
} //ends mousePressed function