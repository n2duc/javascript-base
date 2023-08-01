Array.prototype.sortMethod = function(compareFunction) {
    if (this.length <= 1) {
        return this;
    }
    if (!compareFunction) {
        compareFunction = (a, b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        };
    }

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (compareFunction(this[i], this[j]) > 0) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }

    return this;
}
const Countrys = ["Curaçao", "Uganda", "San Marino", "Lebanon", "Vietnam"];
const randomNums = [4, 6, 12, 1, 7, 9, 3, 5, 10];
console.log(Countrys.sortMethod())
console.log(randomNums.sortMethod((a, b) => a - b))