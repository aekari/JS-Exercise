/*
Created by Ashleigh Nichols, May 2017. For statement portion of code borrowed and edited from Professor D. 
Demonstration of embedding functions inside of objects.
*/

var win = ["GREAT JOB!", "YOU DID IT!", "YOU'RE GOOD AT CLICKING THINGS!"]; //contains the array

var bgCol = 0; //background variable color

dots = { //object containing the x, y and color aspects of the dits
    x: 70,
    y: 500,
    x2: 300,
    y2: 150,
    x3: 500,
    y3: 500,
    col: 255
  } //closes object

//dot parameters
var dotsPara = { //contains the parameter coordinates of the dots (edge detection-ish)
    a1: 60,
    a2: 80,
    a3: 490,
    a4: 510,
    b1: 290,
    b2: 310,
    b3: 140,
    b4: 160,
    c1: 490,
    c2: 510
  } //closes object

//triangle fill
var tFill = { //variables for the triangle
  r: 255,
  g: 105,
  b: 180
}

function setup() { //begins setup function
  createCanvas(600, 600); //creates a canvas that is 400w, 400h
} //ends setup function

function draw() { //begins setup function
  background(bgCol);

  //text
  textAlign(LEFT); //aligns the text left
  rectMode(CENTER); //makes the rectangle mode centered rather than left
  textSize(50); //makes the text size 50
  noStroke(); //removes outline stroke
  fill(255); //makes the text color white
  textFont("Georgia"); //makes font Georgia typeface
  text("Connect the Dots!", 500, 50, 800, 55); //contains text variables

  //dots
  rectMode(CORNER); //makes the rect mode centered
  stroke(dots.col); //stroke color using dot syntax
  strokeWeight(30); //30 strokeweight outline
  point(dots.x, dots.y); //point parameters using dot syntax
  point(dots.x2, dots.y2); //""
  point(dots.x3, dots.y3); //""
  //if the mouse cursor is within these parameters
  if (mouseX > dotsPara.a1 && mouseX < dotsPara.a2 && mouseY > dotsPara.a3 && mouseY < dotsPara.a4 || mouseX > dotsPara.b1 && mouseX < dotsPara.b2 && mouseY > dotsPara.b3 && mouseY < dotsPara.b4 || mouseX > dotsPara.c1 && mouseX < dotsPara.c2 && mouseY > dotsPara.c1 && mouseY < dotsPara.c2) {
    if (mouseIsPressed) { //if the mouse is pressed,
      strokeWeight(10); //outline the shape w/ a strokeweight of 10
      fill(tFill.r, tFill.g, tFill.b); //fill parameters using dot syntax
      triangle(dots.x, dots.y, dots.x2, dots.y2, dots.x3, dots.y3); //triangle parameters using dot syntax
      for (i = 0; i < 3; i++) { //loops through the array
        textAlign(CENTER); //text alignment will be centered
        noStroke(); //removes stroke weight
        fill(0); //fills the text black
        textSize(12); //text is size 12
        text(win[i], i + 275, i * 100 + 200, 50, 100); //the array will be at these parameters
      } //closes the for loop
    } //closes the nested if (mouseIsPressed) function
  } //closes the if mouseX function
} // ends setup function