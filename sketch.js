var dog,sadDog,happyDog;
var feedPet, addFood;
var foodObj
var foodS

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

foodObj = new Food()

addFood = createButton("Add Food")
addFood.position(950, 350)
addFood.mousePressed(addFoods)

feedPet = createButton("Feed pet")
feedPet.position(50, 350)
feedPet.mousePressed(feedDog)


}

function draw() {
  background(46,139,87);


foodObj.display();

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog() {
dog.addImage(happyDog);

if(foodObj.getFoodStock()<= 0){
foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}else{
foodObj.updateFoodStock(foodObj.getFoodStock()-1)

}
}

//function to add food in stock
function addFoods() {
foodS++;
database.ref('/').update({
Food:foodS
})
}
