var player/*,bullet*/,mySound,bg;
var bullets = [];

function preload(){
    soundFormats('mp3','ogg');
    mySound = loadSound('m1-sound.mp3');
}

function setup(){
    createCanvas(1080,800);
    bg = loadImage("./images/MrMouse.gif");
    player = new Player(); //create new instance of player
}

function draw(){
    background(bg);
    player.show();
    
    //call bullet here
    for (var i=0; i<bullets.length; i++){
        bullets[i].show();
        bullets[i].move();
    }
}

function keyPressed(){
    if (keyCode ===LEFT_ARROW){
        player.move(-15);
    }else if(keyCode === RIGHT_ARROW){
        player.move(15);
    }else if (key === ' '){
        var bullet = new Bullet(player.x, height-60);
        bullets.push(bullet);
        mySound.setVolume(1);
        mySound.play();
    }
}