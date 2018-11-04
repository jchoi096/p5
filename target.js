var x;
var y;
var x2;
var y2;
var d;
var d1;

function setup(){
    createCanvas(windowWidth, windowHeight);
    x = width/2;
    y = height/2;
    v = 3;
    vy = 3;
    x2 = width/2;
    y2= 3*height/4;
}

function draw(){
    background(100);
    if(x>width-100 || x<100 || d<125)
        v = -v;
    x += v;

    if(y>height-100 || y<100)
        vy = -vy;
    y += vy;

/*    line(width/2,0,x,y);
    fill(255);*/
    //ellipse(x,y,x,x);
    /*--
    ellipse(x,y,x/8,x/8);
    fill(0);
    stroke(255);
    ellipse(x,y,x/10,x/10);
    fill(0,100,204);
    stroke(0);
    ellipse(x,y,x/12,x/12);
    fill(0,100,0);
    ellipse(x,y,x/14,x/14);
    fill(255,255,0);
    ellipse(x,y,x/16,x/16);
    ellipse(x,y,1,1);*/

    line(x,0,x,y-100);
    fill(255);
    ellipse(x,y-100,200,200);
    ellipse(x,y-100,180,180);
    fill(0);
    stroke(255);
    ellipse(x,y-100,160,160);
    ellipse(x,y-100,140,140);
    fill(0,100,204);
    stroke(0);
    ellipse(x,y-100,120,120);
    ellipse(x,y-100,100,100);
    fill(0,100,0);
    ellipse(x,y-100,80,80);
    ellipse(x,y-100,60,60);
    fill(255,255,0);
    ellipse(x,y-100,40,40);
    ellipse(x,y-100,20,20);
    ellipse(x,y-100,1,1);

    if(keyIsDown(RIGHT_ARROW))
        if(x2<width)
            x2+=5;
    if(keyIsDown(LEFT_ARROW))
        if(x2>0)
            x2-=5;
    if(keyIsDown(UP_ARROW))
        if(y2>0)
            y2-=5;
    if(keyIsDown(DOWN_ARROW))
        if(y2<height)
            y2+=5;

    d = dist(x,y,x2,y2);
    d = int(d);
    if(d<(200+50)/2){
        fill(0,150,244)
    } else{
        fill(20,75,0);
    }

    d1 = dist(100,100,x2,y2);
    ellipse(x2,y2,50,50);
    fill(0);
    textSize(24);
    text("distain"+d,100,100);
}