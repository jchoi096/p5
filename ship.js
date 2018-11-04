function Player(){
    this.x = width/2;
    this.y = height-30;

    this.show = function (){
        fill(255)
        rectMode(CENTER);
        rect(this.x, this.y, 20,60);
    }
    this.move = function(dir) {
        this.x += dir;
    }    
}