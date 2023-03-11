// function Games(name, price) {
//     this.name = name
//     this.price = price

//     this.getName = function() {
//         return this.name
//     }
    
//     const purchase = true
// }

class Games {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    getName() {
        return this.name
    }
    getPrice() {
        return this.price
    }
}

const CSGO = new Games('CSGO', 1200)
const AOV = new Games('ArenaOfValor', 500)
console.log(CSGO, AOV)