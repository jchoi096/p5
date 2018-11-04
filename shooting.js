/*12/28/17
background & square player movement*/

var x =580;
var y = 620;
var w = 100;
var h = 100;
var x2 =580;
var y2 = 620;
var w2 = 100;
var h2 = 100;
var cw = 1280;
var ch = 720;
/*
var player = {
    x:100
    y:100

}
*/
function setup(){
    createCanvas(cw,ch);
    pl = loadImage("/images/kakaotalk-ryan-stun.jpg");
}

function draw(){
    background(pl);
    if(keyIsDown(65)&&x2>=0&&x2!=x+w&&y2>=y-h/*||y2<=y+h*/)
    x2-=5;
    //x=x-5
    
    if(keyIsDown(68)&&x2<=cw - w2)
    x2+=5;
    
    if(keyIsDown(87)&&y2>=0)
    y2-=5;
    
    if(keyIsDown(83)&&y2<=ch - h2)
    y2+=5;
    image(pl/*bg*/,x2,y2,w2,h2);

    if(keyIsDown(LEFT_ARROW)&&x>=0)
    x-=5;
    //x=x-5

    if(keyIsDown(RIGHT_ARROW)&&x<=cw - w)
    x+=5;

    if(keyIsDown(UP_ARROW)&&y>=0)
    y-=5;

    if(keyIsDown(DOWN_ARROW)&&y<=ch - h)
    y+=5;
    image(pl,x,y,w,h);

    fill(300,500,30);
    noStroke();
    rect(500,500,300,100);
}