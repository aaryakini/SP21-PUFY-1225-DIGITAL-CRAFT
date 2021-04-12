function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
}

function draw() {
	background('grey');
	noStroke();
	//fill('#55a630');
	//rect(100,100,600,600);
	angleMode(DEGREES);

	//right ear
	fill('#FFFFFF');
	ellipse(550,450,300,300);

	//smaller circle
	stroke('black');
	strokeWeight(3);
	ellipse(550,450,245,245);

	//earring hole
	noStroke();
	fill('#264653');
	ellipse(550,315,12,12);

	//earring loop
	fill('silver');
	stroke('silver');
	strokeWeight(6);
	line(550,315,550,265);
	noStroke();
	ellipse(550,265,25,34);
	rect(542.5,226,15,26);
	stroke('silver');
	strokeWeight(6);
	noFill();
	line(550,226,550,201);
	arc(570,201,40,40,180,0);
	line(590,201,590,246);
	line(590,246,595,261);



	//left ear
	noStroke();
	fill('#FFFFFF');
	ellipse(250,350,300,300); //x = -300 y = -100

	//smaller circle
	stroke('black');
	strokeWeight(3);
	ellipse(250,350,245,245);

	//earring hole
	noStroke();
	fill('#264653');
	ellipse(250,215,12,12);

	//earring loop
	fill('silver');
	stroke('silver');
	strokeWeight(6);
	line(250,215,250,165);
	noStroke();
	ellipse(250,165,25,34);
	rect(242.5,126,15,26);
	stroke('silver');
	strokeWeight(6);
	noFill();
	line(250,126,250,101);
	arc(230,101,40,40,180,0);
	line(210,101,210,146);
	line(210,146,205,161);

}