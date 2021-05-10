let fr = 30; //initial frame rate
let j = 20;
let k = 800;
let s = 5; //stroke
let red = 255;
let blue = 0;

function setup() {
	frameRate(fr);
	let canvas = createCanvas(810,810);
	canvas.center('horizontal');
	colorMode(RGB);
	background('white');
}

function mousePressed(){ //start and stop the pattern
	if(isLooping()){
		noLoop();
	}
	else
		loop();
}

function keyPressed(){
	if (keyCode === ENTER) {  //press ENTER to save the pattern
		saveCanvas(canvas,'myRadialPattern','png'); 
	}
    if (keyCode === UP_ARROW){ //press the up arrow to increase frame rate
      console.log(fr);
      if (fr <= 60){
         fr = fr + 3;
       }
      frameRate(fr);
    }
     if (keyCode === DOWN_ARROW){ //press the down arrow to decrease frame rate
      console.log(fr);
       if (fr > 0){
         fr = fr - 3;
       }
      frameRate(fr);
    }
}

function draw(){
	noFill();
		if (j <= 800){ //creating the blue and red gradient concentric circles going outwards
			stroke(red,0,blue);
            strokeWeight(s);
            s = s - 0.1;
            ellipse(width/2,width/2,j,j);
           
			j = j + 20;
            red = red - 5;
            blue = blue + 5;
			if(j > 800){ 		//at the max value of j reset the colours and stroke for
				s = 5;			//the pattern to resume correctly and reset k to ensure
				k = 800; 		//that the white circles return inwards correctly
                red = 255;
			    blue = 0;
            }
		}

	else{
		stroke('white'); //creating the white concentric circles going inwards
        strokeWeight(10); //thick stroke to cover the coloured circles from j
		ellipse(width/2,width/2,k,k);
        k = k - 20;
		if(k <= 20){ 			//reset the value of j to ensure that the coloured
			j = 20;				//circles emerge from the center of the canvas again
		}
	}
}