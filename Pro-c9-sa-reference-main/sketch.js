var box;

function setup() {
  createCanvas(1000,500);
  box = createSprite(500,250,30,30);
box.shapeColor = "yellow"
}

function draw() 
{
   background("black");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red")
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue")
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("green")
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("yellow")
  }

  drawSprites();
}




