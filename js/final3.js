let fr = 2; //frame rate
let f = ''; //variable to receive input for choice of colour or greyscale fill
let a = 0; //variable to receive diameter input
let g = -1; //variable to receive age input
let m = 0; //variable to calculate margins
let counter = 0; //to count number of loops of draw function
let k = 0; //xPos to draw black ellipses
let l = 0; //yPos to draw black ellipses
let counter2 = 0; //to count number of black ellipses per row

function setup() {
  frameRate(fr);
  let canvas = createCanvas(800,800);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  do{ //allow the user to opt out of bright flashing colours - for safety purposes
    f = window.prompt("FLASH WARNING - There are flashing colours in this sketch. Please enter B if you would like to avoid bright colours. Otherwise enter C.");
  } while (f != "b" && f != "c" && f != "B" && f != "C");
  while (a < 100 || a > 800){ //allow the user to set  a diameter for the circles
    a = parseInt(window.prompt("Enter circle diameter (must be >= 100 and =< 800)"));
  }
  while (g < 0 || g > 100){ //ask the user for their age
    g = parseInt(window.prompt("How old are you?"));
  }
  m = width%a;
  k = (m + (a/2)); 
  l = (m + (a/2));
}

function draw() {
  counter++;
  console.log(counter);
  if(counter < g+1){ //loop flashing gradient 19 times - for 19 years old
    for (let i = (m + (a/2)); i <= (width - a/2); i += a) {
      for (let j = (m + (a/2)); j <= (height - (a/2)); j += a) {
          drawGradient(i,j,a);
      }
    }
  }
  
  if (counter > g && l <= (height - (a/2))){ //after 19 iterations, black out
    frameRate(1);                              //each circle one by one
    fill('black');                             //to symbolise memories fading
    ellipse(k,l,a,a);
    k+=a;
    counter2++;
    if (k > (width - a/2)){
      counter2 = 0;
    }
    if(counter2 == 0){
      l+=a;
      k = (m + (a/2));
    } 
  }
}

function drawGradient(i,j,a) { //drawing a gradient
  if (f == "B" || f == "b"){ //if user chooses no bright colours - display greyscale
    let b = random(0,360);
    for (let r = a/1.1; r > 0; --r) {
      fill(0, 0, b);
      ellipse(i, j, r, r);
      b = (b + 1) % 360;
    }
  }
  else if (f == "C" || f == "c"){ //else - display colour gradient
    let h = random(0,360);
    for (let r = a/1.1; r > 0; --r) {
      fill(h, 90, 90);
      ellipse(i, j, r, r);
      h = (h + 1) % 360;
    }
  }
}

function mousePressed(){ //start and stop the pattern
  if(isLooping()){
    noLoop();
  }
  else
    loop();
}

function keyPressed(){ //save the pattern as a png
  if (keyCode === ENTER){
    saveCanvas(canvas,'myMemoryPattern','png'); 
  }
}