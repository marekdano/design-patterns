/**
 * SINGLETON
 * 
 * The singleton pattern is used when you only ever want exactly ONE instance of an object. 
 * The pattern can be implemented by creating a class with a method 
 * that creates a new instance of the class if one doesn’t exist. 
 * In the event of an instance already existing, it simply returns a reference to that object.
 */

const singleton = (function() {
  let instance;
  
  function init(){
    let name;
    this.setName = function(name){
       this.name = name;
    }
    
    this.getName = function(){
      return this.name;
    }
    
    return {
      setName,
      getName,
    };
  }
  
  function getInstance(){
    if(!instance){
      instance = init();
    }
    
    return instance;
  }
    
  return {
    getInstance
  }  
})();


var one = singleton.getInstance();
var two = singleton.getInstance();

//the two instance are the same
one == two //true

one.setName('Akash');
two.getName(); //"Akash"


// another sample of using singleton
class Car { 
  
  constructor(model, year, miles) { 
    if(Car.exists) { 
      return Car.instance 
    } 
    this.model = model; 
    this.year = year; 
    this.miles = miles; 
    Car.exists = true; 
    Car.instance = this; 
    return this 
  } 
  
  toString() { 
    return this.model + " has done " + this.miles + " miles"; 
  } 
} 

let civic = new Car( "Honda Civic", 2009, 20000 ); 
let mondeo = new Car( "Ford Mondeo", 2010, 5000 ); 
    
console.log( civic.toString() ); // Honda Civic has done 20000 miles 
console.log( mondeo.toString() ); // Honda Civic has done 20000 miles
