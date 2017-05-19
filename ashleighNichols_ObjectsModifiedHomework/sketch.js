/*
By Ashleigh N. May 2017
Demonstration of using objects within code. Please also see external.js files.
*/

var leftEye = {
  x: 260,
  y: 175,
  strokeW: 20
}

var rightEye = {
  x: 340,
  y: 175,
  strokeW: 20
}

var buttons = {
  x: 300,
  y: 300,
  x2: 300,
  y2: 350
}

var nose = {
  x: 275,
  y: 200,
  x2: 300,
  y2: 175,
  x3: 300,
  y3: 200,
  strokeW: 10
}

var leftArm = {
  x: 100,
  y: 450,
  x2: 210,
  y2: 240,
  strokeW: 10
}

var rightArm = {
  x: 500,
  y: 450,
  x2: 390,
  y2: 240,
  strokeW: 10
}



function setup() { //this line of code begins the setup function; 
  createCanvas(600, 625); //this makes the canvas 600 px wide and 625 px tall
} //This bracket closes the setup function


/*---Please note that left and right directions in the comments are in relation to the viewer going forward--*/

function draw() { //this line begins the draw function;
  background('0'); //this makes the background white

  strokeWeight(10); //this makes all shapes have a stroke weight of 10px thick

  //body has object globally defined within an external .js file
  ellipse(bigCirc.x, bigCirc.y, bigCirc.diam, bigCirc.diam); //bottom-most circle in snowman body
  ellipse(midCirc.x, midCirc.y, midCirc.diam, midCirc.diam); //center circle in snowman body
  ellipse(lilCirc.x, lilCirc.y, lilCirc.diam, lilCirc.diam); //top circle in snowman body

  //hat objects are within an external .js file
  line(hatBrim.x, hatBrim.y, hatBrim.x2, hatBrim.y2); //bottom brim of snowman hat
  rect(hatTop.x, hatTop.y, hatTop.w, hatTop.h); //top portion of snowman hat

  //eyes are at the top above the setup function.
  strokeWeight(leftEye.strokeW); //makes the stroke weight for the two eyes 20px
  point(leftEye.x, leftEye.y); //left eye
  point(rightEye.x, rightEye.y); //right eye

  //buttons  
  point(buttons.x, buttons.y); //top button on snowman body
  point(buttons.x2, buttons.y2); // bottom button on snowman body

  //nose and arms
  strokeWeight(nose.strokeW); //makes the stroke weight for his nose and arms 10px
  triangle(nose.x, nose.y, nose.x2, nose.y2, nose.x3, nose.y3); //this is his nose!
  line(leftArm.x, leftArm.y, leftArm.x2, leftArm.y2); //left arm
  line(rightArm.x, rightArm.y, rightArm.x2, rightArm.y2); //right arm

} //this line ends the draw function