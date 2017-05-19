/*
Created by Ashleigh Nichols, May 2017
Demonstration of embedding functions inside of objects.
*/

var circ = { //sets up the circ object
  x1: 300,
  y1: 300,
  diam: 300,
  rate1: .9,
  display: function() {
    fill(random(255), random(255), random(255));
    stroke(255); //makes the outline white
    strokeWeight(4); //outline 12px
    ellipse(this.x1, this.y1, this.diam, this.diam);
  },
  shrink: function() { //embedding a function named gr
    this.diam = this.diam * this.rate1;
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  circ.display();
  circ.shrink();
}