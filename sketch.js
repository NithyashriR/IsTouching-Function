var mrect ,frect;
var o1,o2,o3,o4

function setup() {
  createCanvas(800,400);
 mrect= createSprite(400, 200, 50, 50);
 mrect.shapeColor="red"
 mrect.debug=true;
frect=createSprite(500,300,50,50);
frect.shapeColor="red";
frect.debug=true;
o1= createSprite(200, 200, 50, 50);
 o1.shapeColor="red"
 o1.debug=true;
o2=createSprite(500,200,50,50);
o2.shapeColor="red";
o2.debug=true;
o3= createSprite(300, 200, 50, 50);
 o3.shapeColor="red"
 o3.debug=true;
o4=createSprite(400,200,50,50);
o4.shapeColor="red";
o4.debug=true;

mrect.depth = 9;


}

function draw() {
  background(0);  
  mrect.x=mouseX;
  mrect.y=mouseY;
if(isTouching(frect)||isTouching(o1)||isTouching(o2)||isTouching(o3)||isTouching(o4)){

mrect.shapeColor="blue";

}
  else{
    mrect.shapeColor="red";

  }

  drawSprites();
}