from abc import ABC,abstractmethod
import copy

class IPrototype(ABC):

    @abstractmethod
    def clone():
        pass

class UserProfile(IPrototype):

    def __init__(self,username):
        self._username= username
    
    def clone(self):
        return copy.deepcopy(self)
    
    def get_username(self):
        return self._username


class PremiumUserProfile(UserProfile):

    def __init__(self, username,sublevel):
        super().__init__(username)
        self.sublevel = sublevel

    def clone(self):
        return copy.deepcopy(self)
    
    def get_sub_level(self):
        return self.sublevel
    

def client_code():
    basic_user = UserProfile("Edgar Godina")
    print(f"Basic User: {basic_user}")

    cloned_basic_user = basic_user.clone()
    print(f"Cloned basic user: {cloned_basic_user}")

    premium_user = PremiumUserProfile(cloned_basic_user.get_username(),"Premium")
    print(f"Premium User: {premium_user.get_username()} - {premium_user.get_sub_level()}")


client_code()