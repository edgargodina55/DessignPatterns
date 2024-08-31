var SportShirt = /** @class */ (function () {
    function SportShirt() {
    }
    SportShirt.prototype.hasButtons = function () {
        return false;
    };
    SportShirt.prototype.hasLongSleeves = function () {
        return false;
    };
    return SportShirt;
}());
var GalaShirt = /** @class */ (function () {
    function GalaShirt() {
    }
    GalaShirt.prototype.hasButtons = function () {
        return true;
    };
    GalaShirt.prototype.hasLongSleeves = function () {
        return true;
    };
    return GalaShirt;
}());
var SportShoe = /** @class */ (function () {
    function SportShoe() {
    }
    SportShoe.prototype.isElegantShoes = function () {
        return false;
    };
    SportShoe.prototype.isRunningShoes = function () {
        return true;
    };
    return SportShoe;
}());
var GalaShoe = /** @class */ (function () {
    function GalaShoe() {
    }
    GalaShoe.prototype.isElegantShoes = function () {
        return true;
    };
    GalaShoe.prototype.isRunningShoes = function () {
        return false;
    };
    return GalaShoe;
}());
var SportTrousers = /** @class */ (function () {
    function SportTrousers() {
    }
    SportTrousers.prototype.hasPockets = function () {
        return false;
    };
    SportTrousers.prototype.getClosureType = function () {
        return "Doesn't have closure type";
    };
    return SportTrousers;
}());
var GalaTrousers = /** @class */ (function () {
    function GalaTrousers() {
    }
    GalaTrousers.prototype.hasPockets = function () {
        return true;
    };
    GalaTrousers.prototype.getClosureType = function () {
        return "Closure Gala type";
    };
    return GalaTrousers;
}());
var SportClothesFactory = /** @class */ (function () {
    function SportClothesFactory() {
    }
    SportClothesFactory.prototype.createShoes = function () {
        return new SportShoe();
    };
    SportClothesFactory.prototype.createShirt = function () {
        return new SportShirt();
    };
    SportClothesFactory.prototype.createTrouser = function () {
        return new SportTrousers();
    };
    return SportClothesFactory;
}());
var GalaClothesFactory = /** @class */ (function () {
    function GalaClothesFactory() {
    }
    GalaClothesFactory.prototype.createShoes = function () {
        return new GalaShoe();
    };
    GalaClothesFactory.prototype.createShirt = function () {
        return new GalaShirt();
    };
    GalaClothesFactory.prototype.createTrouser = function () {
        return new GalaTrousers();
    };
    return GalaClothesFactory;
}());
// Creation and Logging
var sportFactory = new SportClothesFactory();
var galaFactory = new GalaClothesFactory();
var sportShirt = sportFactory.createShirt();
var sportShoe = sportFactory.createShoes();
var sportTrousers = sportFactory.createTrouser();
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
var galaShirt = galaFactory.createShirt();
var galaShoe = galaFactory.createShoes();
var galaTrousers = galaFactory.createTrouser();
console.log("Gala Shirt:");
console.log("  Has Buttons:", galaShirt.hasButtons());
console.log("  Has Long Sleeves:", galaShirt.hasLongSleeves());
console.log("Gala Shoe:");
console.log("  Is Elegant Shoes:", galaShoe.isElegantShoes());
console.log("  Is Running Shoes:", galaShoe.isRunningShoes());
console.log("Gala Trousers:");
console.log("  Has Pockets:", galaTrousers.hasPockets());
console.log("  Closure Type:", galaTrousers.getClosureType());
