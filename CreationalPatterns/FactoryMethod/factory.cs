using System;


    public interface ITransport
    {
        string Delivery();
    }

    public class Car : ITransport
    {
        public string Delivery()
        {
            return "Delivery by Car";
        }
    }

    public class Truck : ITransport
    {
        public string Delivery()
        {
            return "Delivery by Truck";
        }
    }

    
    public abstract class TransportFactory
    {
        public abstract ITransport FactoryMethod();

        public string SomeOperation()
        {
            var transport = this.FactoryMethod();
            return transport.Delivery();
        }
    }

    public class CarFactory : TransportFactory
    {
        public override ITransport FactoryMethod()
        {
            return new Car();                        
        }
    }

    public class TruckFactory : TransportFactory
    {
        public override ITransport FactoryMethod()
        {
            return new Truck();
        }
    }

    public class Program
    {
        static void Main(string[] args)
        {
                
            TransportFactory factory = new CarFactory();
            TransportFactory transport = new TruckFactory();

            Console.WriteLine(factory.SomeOperation());
            Console.WriteLine(transport.SomeOperation());
            Console.WriteLine(factory.FactoryMethod());
            Console.WriteLine(transport.FactoryMethod());
                
                

        }
        
        
    }


