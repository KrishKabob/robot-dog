var leg, leg2, body, head

function setup() {
  createCanvas(400, 400);

  var leg = createSprite(100, 300, 20, 50);
  var leg2 = createSprite(300, 300, 20, 50);
  var body = createSprite(200, 20, 200, 20);
  var head = createSprite(180, 300, 10, 10);
}

function draw() {
  background("white");
  if (mouseIsPressed === true) {
   leg.y = leg.y / 2;
   leg2.y = leg2.y / 2;
  } 
  //if(mouseIsPressed === false){
  //  leg.y = leg.y*2;
  //  leg2.y = leg2.y*2;
 // }

}