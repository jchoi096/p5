var bg;
var bg1;
var img_player;
var img_enemy;
var player_size = 30;
var enemy_size = 60;

var x = 200;
var y = 200;
var x2 = 400;
var y2 = 400;

function setup(){
    createCanvas(1080,780);
    bg = loadImage("/images/kakaotalk-ryan-stun.jpg");
    bg1 = loadImaged("/images/kakaotalk-ryan-stun.jpg");
    img_player = loadImage("/images/kakaotalk-ryan-stun.jpg");
    img_enemy = loadImage("/images/kakaotalk-ryan-stun.jpg");
}

function draw(){
    background(bg1);
    noStroke();

    if (keyisDown(LEFT_ARROW)){
        if (x > 0) {
            x-=5;
        } else {
            x = 0;
        }
    }
       
        //x-=5; // x = x -5;
    //control play movement for the right side
    if(keyIsDown(RIGHT_ARROW)) { 
        if (x <= width-player_size) {
            x+=5;
        } else {
            x = width-player_size;
        } 
    }
    
    //x+=5; //x = x +5;    
    if(keyIsDown(UP_ARROW))
        y-=5;
    if(keyIsDown(DOWN_ARROW))
        y+=5;
    //this is the player image.
    image(img_player,x,y, player_size,player_size);
    // key value: a=65:left, s=83:down, d=68:right, w=87: up
    if(keyIsDown(65))
        x2-=5; 
    if(keyIsDown(68))
        x2+=5;
    if(keyIsDown(83))
        y2+=5; 
    if(keyIsDown(87))
        x2-=5;
    image(img_enemy,x2,y2, enemy_size,enemy_size);
    //rect(mouseX,mouseY,80,80);
}

function keyTyped() {
    if (keyCode === 81) {
        background(bg1);
    } else if (keyCode === 82){
        background(bg);
    } else {
        background(bg);
    }
  }