const fr = 1;

function setup(){
	frameRate(fr);
	let canvas = createCanvas(1500,800);
	canvas.center('horizontal');
	colorMode(RGB,255,255,255,1);

}

function keyPressed(){
	if (keyCode === ENTER){
		saveCanvas(canvas,'myPattern','png');
	}
}

function draw() {
	background('#15616d');
	stroke('#ff7d00');
	//strokeWeight(3);
  for (let i = 0; i < height; i += 40) {
			let xDist = 0;
			let j = width / random(20,100);
			let a = random(0,0.6);
			strokeWeight(randomStroke());
			while (xDist < width){
				fill(255,125,0,a);
				rect(xDist,i,j,40);
				xDist = xDist+j;
			}
		}
}

function randomStroke(){
	let i = random(3,6); 
	return i;
}

function mousePressed(){
	noLoop();
}

function mouseReleased(){
	loop();
}