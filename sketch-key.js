var x =100;
var y = 100;

function setup(){
    createCanvas(800,600);
    background(100);
}

function draw(){

   // if(condition ==True)

    if(keyIsDown(LEFT_ARROW))
    x-=5;
    //x=x-5

    if(keyIsDown(RIGHT_ARROW))
    x+=5;

    if(keyIsDown(UP_ARROW))
    y-=5;

    if(keyIsDown(DOWN_ARROW))
    y+=5;

    //clear()
    fill(35,70,100);
    ellipse(x,y,50,50);
}