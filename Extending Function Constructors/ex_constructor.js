let Mammal=function(legs)
{
    this.legs=legs;
};

Mammal.prototype=
{
    walk()
    {return 'Walking!';},
    sleep()
    {return 'Sleeping!';}
};

let Bat=function(legs,isVegetarian)
{
    Mammal.call(this,legs);
    this.isVegetarian=isVegetarian;
};

Bat.prototype=Object.create(Mammal.prototype);
Bat.prototype.constructor=Bat; // Have to add Constructor again because Above Objec.create(...) wipes out everything :(
Bat.prototype.fly=function()
{return 'Flying!';};

let fruitBat=new Bat(4,true);
console.dir(fruitBat.sleep());
console.dir(fruitBat.fly());