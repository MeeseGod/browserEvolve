class createSpecimen{
    constructor(name, size, type){
        this.name = name;
        this.size = size;
        this.type = type;
        this.lookForFood = function(){
            if(type == "Carnivore"){

            }
            else if(type == "Herbivore"){
                
            }
        }
    }
}

function newSpecimen(name, size, type){
    let newSpecimen = new createSpecimen(name, size, type);
    return newSpecimen;
}

module.exports = newSpecimen;