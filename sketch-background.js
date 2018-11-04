var bg;

function setup() {
    createCanvas(236,255);
    bg = loadImage("/images/kakaotalk-ryan-stun.jpg");
}
function draw(){
    background(bg);
    stroke(225,204,108);
    if (mouseIsPressed){
        fill(200,400,500);
        ellipse(mouseX,mouseY,50,50);
    }
    line(0,mouseY,width,mouseY);
    line(mouseX,0,mouseX,height); 
    //line(0,0,width,100);
    //line(0,0,100,height);
}
//function mousePressed(){
  //  fill(0,0,500);
    //ellipse(mouseX,mouseY,100,100);
//}