//Create variables here
var dog, happydog, database, foods, foodstock, dogsprite
x="20"

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
  happydog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1600, 1600);
  database = firebase.database()
 dogsprite = createSprite(800,800,10,10)
  
  dogsprite.addImage(dog)
  foodstock = database.ref('food')
  foodstock.on("value",readStock)
  
}


function draw() {
  background(46,139,87)  

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dogsprite.addImage(happydog)
  }
  if(keyWentUp(UP_ARROW)){
    writeStock(foods)
    dogsprite.addImage(dog)
  }
  drawSprites();
  textSize(35)
        fill("white")
        text("food: "+foods,300, 50)
        text("press up arrow to feed the dog",300, 100)
  //add styles here

}
function readStock(data){
  foods=data.val()

}
function writeStock(x){
  if(x<=0){
x=0
  }
  else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}


