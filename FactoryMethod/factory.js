"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.delivery = function () {
        return "Delivery by car";
    };
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.delivery = function () {
        return "Delivery by truck";
    };
    return Truck;
}());
exports.Truck = Truck;
var TransportFactory = /** @class */ (function () {
    function TransportFactory() {
    }
    TransportFactory.prototype.someOperation = function () {
        var transport = this.factoryMethod();
        return transport.delivery();
    };
    return TransportFactory;
}());
var CarFactory = /** @class */ (function (_super) {
    __extends(CarFactory, _super);
    function CarFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarFactory.prototype.factoryMethod = function () {
        return new Car();
    };
    return CarFactory;
}(TransportFactory));
var TruckFactory = /** @class */ (function (_super) {
    __extends(TruckFactory, _super);
    function TruckFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TruckFactory.prototype.factoryMethod = function () {
        return new Truck();
    };
    return TruckFactory;
}(TransportFactory));
var someCode = function (factory) {
    console.log(factory.someOperation());
};
someCode(new CarFactory());
someCode(new TruckFactory());
