/*
Code Originally By: Professor D on March 2017. Retyped and commented by Ashleigh Nichols 5/2017
An example of arrays of Objects
*/

var stars = []; // declares an empty array
var moon;


function setup() { //begins the setup function
  createCanvas(600, 400); //creates a canvas that is 600w by 400h

  for (var i = 0; i < 400; i++) { //begins for loop that will iterate over the stars loop
    stars[i] = { //signals that the code that is coming next will define what stars is
        x1: random(0, width), //the x position can be anywhere between a random (x) point and the width of the canvas
        y1: random(0, height), // the y positioncan be anywhere between a random (y) point and the height of the canvas
        display: function() { //when beginning this loop, run the following bit of code:
            stroke(random(255)); //make the stroke color any random color and
            point(this.x1, this.y1); //make the points at any random (x) and random (y) point
          } //ends the display function
      } //ends the stars array loop
  } //ends for loop
  moon = { //begins the moon object
      x: 100, //x axis at 100
      y: 350, // y axis at 350
      diam: 100, //diameter is 100
      xspeed: .5, // it will move at .5 along the x axis and 
      yspeed: .5, //it will move at .5 along the y axis
    } //ends the moon object

  cloud = { //begins the cloud object
      x: 50, // at 50 on the x axis
      y: 150, //at 150 on the y axis
      diam: 75, //has a diameter of 75
      col: 255 // will be white
    } //ends the cloud object
} //ends the setup function

function draw() { //begins the draw function.
  background(0, 14, 35); //makes the canvas bacground a midnight blue color
  for (var i = 0; i < stars.length; i++) { //sets up a for loop to iterate through the stars array
    stars[i].display(); //displays each star
  } //ends the for loop
  noStroke(); //will remove stroke from the code that follows
  fill(255, 255, 134); //will make the fill a yellowy color
  ellipse(moon.x, moon.y, moon.diam, moon.diam); //calls upon the moon object dimentions declaired earlier in the setup function

  if (moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) { //sets up a loop with multiple arguments to create the effect of the moon moving across the sky based on the following conditions:
    moon.x = moon.x + moon.xspeed; //the moon will move positively along the x axis and
    moon.y = moon.y - moon.yspeed; // the moon will move negatively along the y axis, creating a diaganal movement
  } // ends the moon for conditional statement loop

  //the following cloud constructor function helps to replace verbose code
  noStroke(); //the clouds will not have a stroke around them
  fill(cloud.col); //calling the cloud.col variable assigned earlier in the code
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam); //default cloud dimentions assigned
  ellipse(cloud.x + 30, cloud.y - 15, cloud.diam, cloud.diam + 35); //modified clould dimentions to create new shapes w/o writing extra code
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam); //""
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam); //""
  ellipse(cloud.x + 30, cloud.y + 15, cloud.diam + 70, cloud.diam); //""
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam); //""

  /*redundant code-- same as other constructor function, but this code could be edited to make another cloud further to the right
 noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y - 15, cloud.diam, cloud.diam + 70);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam); 
*/
} //ends draw function