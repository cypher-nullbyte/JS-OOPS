'use strict';
let Car=function(color)
{
    try
    {
        if(!new.target) throw 'Car() must be called with new! ';
        this.color=color;
    }
    catch(err)
    {
        console.error(err);
    }

};

let redCar= new Car('red');
console.dir(redCar);