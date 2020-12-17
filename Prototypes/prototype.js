let Car=function(color)
{
    this.color=color;

    // this.getColor=function()
    // {
    //     return this.color;
    // }
};
Car.prototype.getColor=function()
{
    return this.color;
};

Object.prototype.toString=function()
{
    return `color: ${this.color}`;
};


let redCar=new Car('red');
console.dir(redCar);

console.log(redCar.toString());