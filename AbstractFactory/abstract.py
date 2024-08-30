from abc import ABC,abstractmethod

class Shirt(ABC):

    @abstractmethod
    def has_long_sleeves(self) -> bool:
        pass
    
    @abstractmethod
    def has_buttons(self) -> bool:
        pass


class Shoe(ABC):

    @abstractmethod
    def is_elegant_shoes(self) -> bool:
        pass
    
    @abstractmethod
    def is_running_shoes(self) -> bool:
        pass

class Trouser(ABC):

    @abstractmethod
    def has_pockets(self) -> bool:
        pass
    
    @abstractmethod
    def get_closure_type(self) -> bool:
        pass

class SportShirt(Shirt):

    def has_buttons(self) -> bool:
        return False
    
    def has_long_sleeves(self) -> bool:
        return False

class SportShoe(Shoe):

    def is_elegant_shoes(self) -> bool:
        return False
    
    def is_running_shoes(self) -> bool:
        return True
    
class SportTrouser(Trouser):

    def has_pockets(self) -> bool:
        return True
    
    def get_closure_type(self) -> bool:
        return "No have"

class GalaShirt(Shirt):

    def has_buttons(self) -> bool:
        return True
    
    def has_long_sleeves(self) -> bool:
        return True

class GalaShoe(Shoe):

    def is_elegant_shoes(self) -> bool:
        return True
    
    def is_running_shoes(self) -> bool:
        return False
    
class GalaTrouser(Trouser):

    def has_pockets(self) -> bool:
        return True
    
    def get_closure_type(self) -> bool:
        return "Yes it has"
class ClothesFactory(ABC):

    @abstractmethod
    def create_shoe(self) -> Shoe:
        pass

    @abstractmethod
    def create_shirt(self) -> Shoe:
        pass

    @abstractmethod
    def create_trousers(self) -> Shoe:
        pass


class SportClothesFactory(ClothesFactory):

    def create_shoe(self) -> Shoe:
        return SportShoe()
    
    def create_shirt(self) -> Shoe:
        return SportShirt()
    
    def create_trousers(self) -> Shoe:
        return SportTrouser()
    
class GalaClothesFactory(ClothesFactory):

    def create_shoe(self) -> Shoe:
        return GalaShoe()
    
    def create_shirt(self) -> Shoe:
        return GalaShirt()
    
    def create_trousers(self) -> Shoe:
        return GalaTrouser()
    


sportFactory:ClothesFactory = SportClothesFactory()
galaFactory:ClothesFactory =    GalaClothesFactory()
sport_shirt = sportFactory.create_shirt()
sport_shoe = sportFactory.create_shoe()
sport_trousers = sportFactory.create_trousers()

print("Sport Shirt:")
print("  Has Buttons:", sport_shirt.has_buttons())
print("  Has Long Sleeves:", sport_shirt.has_long_sleeves())

print("Sport Shoe:")
print("  Is Elegant Shoes:", sport_shoe.is_elegant_shoes())
print("  Is Running Shoes:", sport_shoe.is_running_shoes())

print("Sport Trousers:")
print("  Has Pockets:", sport_trousers.has_pockets())
print("  Closure Type:", sport_trousers.get_closure_type())

print("\n---\n")

gala_shirt = galaFactory.create_shirt()
gala_shoe = galaFactory.create_shoe()
gala_trousers = galaFactory.create_trousers()

print("Sport Shirt:")
print("  Has Buttons:", gala_shirt.has_buttons())
print("  Has Long Sleeves:", gala_shirt.has_long_sleeves())

print("Sport Shoe:")
print("  Is Elegant Shoes:", gala_shoe.is_elegant_shoes())
print("  Is Running Shoes:", gala_shoe.is_running_shoes())

print("Sport Trousers:")
print("  Has Pockets:", gala_trousers.has_pockets())
print("  Closure Type:", gala_trousers.get_closure_type())

print("\n---\n")