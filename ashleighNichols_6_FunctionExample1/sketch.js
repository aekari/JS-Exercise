/*
Code by Dawn C. Hayes March, 2017
Edited by Ashleigh Nichols May 2017
Demonstrates definition and use of a function with parameters and arguments. 
*/

function setup() { //begins setup function
  createCanvas(600, 400); //creates a canvas that is 600w by 400h
} //ends setup function

function draw() { //begins draw function
  background(0); //creates a black background
  moon(445, 200, 150); //445x,200y, 150 w && h

  //defining the star fuction. Points/arguments at these x and y points in parenthesis
  star(370, 25);
  star(50, 175);
  star(115, 35);
  star(25, 44);
  star(100, 17);
  star(215, 235);
  star(418, 293);
  star(525, 370);
  star(175, 350);
  star(235, 115);
  star(444, 325);
  star(317, 200);
  star(535, 315);
  star(293, 218);
} //ends draw function

function moon(xloc, yloc, diam) { //begins moon function. Parameters are set to be procesed as an ellipse
  noStroke(); //default stroke setting turned off
  fill(255, 255, 153); //fill will be a pale yellow color
  ellipse(xloc, yloc, diam); //pre-defined x,y axis, diameter (within draw function)
} //ends moon function

function star(xloc, yloc) { //begins star function
  fill(255); //fill will be white
  ellipse(xloc, yloc, 5); //the ellipse will refer to each star's x && y points, and have a diameter of 5
} //ends star function