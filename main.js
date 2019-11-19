let x,y,a,b;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    a = 700;
    b = 280;
    x = a;
    y = 0; 
}

let x_adder = -2;
let y_multi = 1;
let earth;
let sun;
let back;
    
function draw(){
    background(0);
    imageMode(CENTER);
    translate(width/2, height/2);
    image(back,0,0,width,height);
    strokeWeight(2);
    stroke(225);
    fill(0,0,0,0);
    ellipse(0,0,2*a,2*b);
    strokeWeight(2);
    stroke(0);
    fill(254, 38, 9);
    image(sun, 0, 0, 250, 250);
    image(earth,x, y,75,75);
    x = x + x_adder;
    y = Math.sqrt( Math.pow(b,2) * (1 -( Math.pow(x,2) / Math.pow(a,2) ))) * y_multi;
    if(x!=0 && x%700 == 0) {
        y_multi *= -1;
        x_adder *= -1;
    }
    
  }

  function mousePressed() {
      redraw();
  }

  function preload(){
        earth = loadImage("earth.png") ;
        sun = loadImage("sun.png");
        back = loadImage("back.jpg");
  }