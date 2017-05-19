/* 
By Dawn C. Hayes March 2017. Edited by Ashleigh Nichols
Example with multiple shapes across the canvas/window using object literal notation placed in tabs for organization.
*/


//everything is pretty standard here, besides the objects geing saved to separate .js files

function setup() { //begins the setup function
  createCanvas(400, 400); //cretes a 400w by 400h canvas
} //ends the setup function

function draw() { //begins the draw function
  background(34, 123, 218); //makes the background blue
  noStroke(); //removes the default outline setting from around shapes
  fill(circle.r, circle.g, circle.b); //this circle.r is referring to the object within the circle.js file
  ellipse(circle.x, circle.y, circle.diam, circle.diam); //creates an ellipse based on the circle object and it's parameters outlined in a separate JS file
  fill(rectangle.r, rectangle.g, rectangle.b); //this rectangle.r is referring to the object within the circle.js file
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam); //creates a square(rect) based on the object named
  //rectangle that is located within a separate js file. In order to see it you have to link the js file inside the head of the html file.
} //closes the draw function