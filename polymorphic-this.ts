class Vehicle {
    drive(): this {
        console.log('Driving ', this)
        return this
    }
}

class Car extends Vehicle {
    charge(): this {
        console.log('Charging ', this)
        return this
    }
}

console.log('-------')
const vehicle = new Vehicle()
vehicle.drive()


console.log('-------')
const car = new Car()
car.drive().charge()