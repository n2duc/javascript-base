//Cách thức hoạt động của việc truyền và không truyền initial value

//Không truyền initial value
Array.prototype.reduce2 = function(callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0]
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
const numbers2 = [1, 2, 3, 4, 5]
const result2 = numbers2.reduce2(function(total, number, index, array) {
    console.log(total, number, index, array)
    return total + number
})
console.log(result2)
console.log(`============================================================`)

//Truyền initial value
Array.prototype.reduce3 = function(callback, result) {
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5]
const result = numbers.reduce3(function(total, number, index, array) {
        console.log(total, number, index, array)
        return total + number
    }, 10) //initial value
console.log(result)

const Cars = [
    {
        name: 'Mec',
        Price: 100,
        Country: 'Germany'
    },
    {
        name: 'Honda',
        Price: 150,
        Country: 'Japan'
    },
    {
        name: 'VinFast',
        Price: 100,
        Country: 'VietNam'
    },
    {
        name: 'Yamaha',
        Price: 200,
        Country: 'China'
    }
]