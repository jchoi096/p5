function Bullet(x,y){
    this.x = x;
    this.y = y;
    this.show = function(){
        fill(2555,50,50);
        ellipse(this.x,this.y,20,20);
    }
    this.move = function (){
        this.y -=15;
    }
}