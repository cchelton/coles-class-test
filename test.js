class Vehicle {
  static count = 0; //<--Something like this
  constructor() {
    Vehicle.count++;
  }
}

class Bike extends Vehicle {
  static count = 0;
  constructor() {
    super();
    Bike.count++;
  }
}

class Car extends Vehicle {
  static count = 0;
  constructor() {
    super();
    Car.count++;
  }
}

let softTail = new Bike();
let hotRod = new Car();

console.log(`Vehicles:${Vehicle.count}
Bikes:${Bike.count}
Cars:${Car.count}`);
