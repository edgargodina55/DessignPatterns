interface Handler{
    setNext(handler:Handler):Handler
    handle(code:string):string
  }
  
  abstract class RequestHandler implements Handler{
  
    
    constructor(){
      this.nextHandler = null;
    }
    
    private nextHandler:Handler
    
    public setNext(handler:Handler):Handler{
      this.nextHandler = handler
      return handler
    }
    
    public handle(code:string):string{
      
      if( this.nextHandler) return this.nextHandler.handle(code)
      
      return '';
      
    }
    
    
  }
  
  
  class OnCorrectRequest extends RequestHandler{
    public handle(code:string):string{
      if(code === '200') return 'Correct request'
      
      return super.handle(code)
    }
  }
  
  class OnIncorrectRequest extends RequestHandler{
     public handle(code:string):string{
      if(code === '400') return 'Incorrect Request'
      
      return super.handle(code)
    }
  }
  
  class OnForbbiddenRequest extends RequestHandler{
    public handle(code:string):string{
      if(code === '403') return 'Forbbidden Request'
      
      return super.handle(code)
    }
  }
  
  class OnNewRequest extends RequestHandler{
    public handle(code:string):string{
      if(code === '2795') return 'Godina Request'
      
      return super.handle(code)
    }
  }
  
  const correctRequest = new OnCorrectRequest()
  const incorrectRequest = new OnIncorrectRequest()
  const forbiddenRequest = new OnForbbiddenRequest()
  const newRequest = new OnNewRequest()
  
  function findResponsible(code:string){
    const responsible = correctRequest.handle(code)
    
    if( responsible) return console.log(responsible);
    
    console.error('Inprocessible request')
    
  }
  
  async function fetchSomething(){
    await fetch('https://jsonplaceholder.typicode.com/users')
    
    correctRequest.setNext(forbiddenRequest).setNext(newRequest).setNext(incorrectRequest)
    
    findResponsible(String(2795));
  }
  
  fetchSomething()
  
  