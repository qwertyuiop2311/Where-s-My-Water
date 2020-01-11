var groundimg

function preload(){
    groundimg= loadImage("sprites/ground.png.png")
}


function setup() {
    createCanvas(1800, 1600);
    var ground=createSprite(600, 400)
    ground.addImage(groundimg)
    

  }
  
  function draw() {
    background(0);  
    drawSprites();
  }
  function mousePressed(){
    var circle= createSprite(mouse.X, mouse.Y, 20, 30)
    circle.shapeColor="black"
  }

