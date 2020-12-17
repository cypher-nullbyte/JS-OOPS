let Car=function(color)
{
  let  moving=false;
  return Object.assign({},
    {
        color:color,
        drive()
        {moving=true;},
        isMoving()
        {return moving;}
    });
};

let redCar=new Car('red');
console.log(redCar);