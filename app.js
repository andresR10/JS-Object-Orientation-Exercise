class Vehicle {
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk(){
        return "beep.";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

//let myFirstVehicle = new Vehicle('Infiniti', 'Q50', 2016);

class Car extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 4;
    }
}

//let myFirstCar = new Car('Mazda', 'CX5', 2021);


class Motorcycle extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!"
    }
}
//let myFirstMotorcycle = new Motorcycle('Ducati', 'Lightspeed', 2015);

class Garage {
    constructor(){
        this.vehicles = [];
        this.capacity = 3;
    }
  add(vehicle){
    if(vehicle instanceof Vehicle){
        if(this.vehicles.length < this.capacity){
            this.vehicles.push(vehicle)
            console.log('New vehicle added to the garage!')
            } else {
            console.log("Sorry we're full!")
            }
        } else {
        console.log("Only vehicles allowed here man!")
        }
    }
  }



