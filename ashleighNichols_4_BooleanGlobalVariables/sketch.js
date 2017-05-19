/*
Code by Dawn C. Hayes
Edited by Ashleigh Nichols May 2017
Demonstrates how to use a logical boolean operators variable

https://vimeo.com/channels/learningp5js/138935677
*/

var on = false; // this is a global boolean variable

function setup() { //begins setup function
  createCanvas(600, 400); //creates a canvas that is 600w by 400h
} //ends setup function

function draw() { //begins draw function
  if (on) { //if the condition is ! true,
    background(0, 255, 0); //make the background green
  } else { //otherwise,
    background(0); //make the background black
  } //closes the else conditinal

  stroke(255); //stroke will be white
  strokeWeight(4); //make the strokeWeight 4
  noFill(); //removes fill from shapes

  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { //if the mouse pointer is within these boundaries on the canvas,
    fill(255, 0, 200); //fill a shape pink;
  } //closes the if conditional statement
  rectMode(CENTER); //changes the default rect shape mode to center
  rect(300, 200, 100, 100); // creates a rect. with these dimentions
} //closes the draw function

function mousePressed() { //starts mousePressed function
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { //if the mouse pointer is within this area
    on = !on; //pressing the mouse within these dimetions will start/stop the next bit of code from happening. Putting this if statement here is ok because it will loop aroud to the beginning of the draw function.

  } //closes the if conditional statment
} //ends draw function