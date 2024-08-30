import { Car } from "../FactoryMethod/factory";
import { Truck } from "../FactoryMethod/factory";



interface AbstractTransportA{
    deliver(): string;
}


interface AbstractTransportB{
    capacity(): string;
}


class CarProductA implements AbstractTransportA{
    deliver(): string {
        return "Car: Delivery with speed"
    }
}

class TruckProductA implements AbstractTransportA{
    deliver(): string {
        return "Truck: Delivery with heavy load"
    }
}

class CarProductB implements AbstractTransportB{
    capacity(): string {
        return "Car: Capacity of 5 passengers"
    }
}

class TruckProductB implements AbstractTransportB{
    capacity(): string {
        return "Truck: Capacity of 20 tons"
    }
}

interface TransportFactory{
    createTransportA(): AbstractTransportA;
    createTransportB(): AbstractTransportB;
}

class CarFactory implements TransportFactory{
    createTransportA(): AbstractTransportA {
        return new CarProductA();
    }
    
    createTransportB(): AbstractTransportB {
        return new CarProductB();
    }
}

class TruckFactory implements TransportFactory{
    createTransportA(): AbstractTransportA {
        return new TruckProductA();
    }

    createTransportB(): AbstractTransportB {
        return new TruckProductB();
    }
}

const someCode = (factory: TransportFactory) => {
    const transportA = factory.createTransportA();
    const transportB = factory.createTransportB();

    console.log(transportA.deliver())
    console.log(transportB.capacity())
}
console.log('Client: Testing client code with the Car factory...');
someCode(new CarFactory());

console.log('');

console.log('Client: Testing client code with the Truck factory...');
someCode(new TruckFactory());

