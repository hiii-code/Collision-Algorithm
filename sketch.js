var fixedRect;
var movingRect;
function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor ="red";
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor ="yellow";
}

function draw() {
  background('blue');  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < 65 && 
    fixedRect.x - movingRect.x < 65 && 
    movingRect.y - fixedRect.y < 65 &&
    fixedRect.y - movingRect.y < 65 ){
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "black";
  }
  else
  {fixedRect.shapeColor ="red";
  movingRect.shapeColor ="yellow";}
  drawSprites();
}