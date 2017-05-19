/*
Code by Dawn C. Hayes, 2017
Edited by Ashleigh Nichols May 2017
Demonstrates using a function inside of an object
*/

//I'm defining the variables and assigning its parameters from line 8-13
var float1 = { //sets up the float1 variable
    x1: 50,
    y1: 0,
    x2: 150,
    y2: 90,
    speed: 2,
    display: function() { //creating a display function with the following properties:
      stroke(random(255), random(255), random(255)); //it will have a randomly colored outline
      strokeWeight(2); //outline weight will have a value of 2
      line(this.x1, this.y1, this.x2, this.y2); //'this' is a reserved keyword used to reference a local variable inside of a defined object   
    }, //closes the display function but also signals that another function will come after
    move: function() { //creates the move fuction
        this.x1 = this.x1 + this.speed; //pretty much means the same thing as x1 = x1 +speed, but specifically within this variable. This is called dot syntax
        this.y1 = this.y1 + this.speed; //""
        this.y2 = this.y2 + this.speed; //""
      } //closes the move function
  } //ends float1 variable setup
  //I'm defining the float2 variables and assigning its parameters from lines 26-31
var float2 = {
    x1: 400,
    y1: 200,
    x2: 500,
    y2: 300,
    speed: 2,
    display: function() { //begins the display function
      stroke(random(255), random(255), random(255)); //shape will have a randomly colored outline
      strokeWeight(2); //shape will have an outline value of 2
      line(this.x1, this.y1, this.x2, this.y2); //using dot syntax to call the x1,y1,x2, and y2 values within float2
    }, //ends the display function, signals there is another function within the object float 2
    move: function() { //creates the move function
        this.x1 = this.x1 + this.speed; //using dot syntax to call the x1,y1,x2, and y2 values within the move(); function
        this.y1 = this.y1 + this.speed;
        this.y2 = this.y2 + this.speed;
      } //closes the move function
  } //end of defining the float 2 object and the functions inside

function setup() { //begins the setup function
  createCanvas(600, 400); //creates a canvas that is 600w, 400h
} //ends the setup function

function draw() { //begins the draw function
  background(0); //the background is black
  float1.move(); //calling the move function within the float1 object
  float1.display(); //calling the display function with the float1 object
  float2.move(); //calling the move function within the float2 object
  float2.display(); // calling the display function within the float2 object
} //ends the draw function