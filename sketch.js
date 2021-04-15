//objects
var fixedRect,movingRect;
var gob1,gob2,gob3,gob4;

function setup() {
  //canvas size
  createCanvas(1200,800);
  
  //creating the object with its properties
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  gob1=createSprite(100,100,50,50);
  gob1.shapeColor="green";

  gob2=createSprite(200,100,50,50);
  gob2.shapeColor="green";
  
  gob3=createSprite(300,100,50,50);
  gob3.shapeColor="green";
  
  gob4=createSprite(400,100,50,50);
  gob4.shapeColor="green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  //background colour to black
  background(0);
  
  //to set the y and x position of the moving object to move along the mouse
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  
  //to see if the objecs are touching
  if(isTouching(movingRect,gob1)){
    movingRect.shapeColor="red";
    gob1.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    gob1.shapeColor="green";
  }
  if(isTouching(movingRect,gob2)){
    movingRect.shapeColor="red";
    gob2.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    gob2.shapeColor="green";
  }

  //to make the objects bounce off
  bounceOff(movingRect,fixedRect);
  //showing sprites
  drawSprites();
}

