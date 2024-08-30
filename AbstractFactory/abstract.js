"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarProductA = /** @class */ (function () {
    function CarProductA() {
    }
    CarProductA.prototype.deliver = function () {
        return "Car: Delivery with speed";
    };
    return CarProductA;
}());
var TruckProductA = /** @class */ (function () {
    function TruckProductA() {
    }
    TruckProductA.prototype.deliver = function () {
        return "Truck: Delivery with heavy load";
    };
    return TruckProductA;
}());
var CarProductB = /** @class */ (function () {
    function CarProductB() {
    }
    CarProductB.prototype.capacity = function () {
        return "Car: Capacity of 5 passengers";
    };
    return CarProductB;
}());
var TruckProductB = /** @class */ (function () {
    function TruckProductB() {
    }
    TruckProductB.prototype.capacity = function () {
        return "Truck: Capacity of 20 tons";
    };
    return TruckProductB;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createTransportA = function () {
        return new CarProductA();
    };
    CarFactory.prototype.createTransportB = function () {
        return new CarProductB();
    };
    return CarFactory;
}());
var TruckFactory = /** @class */ (function () {
    function TruckFactory() {
    }
    TruckFactory.prototype.createTransportA = function () {
        return new TruckProductA();
    };
    TruckFactory.prototype.createTransportB = function () {
        return new TruckProductB();
    };
    return TruckFactory;
}());
var someCode = function (factory) {
    var transportA = factory.createTransportA();
    var transportB = factory.createTransportB();
    console.log(transportA.deliver());
    console.log(transportB.capacity());
};
console.log('Client: Testing client code with the Car factory...');
someCode(new CarFactory());
console.log('');
console.log('Client: Testing client code with the Truck factory...');
someCode(new TruckFactory());
