from abc import ABC,abstractmethod

class Transport(ABC):

    @abstractmethod
    def delivery(self) -> str:
        pass

class Car(Transport):
    
    def delivery(self) -> str:
        return "Delivery by Car"
    

class Truck(Transport):

    def delivery(self) -> str:
        return "Delivery by Truck"
    
class TransportFactory(ABC):

    @abstractmethod
    def factory_method(self) -> Transport:
        pass

    def some_operation(self) -> str:
        transport = self.factory_method()
        return transport.operation()
    

class CarFactory(TransportFactory):
    def factory_method(self) -> Transport:
        return Car()
    
class TruckFactory(TransportFactory):

    def factory_method(self) -> Transport:
        return Truck()

def some_code(factory:TransportFactory):
    print(factory.some_operation())

some_code(CarFactory())
some_code(TruckFactory())