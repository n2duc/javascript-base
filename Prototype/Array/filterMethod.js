Array.prototype.filterMethod = function(callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            results.push(this[i]);
        };
    }
    return results;
};
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.filterMethod((n) => n > 2);
console.log(newNumbers);