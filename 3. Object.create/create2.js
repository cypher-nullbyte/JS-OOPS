const Car=function(color)
{
    this.color=color;
};

const car1=new Car('red');
const car2=Object.create(Car.prototype);
console.dir(car1);
console.dir(car2);

Car.prototype=
{
    getColor()
    {
        return this.color;
    },
    test(){
        return 'test';
    }

};

const ToyCar=function()
{};

ToyCar.prototype=Object.create(Car.prototype);

const legoCar=new ToyCar();
console.dir(legoCar instanceof ToyCar);
console.dir(Car.prototype.isPrototypeOf(legoCar));
console.dir(legoCar instanceof Object);