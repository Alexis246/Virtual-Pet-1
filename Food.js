class Food {
    constructor(){
    this.foodStock=0;
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
    }
}