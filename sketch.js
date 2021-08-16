

function setup(){
  createCanvas(400,400);
  //create a runner sprite
  runner= createSprite(50,160,20,50);
  runner.addAnimation("runner",runner_runner);
  runner.scale=0.5;
  
  //create a ground sprite
  trak=createSprite(200,190,40,20);
  trak.addImage("path",trakImage);

  
  //Moving background
  trak=createSprite(200,200);
  trak.addImage(pathImg);
  trak.velocityX=4;
  trak.scale=1.2;


  
  //creating invisible trak
  invisibleTrak=createSprite(200,190,10,400);
  invisibleTrak.visible=false;



}

function draw() {
  console.time();

  for(var i=0; i<100;i++){
    console.log("running Loop");
  }
  //set bakground color
  background(220);


  console.log("draw frame is called:");
  console.log(runner.y)

  //jump when the spae key is pressed
  if(keyDown("spae")&&runner.y>=362){
    runner.velocityY=-10;
  }

  //add geavity
  runner.velocityY=runner.velocityY=0.8

  if(ground.x<0){
    ground.x=ground.width/2;
  }

  //stop runner from faling dowm

  runner.collide(invisibleTrak);
  console.timeEnd();
  //code to reset the background
  if(trak.y>400){
    trak.y=height/2;
  }
  drawSprites();
}
