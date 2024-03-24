function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.owners = [];

  this.getCarInfo = function () {
    return `${this.make} ${this.model} released in ${this.year}`;
  };

  this.addOwner = function (ownerToAdd) {
    this.owners.push(ownerToAdd);
  };

  this.removeOwner = function (ownerToRemove) {
    this.owners = this.owners.filter((owner) => owner !== ownerToRemove);
  };

  this.getOwnersCount = function () {
    return this.owners.length;
  };

  this.getOwnerNames = function () {
    return this.owners.map((owner) => owner.fullName());
  };

  this.getFullInfo = function () {
    return `${this.make} ${this.model} from ${this.year}. ${
      this.owners.length
    } person owns this car. These are - ${this.getOwnerNames().join(", ")}.`;
  };
}

function Person(name, surname, age, gender, cars = []) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.cars = cars;

  this.fullName = function () {
    return `${this.name} ${this.surname}`;
  };

  this.countCars = function () {
    return this.cars.length;
  };

  this.buysCar = function (carToBuy) {
    this.cars.push(carToBuy);
    carToBuy.addOwner(this);
  };

  this.sellsCar = function (carToSell) {
    this.cars = this.cars.filter((car) => car !== carToSell);
    carToSell.removeOwner(this);
  };

  this.getAllCarsInfo = function () {
    return `${this.name} owns these cars: ${this.cars
      .map((car) => car.getCarInfo())
      .join(", ")}.`;
  };
}

module.exports = { Car, Person };
