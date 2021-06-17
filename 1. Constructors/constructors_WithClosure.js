//This is how we can have private Data in JS 

let Car=function(_color)
{
    this.setColor=function(color)
    {
        _color=color;
    };
    this.getColor=function()
    {
        return _color;
    };

};
let redCar=new Car('red');

//we can't access '_color' property of redCar object directly!
console.log(redCar._color);

//It works Thought !
console.log(redCar.getColor());