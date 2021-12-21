var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgAnime = loadImage("assets/bg.jpeg");

  zombieImg=loadImage("assets/zombie.png");
winSound=loadSound("assets/win.mp3");
}

function setup() {

  
  createCanvas(1200,700);

  //adding the background image
  bg = createSprite(600, 500)
bg.addImage(bgAnime)
bg.scale = 1.1;
bg.velocityX=-4;
  

//creating the player sprite
player = createSprite(100, 600, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 


if(bg.x<470){
  bg.x=600;
}

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting);
  winSound.play();
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
zombies();
drawSprites();

}

function zombies(){

  

}
