const xPos = 400;
const yPos = 400;
const rot = 90;

function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
	colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
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

	translate(xPos+(xPos/2),yPos/2);
	rotate(rot);
	translate((-xPos)/2,(-yPos)/2); //does rotating flip the axes??

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

	rotate(-rot);
	translate(-xPos*2,yPos);
	translate(xPos/2,yPos/2);
	rotate(rot*3);
	translate(-xPos/2,-yPos/2);


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

	rotate(-(rot*3));
	translate(xPos,-yPos);
	translate(xPos/2,yPos/2);
	rotate(rot*2);
	translate(-xPos/2,-yPos/2);

	//square 4
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