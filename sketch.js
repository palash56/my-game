var bg, backg;
var panda, player;
   

function preload(){
  panda = loadImage("animal1-removebg-preview.png")
  bg = loadImage("bg2.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  backg= createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
backg.addImage(bg)
backg.scale = 1.1 


player= createSprite(displayWidth-1000, displayHeight-340, 50, 50);
 player.addImage(panda)
   player.scale = 0.3
}

function draw() {
  background("white");  





  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
   player.x = player.x+30
  }










  drawSprites();
}