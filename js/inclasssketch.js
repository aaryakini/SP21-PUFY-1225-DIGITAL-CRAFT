const dia = 200;
const min = 50;

function setup(){
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
}

function draw() {
	background('#007F5F');
	noStroke();
	//stroke('white');
	//strokeWeight(2);

	fill('#2B9348');
	ellipse (200,200,dia,dia);
	fill('#55A630');
	ellipse (200,200,dia - min, dia - min);
	fill('#80B918');
	ellipse (200,200,dia - min*2, dia - min*2);
	fill('#AACC00');
	ellipse (200,200,dia - min*3, dia - min*3);

	fill('#FFFF3F');
	ellipse (400,420,2*dia,2*dia);
	fill('#EEEF20');
	ellipse (400,420,2*dia - min, 2*dia - min);
	fill('#D4D700');
	ellipse (400,420,2*dia - min*2, 2*dia - min*2);
	fill('#BFD200');
	ellipse (400,420,2*dia - min*3, 2*dia - min*3);
	fill('#AACC00');
	ellipse (400,420,2*dia - min*4, 2*dia - min*4);
	fill('#80B918');
	ellipse (400,420,2*dia - min*5, 2*dia - min*5);
	fill('#55A630');
	ellipse (400,420,2*dia - min*6, 2*dia - min*6);
	fill('#55A630');
	ellipse (400,420,2*dia - min*7, 2*dia - min*7);

	let len = 200;

	fill('#AACC00');
	rect(550,550,len,len);
	fill('#80B918');
	rect(550,550,len - min,len - min);
	fill('#55A630');
	rect(550,550,len - min*2,len - min*2);
	fill('#2B9348');
	rect(550,550,len - min*3,len - min*3);
	fill('#007F5F');
	rect(550,550,len - min*4,len - min*4);



}