/*
Code by Dawn C. Hayes March, 2017
Edited by Ashleigh Nichols May 2017
Example with multiple shapes across the canvas/window using object literal notation.
*/

var circle = { //defining the specifics of what I want to include in my circle within an object
    x: 200,
    y: 200,
    diam: 50,
    r: 255,
    g: 123,
    b: 25
  } //closing the circle variable

var rectangle = { //defining the specifics of what I want to include in my rectangle with assigned variable
    x: 100,
    y: 100,
    diam: 75,
    r: 15,
    g: 33,
    b: 225 //does not need a comma on the last argument. Signals that that's it for this object
  } //closing the circle variable

function setup() { //begins the setup function
  createCanvas(400, 400); //creates a canvas that is 400w 400h
} //closing the setup function

function draw() { //begins the draw function
  background(34, 123, 218); //the background will be blue
  noStroke(); // shapes won't have an outline
  fill(circle.r, circle.g, circle.b); //referring to the global circle variable's arguments
  ellipse(circle.x, circle.y, circle.diam, circle.diam); //objectname.argument
  fill(rectangle.r, rectangle.g, rectangle.b); //objectname.argument
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam); //objectname.argument
} //ends the draw function