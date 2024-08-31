class Database{
    
    static instance:Database;
    
    private constructor(){}
      
    
    public static getInstance():Database{
      
      if(!Database.instance){
        Database.instance = new Database()
      }
    
      return Database.instance;
    }
    
    public someBussinessLogic(){
      console.log("Hola")
    }
    
}
  
function clientCode(){
    const s1 = Database.getInstance();
    const s2 = Database.getInstance();
    if( s1 === s2){
      console.log("Singleton works, both variables contain the same instance.")
      s1.someBussinessLogic()
    }else{
      console.log("Singleton failed, varables contain different instances.")
    }
  }
  
  clientCode();