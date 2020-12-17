const humanFactory=function(obj)
{
    let isCrying=false;
    return Object.assign({},obj,{
        cry()
        {isCrying=true;},
        isCrying()
        {return isCrying;}
    });
};

const flyFactory=function(obj)
{
    let isFlying=false;
    return Object.assign({},obj,{
       fly()
       {isFlying=true;},
       isFlying()
       {return isFlying;} 
    });
};

let superMan=humanFactory(flyFactory({}));

superMan.fly();
console.log(superMan.isFlying());