const carBehavior = {
  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  },
  addOwner(ownerToAdd) {
    this.owners.push(ownerToAdd);
  },
  removeOwner(ownerToRemove) {
    this.owners = this.owners.filter((owner) => owner !== ownerToRemove);
  },
  getOwnerNames() {
    return this.owners.map((owner) => owner.fullName());
  },
  getOwnersCount() {
    return this.owners.length;
  },
  getFullInfo() {
    return `${this.make} ${this.model} from ${this.year}. ${
      this.owners.length
    } person owns this car. These are - ${this.getOwnerNames().join(", ")}.`;
  },
};

function Car(make, model, year) {
  let car = Object.create(carBehavior);

  car.make = make;
  car.model = model;
  car.year = year;
  car.owners = [];

  return car;
}

const personBehaviour = {
  fullName() {
    return `${this.name} ${this.surname}`;
  },
  countCars() {
    return this.cars.length;
  },
  buysCar(carToBuy) {
    this.cars.push(carToBuy);
    carToBuy.addOwner(this);
  },
  sellsCar(carToSell) {
    this.cars = this.cars.filter((car) => car !== carToSell);
    carToSell.removeOwner(this);
  },
  getAllCarsInfo() {
    return `${this.name} owns these cars: ${this.cars
      .map((car) => car.getCarInfo())
      .join(", ")}.`;
  },
};

function Person(name, surname, age, gender, cars = []) {
  let person = Object.create(personBehaviour);

  person.name = name;
  person.surname = surname;
  person.age = age;
  person.gender = gender;
  person.cars = cars;

  return person;
}

module.exports = { Car, Person };
