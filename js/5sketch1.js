const fr = 2;

function setup() {
	frameRate(fr);
	let canvas = createCanvas(1500,800);
	canvas.center('horizontal');
	colorMode(RGB,255,255,255,1);
	noStroke();
}

//iteration one
/*function draw() {
  for (let i = 20; i < width; i += 60) {
    for (let j = 0; j < height; j += 20) {
      rFill = random(0, 360);
      fill(rFill, 100, 100);
      rect(i, j, 30, 10);
    }
  }
}*/

//iteration two
/*function draw(){
  
	background('white');

	if (keyIsPressed === false){
		for (let i = 0; i < height; i += 60) {
			let xDist = -20;
			let gap = 20;
			while (xDist < width){
				let xLen = random(30,200);
				if (i <= height / 3)
				{
					fill(randomRed());
				}
				else if (i <= (height/3)*2)
				{
					fill(randomGreen());
				}
				else if (i <= height)
				{
					fill(randomBlue());
				}
				rect(xDist,i,xLen,30,50)
				xDist = xDist + xLen + gap;
			}
		}
	}

	else{
		clear();
		background(0,0,0);
		fill(255,255,255);
		rect(675,325,60,150);
		rect(765,325,60,150);
	} 
}*/

function draw(){
  
	background('orange');

	if (keyIsPressed === false){
		for (let i = 0; i < height; i += 60) {
			let xDist = -20;
			let gap = 20;
			while (xDist < width){
				let xLen = random(30,200);
				fill(randomRGBA());
				rect(xDist,i,xLen,30,50)
				xDist = xDist + xLen + gap;
			}
		}
	}

	else{
		clear();
		background(0,0,0);
		fill(255,255,255);
		rect(675,325,60,150);
		rect(765,325,60,150);
	} 
}

function randomRGBA(){
	let r = random(120,255);
	let g = random(50,100);
	let b = random(100,255);
	let a = random(0.7,1);

	return[r,g,b,a];
}

function mousePressed(){
	noLoop();
}

function mouseReleased(){
	loop();
}

//testing things below

/*function randomRed(){
	let r = random(100,255);
	let g = random(0,0);
	let b = random(0,100);
	let a = random(0.5,1);

	return[r,g,b,a];
}

function randomGreen(){
	let r = random(0,0);
	let g = random(100,220);
	let b = random(50,200);
	let a = random(0.5,1);

	return[r,g,b,a];
}
function randomBlue(){
	let r = random(0,100);
	let g = random(0,100);
	let b = random(100,255);
	let a = random(0.5,1);

	return[r,g,b,a];
}*/
