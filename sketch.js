var leg, leg2, body, head

function setup() {
  createCanvas(400, 400);

  var leg = createSprite(100, 300, 20, 50);
  leg.velocityY = 0;
  var leg2 = createSprite(270, 300, 20, 50);
  leg2.velocityY = 0;
  var body = createSprite(200, 285, 200, 20);
  var head = createSprite(275, 265, 40, 40);
}

function draw() {
  background("white");

drawSprites();
}
