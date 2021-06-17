class Car
{
    constructor(color,price)
    {
        Object.assign(this,{color,price});
    }
    static comparePrice(car1,car2)
    {
        return Math.abs(car1.price-car2.price);
    }
    getColor()
    {
        return this.color;
    }
}


const redCar=new Car('red',100);
const blueCar=new Car('blue',102);

console.log(redCar.getColor());
console.log(Car.comparePrice(redCar,blueCar));