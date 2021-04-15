//function for is touching
function isTouching(ob1,ob2){
    if(ob1.x-ob2.x<ob2.width/2+ob1.width/2 
      && ob2.x-ob1.x<ob2.width/2+ob1.width/2
      &&ob1.y-ob2.y<ob2.height/2+ob1.height/2 
      && ob2.y-ob1.y<ob2.height/2+ob1.height/2){
      return true;
    }
    else{
      return false;
    }
  
  }
  //function for bounce off
  function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }