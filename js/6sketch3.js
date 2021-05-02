let fr = 8;
let a = 0;
let m = 0;

function setup() {
  frameRate(fr);
  let canvas = createCanvas(800,800,SVG);
  colorMode(HSB, 360, 100, 100);
  //noLoop();
  noStroke();
  alert("Flash Warning - Depending on the diameter entered in the next prompt, this sketch may contain colours that flash rapidly! To avoid excessive flashing, enter a smaller diameter.");
  a = parseInt(window.prompt("Enter circle diameter - "));
  m = width%a;
}

function draw() {
  background('black');
  //let counter1 = 0;
  for (let i = (m + (a/2)); i <= (width - a/2); i += a) {
  	//counter1++;
  	let counter2 = 0;
    for (let j = (m + (a/2)); j <= (height - (a/2)); j += a) {
    	//counter2++;												//just playing around here
    	//if (counter1 == counter2 || counter1 - counter2 >= 0){
    		drawGradient(i,j,a);
    	/*}
    	else{
    		fill('black');
    		ellipse(i,j,a,a);
    	}*/
    }
  }
}

function drawGradient(i,j,a) {
  let h = random(0,360);
  for (let r = a/1.1; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(i, j, r, r);
    h = (h + 1) % 360;
  }
}

function keyPressed(){
	if (keyCode === ENTER){
		noLoop();
		save();
	}
	else if (keyCode === 32){
		loop();
	}
}