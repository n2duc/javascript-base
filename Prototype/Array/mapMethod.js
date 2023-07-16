Array.prototype.mapMethod = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.mapMethod((n) => n + 1);
console.log(newNumbers);