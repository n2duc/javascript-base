Array.prototype.reverseMethod = function() {
    let leftIndex = 0;
    let rightIndex = this.length - 1;
    while (leftIndex < rightIndex) {
        let temp = this[leftIndex];
        this[leftIndex] = this[rightIndex];
        this[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
    return this;
}
const Cars = [1, 2, 3, 4, 5];
console.log(Cars.reverseMethod());