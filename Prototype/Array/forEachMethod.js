Array.prototype.forEachMethod = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const numbers = [1, 2, 3, 4, 5];
numbers.forEachMethod((e) => console.log(e));
