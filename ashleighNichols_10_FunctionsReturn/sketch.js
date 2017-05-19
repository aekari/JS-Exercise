/*
Code by Dawn C. Hayes 2017
Edited by Ashleigh Nichols May 2017
Demonstrates how to print a return into the console within P5
*/

function setup() {
  
  //printing this variable will return a value of 90 in the console. This function is is converting radians to degrees
  /*
  var angle = degrees(PI/2); //create a 
  print(angle);
  */
  
//You can print multiple variables to the console  
  var km = milesToKm(26.3); //naming a variable, then assigning an expression to it
 print(km); //asking the IDE to print the variable(km) based on the expression assigned to it
 var km2 = milesToKm(100);//a second variable
 print (km2);// requesting the IDE to print the variable(km2) based on the expression assigned to it
  
}//ends the setup function

function milesToKm(miles) {//begins the milesToKM function, with a parameter of miles
  var km = miles * 1.6;//defining the function by saying that the variable km is assigned to whatever miles times 1.6 is
  return km;//requesting that the IDE return what km is
}//ends the milesToLm function