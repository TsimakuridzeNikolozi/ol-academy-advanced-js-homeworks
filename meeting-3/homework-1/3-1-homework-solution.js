class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
    this.owners = [];
  }

  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  }

  addOwner(ownerToAdd) {
    this.owners.push(ownerToAdd);
  }

  removeOwner(ownerToRemove) {
    this.owners = this.owners.filter((owner) => owner !== ownerToRemove);
  }

  getOwnersCount() {
    return this.owners.length;
  }

  getOwnerNames() {
    return this.owners.map((owner) => owner.fullName());
  }

  getFullInfo() {
    return `${this.make} ${this.model} from ${this.year}. ${
      this.owners.length
    } person owns this car. These are - ${this.getOwnerNames().join(", ")}.`;
  }
}

class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
  }

  fullName() {
    return `${this.name} ${this.surname}`;
  }

  countCars() {
    return this.cars.length;
  }

  buysCar(carToBuy) {
    this.cars.push(carToBuy);
    carToBuy.addOwner(this);
  }

  sellsCar(carToSell) {
    this.cars = this.cars.filter((car) => car !== carToSell);
    carToSell.removeOwner(this);
  }

  getAllCarsInfo() {
    return `${this.name} owns these cars: ${this.cars
      .map((car) => car.getCarInfo())
      .join(", ")}.`;
  }
}

module.exports = { Car, Person };
