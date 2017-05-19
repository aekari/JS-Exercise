/*
Code by Dawn C. Hayes
Edited by Ashleigh Nichols May 2017
Demonstrates a boolean data type when the mouse is pressed
*/

function setup() { //begins the setup function
  createCanvas(600, 400); //creates a canas that is 600w 400h
} //ends the setup function

function draw() { //begins the draw function
  background(0); // background will be black
  stroke(255); //stroke will be white
  strokeWeight(4); //stroke weight (outline) will be 4
  noFill(); //turns off the default fill setting

  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) { //if the mouse postion is anywhere within this square boundary outlined on the screen and...
    if (mouseIsPressed) { // if the mouse is pressed,
      background(0, 255, 0); //make the background lime green and
    } //closes the nested if loop
    fill(255, 0, 200); //make the rectangle pink
  } // closes the un-nested if loop
  rect(300, 200, 100, 100); //and make a rectangle that these dimentions and locations on the canvas
} //ends the draw function