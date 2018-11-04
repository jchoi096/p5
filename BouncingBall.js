var x;
var y;
w1speed = 5;
h2speed = 6;

function setup(){
    createCanvas(windowWidth,windowHeight);
    w = width/2;
    h = height/2;
    w1 = width/3;
    h1 = height/3;
    w2 = 2*width/3;
    h2 = 2*height/3;
}

function draw(){
    background(100);
    if(keyIsDown(RIGHT_ARROW))
        if(w < width)
            w += 5;
    if(keyIsDown(LEFT_ARROW))
        if(w>0)
            w-=5;
    if(keyIsDown(UP_ARROW))
        if(h>0)
            h -=5;
    if(keyIsDown(DOWN_ARROW))
        if(h<height)
            h+= 5;
    fill(20,50,100);
    ellipse(w,h,100,100);
    if(w1>width || w1<0)
        w1speed = -w1speed;
    w1 += w1speed;
    fill(100,25,200);
    ellipse(w1,h1,100,100);
    if(h2>height || h2<0)
    h2speed = -h2speed;
    h2 += h2speed;
    fill(10,25,200);
    ellipse(w2,h2,100,100);
}