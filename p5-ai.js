var lx;
var ly;
var cx;
var cy;
var wx;
var p;
var a;
var b;
var c; 

function setup(){
    createCanvas(windowWidth,windowHeight-10);
    lx = width/10;
    ly = height/2;
    cx = width;
    cy = height+100;
    wx = width-20;
    a = height/3-100;
    b = 2*height/3-100;
    c = height-100;
    //p = random(a,b);
}

function draw(){
    
    background(150);
    fill(100);
    rect(0,50,width,height-100);
    line(0,cy/3,width,cy/3);
    line(0,2*cy/3,width,2*cy/3);

    fill(0,100,204);
    rect(lx,ly,100,50);
    fill(100,100,204);
    rect(lx+100,ly,300,50);

    fill(204,100,0);
    rect(width,height,75,150);

    //for (wx = 0; wx < 100; wx++) { 
        //text += cars[i] + "<br>";
    if (wx<=-50){
        wx = width;}
    else{
        /*wx -= 5;
        fill(0,100,0);*/
        /*p = random (d,e,f);
        if (p==d){
            wx -= 5;
            fill(0,100,0);*/
        rect(wx,a,50,100); }
        /*else if (p==e){
            wx -= 5;
            fill(0,100,0);
            rect(wx,b,50,100);
        }
        else if(p==f){
            wx -= 5;
            fill(0,100,0);
            rect(wx,c,50,100);
        }*/

    //}


}
