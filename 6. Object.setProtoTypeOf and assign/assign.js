let toyota={
    drive()
    {
        return 'driving toyota';
    },
    break()
    {
        return 'breaking toyota';
    }
};

let camry={
    wifi()
    {
        return 'using wifi in camry';
    }
};
// assing makes shallow copy unlike setProtoypeOf.
// It also over-writes in case of name collision.
Object.assign(camry,toyota);
console.dir(camry);


Object.assign(toyota,{
    wifi()
    {
        return 'using wifi in toyota';
    },
    color:'red'
});

console.dir(toyota);
console.log('---------------');
let c1=function(x,y,z)
{
    this.x=x;
    Object.assign(this,{y,z});
}

let x=new c1(1,2,3);
console.dir(x);