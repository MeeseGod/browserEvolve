class createPlanet{
    constructor(name, size, type){
        this.name = name;
        this.size = size;
        this.type = type;
    }
}

function newPlanet(name, size, type){
    let newPlanet = new createPlanet(name, size, type);
    return newPlanet;
}

module.exports = newPlanet;