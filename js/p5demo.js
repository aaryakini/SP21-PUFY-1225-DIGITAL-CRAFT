function setup(){
	let canvas = createCanvas(1000,1000);
	canvas.center('horizontal');
}

function draw(){
	background('#EEEEEC'); //white background
	stroke('#222327'); // stroke colour (reference for more info: https://p5js.org/reference/#/p5/stroke)
	strokeWeight(18); //stroke thickness
	fill('#CA372D');
	rect(-9,-9,429,545); //red rect
	fill('#254692');
	rect(925,536,84,162); //blue rect
	fill('#F4D53D');
	rect(420,972,252.2,37); //yellow rect
	fill('#212224');
	rect(672.2,972,252.2,37); //black rect
	fill('EEEEE6');
	rect(420,536,505,436); // white rect
}