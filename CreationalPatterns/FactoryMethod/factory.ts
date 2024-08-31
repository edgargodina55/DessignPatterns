interface Transport{
    delivery(): string;
}

export class Car implements Transport{
    delivery(): string {
        return "Delivery by car";
    }
}

export class Truck implements Transport{
     delivery(): string {
        return "Delivery by truck";
    }
}


abstract class TransportFactory {

    abstract factoryMethod(): Transport;

    someOperation(): string {
        const transport =  this.factoryMethod();
        return transport.delivery();
    }

}

class CarFactory extends  TransportFactory {

    factoryMethod(): Transport {
        return new Car();
    }

}


class TruckFactory extends TransportFactory{

    factoryMethod(): Transport {
        return new Truck();
    }

}

const someCode = (factory:  TransportFactory) =>{
    console.log(factory.someOperation());
}


someCode(new CarFactory());
someCode(new TruckFactory());
