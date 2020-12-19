var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor="blue";
  movingrect = createSprite(400,500,80,30);
  movingrect.shapeColor="blue";
  movingrect.velocityY=-5;
  fixedrect.velocityY=5;
}

function draw() {
  background("black");  

  
  
  //movingrect.y = mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2){
    movingrect.velocityX=(-1)*movingrect.velocityX;
    fixedrect.velocityX=(-1)*fixedrect.velocityX;
    //fixedrect.
  }//else{
   // movingrect.shapeColor="blue";
   // fixedrect.shapeColor="blue";
 // }

  if(movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
  movingrect.velocityY=(-1)*movingrect.velocityY;
  fixedrect.velocityY=(-1)*fixedrect.velocityY;
  }
  drawSprites();
}