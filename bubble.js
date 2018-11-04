// sample program to show bubble with object
//sample object for the class: object is collection of name:vale pairs
// var object = { name:value, name1:value1, name2:value2
//         run: function () {}}
// object can have own function to execute later
// Step4: Use contruct function to create the object in array

var bubbles =[];
/* ------------------
// step1: create bubble object
var bubble = {
    x: 300,
    y: 200,
    display: function() {
        stroke(255);
        noFill();
        ellipse(this.x,this.y,24,24);
    },
    move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1,1);
    }
}
----------------------------- */
function setup() {
    createCanvas(600, 400);
    //step 2, created bubbles inside of setup fucntion.
    //step 3, put bubbles in for loop
    for(i=0; i < 2; i++) {
/* ------------------------
// Step2: create the bubbles object and add to array
        bubbles[i] = {
            x: 300,
            y: 200,
            display: function() {
                stroke(255);
                noFill();
                ellipse(this.x,this.y,24,24);
            },
            move: function() {
                this.x = this.x + random(-2,2);
                this.y = this.y + random(-2,2);
            }
        }
------- */
// Step3: call constructor function Bubble to create bubble object to add bubbles array
        bubbles[i] = new Bubble(mouseX, mouseY); 
                
    }
}
function draw() {
    background(0);
    // This is for step 1, to show object
    //bubble.display();
    //bubble.move();
    //This is for step 2, from array
    for(var i =0; i < bubbles.length; i++) {
        bubbles[i].display();
        if (bubbles[i].selected == false) {
            bubbles[i].move();
        }
        
    }
    if (bubbles.length > 50) {
        bubbles.splice(0,1);
    }
}



function mousePressed () {
    // when mouse pressed, create new bubbles
    // push function adds more objects to the array.
    //bubbles.push(new Bubble(mouseX, mouseY));

    // when mouse pressed, do something for the bubble objects.
    for(var i =0; i < bubbles.length; i++) {
        bubbles[i].clicked();
    }
}
function mouseDragged(){
    bubbles.push(new Bubble(mouseX, mouseY));
}