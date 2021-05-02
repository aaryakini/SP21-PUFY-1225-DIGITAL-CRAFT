let fr = 2;
let mainCounter = 0;
let circles = [];
let a = "";

function setup() {
	frameRate(fr);
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
	colorMode(HSB, 360, 100, 100);
	noStroke();
	let d = 0;
	while (d == 0){
		a = window.prompt("Black or Gradient background?\nEnter B for black\nEnter G for gradient");
		if (a == "B" || a =="b"){
			d = 1;
			background(0,0,13);
		}
		else if (a == "G" || a =="g"){
			d = 1;
			drawGradient();
		}
	}
}

function draw(){
	if(mainCounter < 6){
		let xPos = random(10,800);
		let yPos = random(10,800);
		let counter = 0
		drawShape(xPos,yPos);
		mainCounter++;
		//console.log("mainCounter = " + mainCounter);
	}
	else{
		clear();
		if (a == "B" || a =="b")
			background(0,0,13);
		else if (a == "G" || a == "g")
			drawGradient();
		mainCounter = 0;
	}  
}

function drawShape(x,y){
	let counter = 0;
	let s = random(1,10);
	let scale = random(0,700);
	let j = (height-scale)/1.1;
	let diff = 40;
	for(let i = (width-scale)/1.4; i > 10/1.2; i-=diff){
		stroke('white');
		strokeWeight(s);
		noFill();
		circles[counter] = ellipse(x,y,i,j);
		j = j - diff;
		counter++;
	}
}

function drawGradient(){
	let h = random(130, 360);
	let r = 0;
	for (let r = width*1.5; r > 0; r-=10){
		noStroke();
		fill(h, 50, 100);
		ellipse(400, 400, r, r);
		h = (h + 1) % 360;
	}
}

function keyPressed(){
	if (keyCode === ENTER){
		noLoop();
		saveCanvas(canvas,'myEllipsePattern','png');
	}
	else if (keyCode === 32){
		loop();
	}
}