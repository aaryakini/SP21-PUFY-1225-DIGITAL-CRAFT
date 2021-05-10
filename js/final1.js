let fr = 60;
let xPos = 0;
let yPos = 0;
let rad = 0;
let counter = 0;
let f = 0;

function setup() {
  frameRate(fr);
  let canvas = createCanvas(800,800);
  canvas.center('horizontal');
  colorMode(RGB,255,255,255,1);
  noStroke();
}

function draw(){
  if(counter == 0){
    f = random(0,4);
    xPos = provideX();
    rad = provideRad();
  }
    console.log("f = " + f);
    console.log("frameCount = " + frameCount);
    console.log("counter = " + counter);
    console.log("xPos = " + xPos);
    console.log("yPos = " + yPos);
    if(f < 1){
      fill(64,145,109); //green
    }
    else if (f <= 2){
      fill(244,162,97); //orange
    }
    else if (f <= 3){
      fill(38,70,83); //blue
    }
    else if (f > 3){
      fill(230,69,69); //red
    }
    ellipse(xPos,yPos,rad,rad);
    yPos = yPos + 5;
    counter++;

  if (yPos >= height*1.1){  //resets the drip when it goes beyond the frame
   counter = 0;
    yPos = 0;
  }
 
}

function provideX(){    //provides a new initial x-value to start a drip from
  let x = random(0,800);
  return x;
}


function provideRad(){    //provides a new initial radius for a drip
  let rad = random(10,150);
  return rad;
}

function keyPressed(){
	if (keyCode === ENTER){
		noLoop();
	}
	else if (keyCode === 32){
		loop();
	}
}

function mousePressed(){
	saveCanvas(canvas,'myDripPattern','png');
}