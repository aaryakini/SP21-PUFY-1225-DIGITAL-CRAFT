const fr = 60;
let j = 20;
let k = 800;
let s = 5;
let red = 255;
let blue = 0;
let counter = 0;


function setup() {
	frameRate(fr);
	let canvas = createCanvas(810,810);
	canvas.center('horizontal');
	colorMode(RGB);
}

function mousePressed(){
	noLoop();
}

function mouseReleased(){
	loop();
}

function keyPressed(){
	if (keyCode === ENTER) {
		noLoop();
	}
}

function draw(){
	noFill();
		if (j <= 800){
			stroke(red,0,blue);
            strokeWeight(s);
            s = s - 0.1;
            ellipse(width/2,width/2,j,j);
            counter++;
           
			j = j + 20;
            red = red - 5;
            blue = blue + 5;
			if(j > 800){
				s = 5;
				k = 800;
                red = 255;
			    blue = 0;
            }
		}

	else{
		stroke('white');
        strokeWeight(10);
		ellipse(width/2,width/2,k,k);
        k = k - 20;
		if(k <= 20){
			j = 20;
		}
	}
}