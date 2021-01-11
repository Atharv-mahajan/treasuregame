var PLAY = 1;
var END = 0
var gameState = 1;
var sword,fruit;

var score = 0;

var fruit1,fruit2,fruit3,fruit4;

var r;

var swordImage,fruitImage,monster1Image,monster2Image,gameoverImage;

function preload(){
  
  swordImage = loadImage("sword.png");
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  monster1Image = loadImage("alien1.png");
  monster2Image = loadImage("alien2.png");
  
  gameoverImage = loadImage("gameover.png");
 
}

function setup(){
  createCanvas(600,550);
  
  sword = createSprite(200,200,20,20);
  sword.addImage(swordImage);
  
  fruitsGroup = new Group();
  enemyGroup = new Group();
  
}

function draw(){
  
  background("lightblue");
  fill("wihte");
  textSize(20);
  text("Score : "+score,490,50)

  if (gameState === PLAY){
    
    sword.y = World.mouseY;
    sword.x = World.mouseX;
  
    console.log(r)
  
    fruits();
    monster();
    
    if (sword.isTouching(fruitsGroup)){
      fruitsGroup.destroyEach();
      score = score+1;
    }
    
    if (sword.isTouching(enemyGroup)){
      gameState = END;
    }
    
  }
   
  if (gameState === END){
    if (sword.isTouching(enemyGroup)){
      fruitsGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitsGroup.setVelocityX = 0;
      enemyGroup.setVelocityX = 0;
      sword.addImage(gameoverImage);
      sword.x = 275;
      sword.y = 300;
    }
    
  }
  
  
 drawSprites();
  
}

function fruits(){
  
  if (World.frameCount %80 === 0){
    fruit = createSprite (550,200,20,20);
    fruit.scale = 0.3
    r = Math.round(random(1,4));
    if (r == 1){
      fruit.addImage(fruit1);
    }else if (r == 2){
      fruit.addImage(fruit2);
    }else if (r == 3){
      fruit.addImage(fruit3);
    }else if (r == 4){
      fruit.addImage(fruit4);
    }
    
    fruit.y = Math.round(random(50,340));
    
    fruit.lifetime = 300;
    fruit.velocityX = -7;
    
    fruitsGroup.add(fruit);
  }
  
}

function monster(){
  
  if (World.frameCount %200 === 0){
    var monster = createSprite(550,200,20,20);
    monster.addImage(monster2Image);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -8;
    monster.lifetime = 300;
    
    enemyGroup.add(monster);
    
  }
}




