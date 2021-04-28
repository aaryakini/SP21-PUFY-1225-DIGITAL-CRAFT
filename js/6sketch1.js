const fr = 10;

function setup() {
	let canvas = createCanvas(800,800);
	canvas.center('horizontal');
	colorMode(RGB,255,255,255,1);
}

function draw() {
	background('black');
	circles ();
}

function circles(){
	background('white');
	let red = 255;
	let blue = 0;
	let counter = 0
	for(let i = width*1.5; i >= 30; i -= 30){
		counter++;
		console.log(counter); //counting how many circles are made
		fill(red,0,blue);
		red = red - 10;
		blue = blue + 10;
		//noStroke();
		stroke('white');
		ellipse(400,400,i,i);
	} 
}

/*function squares(){
	background('white');
	let green = 150;
	let blue = 100;
	let counter = 0
	for(let i = width; i >= 30; i -= 30){
		counter++;
		console.log(counter); //counting how many circles are made
		fill(100,green,blue);
		green = green - 10;
		blue = blue + 10;
		stroke('white');
		rect((width - i)/2,(width - i)/2,i,i);
	} 
}

function mousePressed(){
	squares();
}

function mouseReleased(){
	circles();
}*/