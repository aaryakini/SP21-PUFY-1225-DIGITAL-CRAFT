const fr = 80;
let j = 30;
let k = 30;
let red = 0;
let blue = 240;
let counter = 0;


function setup() {
	frameRate(fr);
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
	colorMode(RGB,255,255,255,1);
	circles();
}

function circles(){
background('white');
	let red = 240;
	let blue = 0;
	let counter = 0
	for(let i = 1200; i >= 30; i -= 30){
		counter++;
		fill(red,0,blue);
		red = red - 6;
		blue = blue + 6;
		noStroke();
		//stroke('white');
		ellipse(400,400,i,i);
	}
}

function mousePressed(){
	noLoop();
}

function mouseReleased(){
	loop();
}

function keyPressed(){
	if (keyCode === ENTER) {
		noLoop();
	}
}

function draw() {
	noFill();
		if (j <= 1200){
			if (counter == 1){
				stroke('black');
				strokeWeight(2);
			}
			else if (counter == 0){
				stroke('white');
				strokeWeight(2);
			}
			ellipse(400,400,j,j);
			j = j + 30;
			if(j > 1200){
				k = 30;
				if (counter == 0)
					counter++;
				else if (counter == 1)
					counter--;
			}
		}

	else{
		stroke(red,0,blue);
		strokeWeight(2);
		ellipse(400,400,k,k);
		k = k + 30;
		red = red + 6;
		blue = blue - 6;
		if(k > 1200){
			j = 30;
			red = 0;
			blue = 240;
		}
	}
}