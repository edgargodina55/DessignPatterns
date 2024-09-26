using System;

    public interface IShirt
    {
        bool HasLongSleeves();

        bool HasButtons();
    }

    public interface IShoe
    {
        bool IsElegantShoes();

        bool IsRunningShoes();
    }

    public interface ITrousers
    {
        bool HasPockets(); 
        string GetClosureType();
    }

    public interface IClothesFactory
    {
        IShirt CreateShirt();
        IShoe CreateShoes();
        ITrousers CreateTrousers();
    }

    public class SportShirt : IShirt
    {
        public bool HasLongSleeves()
        {
            return false;
        }

        public bool HasButtons()
        { 
            return false;        
        }
    }

    public class SportShoe : IShoe
    {
        public bool IsElegantShoes()
        {
            return false;
        }

        public bool IsRunningShoes()
        {
            return true;
        }
    }

    public class SportTrousers : ITrousers
    {
        public bool HasPockets()
        {
            return false;
        }

        public string GetClosureType()
        {
            return "Doesn't Have Closure Type";
        }
    }

    public class ElegantShoes : IShoe
    {
        public bool IsElegantShoes()
        {
            return true;
        }

        public bool IsRunningShoes()
        {
            return false;
        }
    }

    public class ElegantShirt : IShirt
    {
        public bool HasLongSleeves()
        {
            return true;
        }

        public bool HasButtons()
        {
            return true;
        }
    }

    public class ElegantTrousers : ITrousers
    {
        public bool HasPockets()
        {
            return true;
        }

        public string GetClosureType()
        {
            return "Closure Elegant Type";
        }
    }

    class SportClothesFactory : IClothesFactory
    {
        public IShirt CreateShirt()
        {
            return new SportShirt();

        }

        public IShoe CreateShoes()
        {
            return new SportShoe();
        }

        public ITrousers CreateTrousers()
        {
            return new SportTrousers();
        }
    }

    class ElegantClothesFactory : IClothesFactory
    {
        public IShirt CreateShirt()
        {
            return new ElegantShirt();
        }

        public IShoe CreateShoes()
        {
            return new ElegantShoes();
        }

        public ITrousers CreateTrousers()
        {
            return new ElegantTrousers();
        }
    }

     public class Program
    {
        static void Main(string[] args)
        {
                
             // Abstract Factory Method
            IClothesFactory SportsFactory = new SportClothesFactory();
            IClothesFactory ElegantFactory = new ElegantClothesFactory();

            IShirt sportShirt = SportsFactory.CreateShirt();
            IShoe sportShoes = SportsFactory.CreateShoes();
            ITrousers sportTrousers = SportsFactory.CreateTrousers();
            
            IShirt elegantShirt = ElegantFactory.CreateShirt();
            IShoe ElegantShoes = ElegantFactory.CreateShoes();
            ITrousers elegantTrousers = ElegantFactory.CreateTrousers();

            Console.WriteLine("Elegant clothes");
            Console.WriteLine("Has buttons " + elegantShirt.HasButtons());
            Console.WriteLine("Has Long sleeves " + elegantShirt.HasLongSleeves());
            Console.WriteLine("Is elegant shoes: " + ElegantShoes.IsElegantShoes());
            

        }
        
        
    }


