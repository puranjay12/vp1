class Food {
    constructor() {
       var getFoodStock, updateFoodStock
      
    }
  
    display(){

        this.image = loadImage("milk.png");

      fill(255,255,254)
      textSize(15)
      if(lastFed>=12){
Text("last Feed: "+ lastFed%12+"PM",350,30)
      }
      else if(lastFed===0){
text("last feed: 12 AM",350,30)
      }
      else{
          text("lastFeed: "+lastfed+"AM",350,30)
      }
    }
  }