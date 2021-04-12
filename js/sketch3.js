function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
}

function draw() {
	background('#99B8FF');
	noStroke();
	fill('#709BFF');
	rect(200,0,400,800);
	angleMode(DEGREES);

	//right ear
	fill('#f4845f');
	ellipse(550,550,300,300);

	//background colours
	noStroke();
	fill('#f4845f');
	arc(550,550,240,240,0,45);
	fill('#F79D65');
	arc(550,550,240,240,45,90);
	fill('#f4845f');
	arc(550,550,240,240,90,135);
	fill('#F79D65');
	arc(550,550,240,240,135,180);
	fill('#f4845f');
	arc(550,550,240,240,180,225);
	fill('#F79D65');
	arc(550,550,240,240,225,270);
	fill('#f4845f');
	arc(550,550,240,240,270,315);
	fill('#F79D65');
	arc(550,550,240,240,315,0);

	//inner circles
	noFill();
	stroke('#EF382E');
	strokeWeight(3);
	ellipse(550,550,255,255);
	strokeWeight(5);
	ellipse(550,550,240,240);

	//inner pattern
	strokeWeight(3);
	noFill();
	//open up
	arc(550,465,170,170,0,180);
	//open down
	arc(550,635,170,170,180,0);
	//open right
	arc(465,550,170,170,270,90);
	//open left
	arc(635,550,170,170,90,270);
	//open NE
	arc(610,490,170,170,45,225);
	//open SE
	arc(610,610,170,170,135,315);
	//open NW
	arc(490,490,170,170,315,135);
	//open SW
	arc(490,610,170,170,225,45);

	//earring hole
	noStroke();
	fill('#709BFF');
	ellipse(550,412,12,12);

	//earring loop
	fill('gold');
	stroke('gold');
	strokeWeight(6);
	line(550,412,550,365);
	noStroke();
	ellipse(550,365,25,34);
	rect(542.5,326,15,26);
	stroke('gold');
	strokeWeight(6);
	noFill();
	line(550,326,550,301);
	arc(570,301,40,40,180,0);
	line(590,301,590,346);
	line(590,346,595,361);

	//left ear
	noStroke();
	fill('#f4845f');
	ellipse(250,350,300,300); //x = -300 y = -100

	//background colours
	noStroke();
	fill('#f4845f');
	arc(250,350,240,240,0,45);
	fill('#F79D65');
	arc(250,350,240,240,45,90);
	fill('#f4845f');
	arc(250,350,240,240,90,135);
	fill('#F79D65');
	arc(250,350,240,240,135,180);
	fill('#f4845f');
	arc(250,350,240,240,180,225);
	fill('#F79D65');
	arc(250,350,240,240,225,270);
	fill('#f4845f');
	arc(250,350,240,240,270,315);
	fill('#F79D65');
	arc(250,350,240,240,315,0);

	//inner circles
	noFill();
	stroke('#EF382E');
	strokeWeight(3);
	ellipse(250,350,255,255);
	strokeWeight(5);
	ellipse(250,350,240,240);

	//inner pattern
	strokeWeight(3);
	noFill();
	//open up
	arc(250,265,170,170,0,180);
	//open down
	arc(250,435,170,170,180,0);
	//open right
	arc(165,350,170,170,270,90);
	//open left
	arc(335,350,170,170,90,270);
	//open NE
	arc(310,290,170,170,45,225);
	//open SE
	arc(310,410,170,170,135,315);
	//open NW
	arc(190,290,170,170,315,135);
	//open SW
	arc(190,410,170,170,225,45);

	//earring hole
	noStroke();
	fill('#709BFF');
	ellipse(250,212,12,12);

	//earring loop
	fill('gold');
	stroke('gold');
	strokeWeight(6);
	line(250,212,250,165);
	noStroke();
	ellipse(250,165,25,34);
	rect(242.5,126,15,26);
	stroke('gold');
	strokeWeight(6);
	noFill();
	line(250,126,250,101);
	arc(230,101,40,40,180,0);
	line(210,101,210,146);
	line(210,146,205,161);

}