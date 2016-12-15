//please use earphones//

var xPos = 15;
var yPos = 15;
var speedX = 0;
var speedY = 0;

var rFuschia = 255;
var gFuschia = 0;
var bFuschia = 128;

var rRoyal = 65;
var gRoyal = 105;
var bRoyal = 225;

var rCurrent = rFuschia;
var gCurrent = gFuschia;
var bCurrent = bFuschia;

 var rInc = (rRoyal - rFuschia)/100;
 var gInc = (gRoyal - gFuschia)/100;
 var bInc = (bRoyal - bFuschia)/100;


var img;
function preload() {
  img = loadImage("flowers.jpg");
}
function setup() {
  image(img, 0, 0);
}
function setup() {
  song = loadSound('bumblebee.mp3');
  createCanvas (800, 500);
}

  function mousePressed() {
  if ( song.isPlaying() ) { 
    song.stop();
    background (img);
  } else {
  song.play();
  background(img);
}
}

function draw() {
  background(img);
  
   for(var i=0; i <5 ; i++){
    if(i==0 || i==2 || i==4){
    fill (255, 255, 0);
  if (i==4){
    ellipse (xPos + (5*i), yPos, 15, 15);//face
    fill(0);
    ellipse (xPos + (5*i) + 2, yPos - 2, 5, 5);//pupil
    ellipse (xPos + (5*i) - 2, yPos - 2, 5, 5);//pupil
    fill (255);
    ellipse (xPos + (5*i) + 2, yPos - 2, 2, 2);//eye
    ellipse (xPos + (5*i) - 2, yPos - 2, 2, 2);//eye
    fill(0)
    rect (xPos + (5*i) - 2, yPos + 2, 5, 2);//mouth
    
    ellipse(xPos + (5*i) + 2, yPos - 9, 3, 6);//antenna
    ellipse(xPos + (5*i) - 2, yPos - 9, 3, 6);//antenna
    
  }else if (i===0){
    ellipse (xPos + (5*i), yPos, 5, 5);
  }else{
    ellipse (xPos + (5*i), yPos, 10, 10);
    fill(200);
    ellipse (xPos + (5*i) - 2, yPos - 9, 6, 8);//wings
    ellipse (xPos + (5*i) + 2, yPos - 9, 6, 8);//wings
}
  }else{
    fill(0);
    if (i==4){
   ellipse (xPos + (5*i), yPos, 12, 12);
  }else if (i===0){
    ellipse (xPos + (5*i), yPos, 5, 5);
  }else{
    ellipse (xPos + (5*i), yPos, 10, 10);
  }
}
}
  
  beeMove();
  beeBall();
  
  //bee



  
  fill(189, 183, 107);
  strokeWeight(9);
  beginShape();
  vertex(400, 270);
  quadraticVertex(400, 350, 425, 400);
  endShape();//stem

  noStroke()
  noFill()
  
  fill (200, 162, 200);
  angleMode(DEGREES); // Change the mode to DEGREES
  var a = atan2(mouseY-height/2, mouseX-width/2);
  translate(width/2, height/2);
  push();
  rotate(a);
  
fill(rCurrent, gCurrent, bCurrent);
 rCurrent += rInc;
 gCurrent += gInc;
 bCurrent += bInc;

if (rCurrent > rFuschia || rCurrent < rRoyal){
  rInc = -rInc;
}
if (gCurrent > gRoyal || gCurrent < gFuschia){
  gInc = -gInc;
}
if (bCurrent > bRoyal || bCurrent < bFuschia){
  bInc = -bInc;
}
println(rInc);
  
  ellipse(0, 0, 40, 40); // Larger circle is rotating in degrees
  
  
  
  pop();//element of motion
  angleMode(RADIANS); // Change the mode to RADIANS
  rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
   rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
   rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
   rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
  rotate(a); // var a stays the same
   ellipse(-70, 0, 100, 30);
   rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
   rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
   rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
  rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);
   rotate(a); // var a stays the same
  ellipse(-70, 0, 100, 30);

}

function beeMove(){
  
  speedX +=((mouseX -xPos)*0.001) + random (-0.05, 0.05);
  /*the purpose of the bee is that it follows the mouse, 
  therefore adding an element of user interactivity, 
  an element of motion and never-ending visual development*/
  xPos += speedX;
  
  speedY +=((mouseY -yPos)*0.001) + random (-0.05, 0.05);
  yPos += speedY;
}

function beeBall(){
  
  if (xPos >= windowWidth - 5 || xPos <= 5){
  speedX = -speedX;
  }
  
  if (yPos >= windowHeight - 5 || yPos <= 5){
  speedY = -speedY;
  
  }
  
}
