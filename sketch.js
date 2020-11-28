var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 800, 80, 50);
  movingRect.shapeColor = "white"
  movingRect.velocityY = - 5
  fixedRect  = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "white"
  fixedRect.velocityY = + 5
  
}

function draw() {
  background(0); 
  console.log((movingRect.width + fixedRect.width)/2)
  if((movingRect.x - fixedRect.x < (movingRect.width + fixedRect.width)/2) && 
  (fixedRect.x - movingRect.x< (movingRect.width + fixedRect.width)/2)){
    movingRect.velocityX = movingRect.velocityX * (- 1)
    fixedRect.velocityX = fixedRect.velocityX * (- 1)
  }
  if((movingRect.y - fixedRect.y < (movingRect.height + fixedRect.height)/2) && 
  (fixedRect.y - movingRect.y < (movingRect.height + fixedRect.height)/2)){
    movingRect.velocityY = movingRect.velocityY * (- 1)
    fixedRect.velocityY = fixedRect.velocityY * (- 1)
  }

  drawSprites();
}