Array.prototype.someMethod = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        };
    };
    return false;
}
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.someMethod((e) => e > 6))