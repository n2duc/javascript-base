Array.prototype.everyMethod = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        };
    };
    return true;
}
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.everyMethod((e) => e >= 1))