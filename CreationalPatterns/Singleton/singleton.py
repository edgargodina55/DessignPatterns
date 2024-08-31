class Database:

    __instance = None

    def __init__(self):
        if Database.__instance != None:
            raise Exception("Sigleton object already created")
        else:
            Database.__instance = self

    @staticmethod
    def get_instance():
        if Database.__instance is None:
            Database()
        return Database.__instance

def client_code() -> str : 
    s1 = Database.get_instance()
    s2 = Database.get_instance()

    if s1 is s2:
        print("Singleton works, both variables contain the same instance.")
    else:
        print("Singleton failed, varables contain different instances.")

client_code()