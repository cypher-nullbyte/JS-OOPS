const jsSkill=
{
    knowsJS()
    {return true;}
};

const engDegree={
    hasDegree()
    {return true;}
};

const jsEngineer=Object.assign({},jsSkill,engDegree);
console.dir(jsEngineer);