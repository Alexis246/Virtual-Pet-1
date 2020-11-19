var dog, happyDog;
var database;
var foodS, foodStock;
var foodObj

function preload()
{
  database = firebase.database();

	dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png");

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,200,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodObj = new Food();
}


function draw() {  
  background(rgb(46, 139, 87));
  drawSprites();

  textSize(35);
  stroke("black");
  fill("black");
  text("Food: " + foodS, 50, 50);
  
  if (keyWentDown("UP_ARROW")){
    
    feedDog();
  }
}

function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  if (foodS > 0){
  dog.addImage(happyDogImg);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
  })
}