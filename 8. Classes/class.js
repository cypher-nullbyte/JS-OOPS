class Car{
    constructor(color)
    {this.color=color;}
    
    drive()
    {
        console.log('driving');
    }
}

console.dir(Car);
let redCar=new Car('Red');
redCar.drive();