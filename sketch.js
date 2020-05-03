var body,head,leg,leg2;
var dog;

function setup() {
  createCanvas(400, 400);
  body = createSprite(210, 285, 140, 40);
  body.shapeColor = "black";
  
  head = createSprite(275, 265, 40,40);
  head.shapeColor = "black";
  
  leg = createSprite(150, 300, 20, 50);
  leg.shapeColor = "black";
  
  leg2 = createSprite(270, 300, 20, 50);
  leg2.shapeColor = "black";
  
  dog = new Group();
  dog.add(leg);
  dog.add(leg2);
  dog.add(body);
  dog.add(head);
}

function draw() {
  background(255);
  
  if(keyDown("left")){
    dog.setVelocityXEach(-2);
  }
  
  if(keyDown("right")){
    dog.setVelocityXEach(2);
  }
  
  if(keyDown("up")){
    dog.setVelocityYEach(-2);
  }
  
  if(keyDown("down")){
    dog.setVelocityYEach(2);
  }
  
  drawSprites();
}

