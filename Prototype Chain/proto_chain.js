const Car=function(){};

Car.prototype={
    print()
    {
        return 'I am a Car';
    }
};

const ToyCar=function(){};

ToyCar.prototype=Object.create(Car.prototype);

ToyCar.prototype.print=function(){
    return 'I am a toyCar';
};

const ToyTransformer=function(){};

ToyTransformer.prototype=Object.create(ToyCar.prototype);
// ToyTransformer.prototype.print=function()
// {
//     return 'I am a toyTransformer';
// }

let toyota=new Car();
let legoCar=new ToyCar();
let optimusPrim=new ToyTransformer();

console.dir(toyota.print());
console.dir(legoCar.print());
console.dir(optimusPrim.print());