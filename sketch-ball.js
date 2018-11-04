function setup() {
    createCanvas(800,600);
    background(20);
}

function draw(){
    fill(/*mouseX*mouseY*/100,mouseY,mouseX);
    //ellipse(mouseX-25,mouseY,mouseY,mouseX);
    rect(mouseX-25,mouseY,mouseY,mouseX);
}

function mousePressed(){
    fill(0,0,500);
    ellipse(mouseX-25,mouseY,100,100);
}

//function keyPressed(){
    //if (value == 30){

  //  }
//}

//keyIsDown