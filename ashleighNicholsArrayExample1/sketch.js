/*
Original code by Professor D March 2017, retyped by Ashleigh Nichols on May 2017
Demonstrates color array
*/

var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome To The New", "I Can Only Imagine"];


function setup() {
  createCanvas(1200, 800); //setting the canvas with and height (parameters?)
  background(255, 0, 0); // the background will be 100 percent red

  for (i = 0; i < 8; i++) { // setting i to 0. If i is smaller than 8, add 1.
    console.log(playlist[i]);
    stroke(255); //makes the stroke white
    fill(255); // makes the fill white
    textSize(38); //makes the text size set to 38
    text(playlist[i], i * 100 + 50, i * 100 + 50); //the string, x axis, y axis
  } //closes the for loop
} // closes the setup function

function draw() {

}