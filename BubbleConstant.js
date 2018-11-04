//contstrctor function starts with Capital letter
//contstructor function is a template to be generated a object when it's called

function Bubble(a, b) {
    this.x = a;   //random(0, width);  // literal object has x: 300,
    this.y = b;   //random(0, height); // literal object has y: 200,
    this.col = color(255,100);
    this.selected = false;
    this.display = function (){
        stroke(255);
        fill(this.col);
        ellipse(this.x,this.y,24,24);
    };
    this.move = function () {
        this.x = this.x + random(-2,2);
        this.y = this.y + random(-2,2);
    }   
    // new function to change the color of bubble
    // check the dist of mouseX and mouseY from center of circle, 
    //only click inside of circle, then update the color
    this.clicked = function() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if(d < 12) {
            this.col = color(255,0,150);
            this.selected = true;
        }
    }
}