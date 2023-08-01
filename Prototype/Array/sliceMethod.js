Array.prototype.sliceMethod = function(startIndex, endIndex) {
    let sliceArray = [];
    if (endIndex === undefined) {
        endIndex = this.length;
    }
    if (startIndex < 0) {
        startIndex = this.length + startIndex;
    }
    if (endIndex < 0) {
        endIndex = this.length + endIndex;
    }
    for (let i = startIndex; i < endIndex; i++) {
        sliceArray.push(this[i]);
    }
    return sliceArray;
}
const Countrys = ["Curaçao", "Uganda", "San Marino", "Lebanon", "Vietnam"];
const cloneCountry = Countrys.sliceMethod(2, -1);
console.log(cloneCountry)