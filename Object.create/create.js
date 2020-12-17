// Object.create(prototypeObject, propertyObject);
const myObject=Object.create(Object.prototype);

const myLiteral={};
const noProtor=Object.create(null);

console.dir(myObject);
console.dir(myLiteral);
console.dir(noProtor);
console.dir(Object);