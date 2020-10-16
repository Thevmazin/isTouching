var r1, r2

function setup() {
createCanvas(800,400);
r1 = createSprite(200,200,70,10);
r1.shapeColor = "red";
r2 = createSprite(300,300,70,10);
r2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
r1.y = mouseY
r1.x = mouseX

isTouching();
 drawSprites(); 
}

function isTouching(){
if (r1.x - r2.x < r1.width/2 + r2.width/2 && r2.x - r1.x < r2.width/2 + r2.width/2 &&
  r1.y - r2.y < r1.height/2 + r2.height/2 && r2.y - r1.y < r2.height/2 + r1.height/2){
r1.shapeColor = "blue";
r2.shapeColor = "yellow";
}
else{
r1.shapeColor = "red";
r2.shapeColor = "green";
}
}