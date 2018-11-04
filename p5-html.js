var nameP;
var slider;
var button1;
var bgcolor;
var x,y,inputValue;

function setup(){
    createCanvas(windowWidth,300);
    nameP = createP("Curling Game, add more text aoejfsdk");
    slider = createSlider(100,300,150);
    button1 = createButton('all day every dae');
    button1.mousePressed(updateText);
    bgcolor = color(150);
    button2 = createButton("stop uh curling");
    button2.mousePressed(moveBall);
    x = width/2;
    y = height/2;
    inputValue = createInput('Enter yo ohhhhhhkaaayyy..name');
}
function draw(){
    background(bgcolor);
    fill(255,0,0);
    ellipse(x,y,slider.value(),slider.value());
    text(inputValue.value(),100,100);
}
function updateText(){
    bgcolor = color(random(255));
}
function moveBall(){
    x += 10;
}
function mousePressed(){
    nameP.html("oh bouy");
}