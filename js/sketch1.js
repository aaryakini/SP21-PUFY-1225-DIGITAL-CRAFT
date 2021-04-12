function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
}

function draw() {
	background('#e76f51');
	noStroke();
	angleMode(DEGREES);
	fill('#264653');
	ellipse(400,400,700,700);
	
	/*
	//one earring
	//ochre background
	fill('#C29000');
	ellipse(400,400,215,430);

	//teal center
	fill('#55D3DF');
	ellipse(400,420,130,390);
	fill('#3BC0CD');
	ellipse(400,420,100,390);
	fill('#22ACB9');
	ellipse(400,420,70,390);
	fill('#009CAB');
	ellipse(400,420,40,390);

	//white stripes
	fill('#FFFBF8');
	//1
	rect(334,276,132,30);
	ellipse(334,291,30,30);
	ellipse(466,291,30,30);
	//2
	rect(317.5,406,165,30);
	ellipse(317.5,421,30,30);
	ellipse(482.5,421,30,30);
	//3
	rect(355,542,90,30);
	ellipse(355,557,30,30);
	ellipse(445,557,30,30);


	//earring hole
	fill('255');
	ellipse(400,217,24,24);

	//earring loop
	fill('silver');
	ellipse(400,189.5,10,50);
	ellipse(400,155,25,34);
	rect(392.5,115,15,26);
	stroke('silver');
	strokeWeight(6);
	noFill();
	line(400,115,400,90); //https://p5js.org/reference/#/p5/line
	arc(420,90,40,40,180,0); //https://p5js.org/reference/#/p5/arc
	line(440,90,440,135);
	line(440,135,445,150);*/

	//right

	//ochre background
	fill('#C29000');
	ellipse(550,400,215,430);

	//teal center
	fill('#55D3DF');
	ellipse(550,420,130,390);
	fill('#3BC0CD');
	ellipse(550,420,100,390);
	fill('#22ACB9');
	ellipse(550,420,70,390);
	fill('#009CAB');
	ellipse(550,420,40,390);

	//white stripes
	fill('#FFFBF8');
	//1
	rect(484,276,132,30);
	ellipse(484,291,30,30);
	ellipse(616,291,30,30);
	//2
	rect(467.5,406,165,30);
	ellipse(467.5,421,30,30);
	ellipse(632.5,421,30,30);
	//3
	rect(505,542,90,30);
	ellipse(505,557,30,30);
	ellipse(595,557,30,30);


	//earring hole
	fill('#264653');
	ellipse(550,217,24,24);

	//earring loop
	fill('silver');
	ellipse(550,189.5,10,50);
	ellipse(550,155,25,34);
	rect(542.5,115,15,26);
	stroke('silver');
	strokeWeight(6);
	noFill();
	line(550,115,550,90);
	arc(570,90,40,40,180,0);
	line(590,90,590,135);
	line(590,135,595,150);

	//left

	//ochre background
	noStroke();
	fill('#C29000');
	ellipse(250,400,215,430);

	//teal center
	fill('#55D3DF');
	ellipse(250,420,130,390);
	fill('#3BC0CD');
	ellipse(250,420,100,390);
	fill('#22ACB9');
	ellipse(250,420,70,390);
	fill('#009CAB');
	ellipse(250,420,40,390);

	//white stripes
	fill('#FFFBF8');
	//1
	rect(184,276,132,30);
	ellipse(184,291,30,30);
	ellipse(316,291,30,30);
	//2
	rect(167.5,406,165,30);
	ellipse(167.5,421,30,30);
	ellipse(332.5,421,30,30);
	//3
	rect(205,542,90,30);
	ellipse(205,557,30,30);
	ellipse(295,557,30,30);


	//earring hole
	fill('#264653');
	ellipse(250,217,24,24);

	//earring loop
	fill('silver');
	ellipse(250,189.5,10,50);
	ellipse(250,155,25,34);
	rect(242.5,115,15,26);
	stroke('silver');
	strokeWeight(6);
	noFill();
	line(250,115,250,90);
	arc(230,90,40,40,180,0);
	line(210,90,210,135);
	line(210,135,205,150);
}