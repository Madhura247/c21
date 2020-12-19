var fixedRect, movingRect, car, wall;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(600, 200, 50, 50);
  car.shapeColor = "blue";
  car.velocityY = 5;
  wall = createSprite(1000, 200, 40, 120);
  wall.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching (movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  else {movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

  collide (car, fixedRect);


  drawSprites();
}



