/*
Code by Dawn C. Hayes March, 2017
Edited by Ashleigh Nichols May 2017
Example with shapes across the canvas/window using object literal notation.
*/

var circle = { //creates the circle object with some parameters assigned inside the curly brackets
    x: 200,
    y: 200,
    diam: 50,
    r: 255,
    g: 123,
    b: 25
  } //signals the end of the circle shape

function setup() { //begins the setup function
  createCanvas(400, 400); //creates a canvas that is 400w 400h
} //ends the setup function


function draw() { //begins the draw function
  background(34, 123, 218); //creates a blue color for the background
  noStroke(); //removes the outline for a shape
  fill(circle.r, circle.g, circle.b); // calling the shape circle and it's parameters
  ellipse(circle.x, circle.y, circle.diam, circle.diam); //variablename.argument (dot syntax)

} //ends the draw function