/**
 * The Factory pattern is a creational pattern concerned with the notion of creating objects. 
 * Where it differs from the other patterns in its category is that 
 * it doesn’t explicitly require us to use a constructor. 
 * Instead, a Factory can provide a generic interface for creating objects, 
 * where we can specify the type of factory object we wish to be created.
 * 
 * This pattern is frequently used when we need to manage or manipulate collections of objects 
 * that are different yet have many similar characteristics.
 */

class Bike {
	constructor(options) {
		this.wheels = 2;
		this.color = options.color;
	}
}

class Car {
	constructor(options) {
		this.wheels = 4;
		this.color = options.color;
	}
}

class VehicleFactory {
	createVehicle(options) {
		let vehicle;
    switch(options.type) {
    	case 'Bike': 
        vehicle = new Bike(options);
      	break;
      case 'Car': 
        vehicle = new Car(options);
      	break;
      default: 
        vehicle = new Bike(options);
    }
  	return vehicle;
	}
}

const vehicleFactory = new VehicleFactory();

const bike = vehicleFactory.createVehicle({
	type:'Bike',
  color:'black'
});

console.log(bike); //Bike {wheels: 2, color: "black"}

const car = vehicleFactory.createVehicle({
	type:'Car',
  color:'white'
});

console.log(car); //Car {wheels: 4, color: "white"}

// ES5

// function Bike(options){
//   this.wheels = 2;
//   this.color = options.color;
// }

// function Car(options){
//   this.wheels = 4;
//   this.color = options.color;
// }

// function VehicleFactory(){}

// VehicleFactory.prototype.createVehicle = function(options){
		
//     switch(options.type){
//     	case 'Bike': 
//           this.vehicleClass = Bike;
//       break;
//       case 'Car': 
//           this.vehicleClass = Car;
//       break;
//       default: 
//           this.vehicleClass = Bike;
//     }
    
//     return new this.vehicleClass(options);
// }

// var vehicleFactory = new VehicleFactory();

// var bike = vehicleFactory.createVehicle({
// 	type:'Bike',
//   color:'black'
// });

// console.log(bike); //Bike {wheels: 2, color: "black"}

// var car = vehicleFactory.createVehicle({
// 	type:'Car',
//   color:'white'
// });

// console.log(car); //Car {wheels: 4, color: "white"}
