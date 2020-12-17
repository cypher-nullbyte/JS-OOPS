//Object.setPrototypeOf(destinationObj,sourceObj)

let toyota={
    drive()
    {return 'driving toyota';}
};

let camry={
    drive()
    {
        return `${super.drive()} camry`;
    },
    wifi()
    {return 'using wifi';}
};

Object.setPrototypeOf(camry,toyota);
// camry.__proto__=toyota; // It works but not recommended :)
console.dir(camry);
console.log(camry.drive());
console.log(camry.wifi());