const xPos = 400;
const yPos = 400;
const rot = 90;

function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
	colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
	background('#FFFFFF');
	noStroke();
	angleMode(DEGREES);

	//square 1
	fill(29,29,27);
	rect(0,0,400,400);
	//yellow
	fill(230,150,50);
	ellipse(105,105,210,210);
	//green
	fill(158,191,67,0.8);
	rect(17,276,106,106);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(324,66,78,78);
	noStroke();

	//magenta
	fill(149,42,90,0.8);
	rect(117,83,256,56);

	//white rect
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	rect(45,45,103,301);
	noStroke();

	//orange
	fill(216,89,48);
	ellipse(226,276,207,207);
	//yellow
	fill(250,233,80,0.8);
	rect(270,172,107,43);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(332,334,80,80);
	noStroke();

	translate(xPos,0);

	//square 2
	fill(29,29,27);
	rect(0,0,400,400);
	//yellow
	fill(230,150,50);
	ellipse(105,105,210,210);
	//green
	fill(158,191,67,0.8);
	rect(17,276,106,106);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(324,66,78,78);
	noStroke();

	//magenta
	fill(149,42,90,0.8);
	rect(117,83,256,56);

	//white rect
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	rect(45,45,103,301);
	noStroke();

	//orange
	fill(216,89,48);
	ellipse(226,276,207,207);
	//yellow
	fill(250,233,80,0.8);
	rect(270,172,107,43);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(332,334,80,80);
	noStroke();

	translate(0,yPos);

	//square 3
	fill(29,29,27);
	rect(0,0,400,400);
	//yellow
	fill(230,150,50);
	ellipse(105,105,210,210);
	//green
	fill(158,191,67,0.8);
	rect(17,276,106,106);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(324,66,78,78);
	noStroke();

	//magenta
	fill(149,42,90,0.8);
	rect(117,83,256,56);

	//white rect
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	rect(45,45,103,301);
	noStroke();

	//orange
	fill(216,89,48);
	ellipse(226,276,207,207);
	//yellow
	fill(250,233,80,0.8);
	rect(270,172,107,43);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(332,334,80,80);
	noStroke();

	translate(-xPos,0);

	//square 3
	fill(29,29,27);
	rect(0,0,400,400);
	//yellow
	fill(230,150,50);
	ellipse(105,105,210,210);
	//green
	fill(158,191,67,0.8);
	rect(17,276,106,106);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(324,66,78,78);
	noStroke();

	//magenta
	fill(149,42,90,0.8);
	rect(117,83,256,56);

	//white rect
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	rect(45,45,103,301);
	noStroke();

	//orange
	fill(216,89,48);
	ellipse(226,276,207,207);
	//yellow
	fill(250,233,80,0.8);
	rect(270,172,107,43);

	//white ellipse
	stroke(255,255,255);
	strokeWeight(10);
	noFill();
	ellipse(332,334,80,80);
	noStroke();

}