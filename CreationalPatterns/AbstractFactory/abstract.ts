interface Shirt{
    hasLongSleeves():boolean;
    hasButtons():boolean;
  }
  
  interface Shoe {
    
    isElegantShoes(): boolean;
    
    isRunningShoes(): boolean;
  }
  
  interface Trousers {
    
    hasPockets():boolean;
    
    getClosureType():String
  
  }
  
  interface ClothesFactory{
    
    createShoes():Shoe;
    createShirt():Shirt;
    createTrouser():Trousers;
    
  }

class SportShirt implements Shirt{

    hasButtons(): boolean {
        return false;
    }

    hasLongSleeves(): boolean {
        return false;
    }

}

class GalaShirt implements Shirt{

    hasButtons(): boolean {
        return true;
    }

    hasLongSleeves(): boolean {
        return true;
    }
}

class SportShoe implements Shoe{

    isElegantShoes(): boolean {
        return false;
    }

    isRunningShoes(): boolean {
        return true;
    }

    

}

class GalaShoe implements Shoe{

    isElegantShoes(): boolean {
        return true;
    }

    isRunningShoes(): boolean {
        return false;
    }

}

class SportTrousers implements Trousers {

    hasPockets(): boolean {
        return false;
    }

    getClosureType(): String {
        return "Doesn't have closure type"
    }

}

class GalaTrousers implements Trousers {

    hasPockets(): boolean {
        return true;
    }

    getClosureType(): String {
        return "Closure Gala type"
    }

}

class SportClothesFactory implements ClothesFactory {

    createShoes(): Shoe {
        return new SportShoe();
    }

    createShirt(): Shirt {
        return new SportShirt();
    }

    createTrouser(): Trousers {
        return new SportTrousers();
    }
}

class GalaClothesFactory implements ClothesFactory{

    createShoes(): Shoe {
        return new GalaShoe();
    }

    createShirt(): Shirt {
        return new GalaShirt();
    }

    createTrouser(): Trousers {
        return new GalaTrousers();
    }

}


// Creation and Logging

const sportFactory: ClothesFactory = new SportClothesFactory();
const galaFactory: ClothesFactory = new GalaClothesFactory();

const sportShirt: Shirt = sportFactory.createShirt();
const sportShoe: Shoe = sportFactory.createShoes();
const sportTrousers: Trousers = sportFactory.createTrouser();

console.log("Sport Shirt:");
console.log("  Has Buttons:", sportShirt.hasButtons());
console.log("  Has Long Sleeves:", sportShirt.hasLongSleeves());

console.log("Sport Shoe:");
console.log("  Is Elegant Shoes:", sportShoe.isElegantShoes());
console.log("  Is Running Shoes:", sportShoe.isRunningShoes());

console.log("Sport Trousers:");
console.log("  Has Pockets:", sportTrousers.hasPockets());
console.log("  Closure Type:", sportTrousers.getClosureType());

console.log("\n---\n");

const galaShirt: Shirt = galaFactory.createShirt();
const galaShoe: Shoe = galaFactory.createShoes();
const galaTrousers: Trousers = galaFactory.createTrouser();

console.log("Gala Shirt:");
console.log("  Has Buttons:", galaShirt.hasButtons());
console.log("  Has Long Sleeves:", galaShirt.hasLongSleeves());

console.log("Gala Shoe:");
console.log("  Is Elegant Shoes:", galaShoe.isElegantShoes());
console.log("  Is Running Shoes:", galaShoe.isRunningShoes());

console.log("Gala Trousers:");
console.log("  Has Pockets:", galaTrousers.hasPockets());
console.log("  Closure Type:", galaTrousers.getClosureType());
