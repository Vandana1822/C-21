var Rect1, Rect2;

function setup() {
  createCanvas(600, 600);
  Rect1 = createSprite(150, 200, 50, 150);
  Rect2 = createSprite(500, 200, 150, 50);
  Rect1.shapeColor = "green";
  Rect2.shapeColor = "red";

  Rect1.debug = true;
  Rect2.debug = true;

  Rect1.velocityX=3;
  Rect2.velocityX=-3;
}

function draw() {
  background(0);

if (Rect2.x - Rect1.x < Rect2.width / 2 + Rect1.width / 2 &&
    Rect1.x - Rect2.x < Rect2.width / 2 + Rect1.width / 2 )
    {
    Rect2.shapeColor = "blue";
    Rect1.shapeColor = "grey";

    Rect1.velocityX=Rect1.velocityX*(-1);
    Rect2.velocityX=Rect2.velocityX*(-1);

  }

  drawSprites();
}
